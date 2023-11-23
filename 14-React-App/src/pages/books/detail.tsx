/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Book, getDetailBooks } from "@/utils/apis/books";
import useCartStore from "@/utils/state";

import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DetailBook = () => {
  const { cart, addBook } = useCartStore();
  const { toast } = useToast();
  const params = useParams();

  const [book, setBook] = useState<Book>();

  const isInCart = useMemo(() => {
    const checkCart = cart.find((item) => item.id === +params.id_book!);

    if (checkCart) return true;

    return false;
  }, [cart]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log("test", params);
    try {
      const result = await getDetailBooks(params.id_book!);
      setBook(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  function onClickBorrow() {
    toast({
      description: "Book has been added to cart.",
    });
    addBook(book!);
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full h-full py-6 px-3 items-center gap-5">
        <img
          className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96"
          src={book?.cover_image}
          alt={book?.title}
        />
        <div className="flex flex-col w-full gap-2">
          <p className="font-bold text-2xl tracking-wide">{book?.title}</p>
          <p> {book?.author}</p>
          <Badge className="w-[70px] justify-center">{book?.category}</Badge>
          <Separator />
          <p></p>
          <p>{book?.description}</p>
          <Button
            className="mt-3"
            onClick={() => onClickBorrow()}
            disabled={isInCart}
            aria-disabled={isInCart}>
            {isInCart ? "In Cart" : "Borrow"}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailBook;
