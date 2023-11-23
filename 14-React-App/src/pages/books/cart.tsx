/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2 } from "lucide-react";

import Layout from "@/components/layout";

import useCartStore from "@/utils/state";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { createBorrow } from "@/utils/apis/borrows";

const Cart = () => {
  const { cart, deleteBook, removeCart } = useCartStore();
  const { toast } = useToast();

  async function onBorrow() {
    const body = {
      bookId: cart.map((item) => item.id),
      borrow_date: new Date().toISOString(),
    };

    try {
      const result = await createBorrow(body);
      removeCart()
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        {cart.map((book) => (
          <div className="flex gap-2 items-center" key={book.id}>
            <img
              className="object-contain w-40"
              src={book.cover_image}
              alt={book.title}
            />
            <p className="flex-grow">{book.title}</p>
            <Trash2 onClick={() => deleteBook(book)} />
          </div>
        ))}
        <Button onClick={() => onBorrow()}>Borrow</Button>
      </div>
    </Layout>
  );
};

export default Cart;
