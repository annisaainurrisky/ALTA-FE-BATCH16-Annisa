import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import { Book, getDetailBooks } from "@/utils/apis/books";
import { Separator } from "@radix-ui/react-dropdown-menu";

const DetailBook = () => {
  const { toast } = useToast();
  const params = useParams();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log("test", params);
    try {
      const result = await getDetailBooks(params.id_book!);
      setBook(result.payload);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      <div className="flex flex-col md:flex-row w-full h-full py-6 px-3 items-center gap-5">
        <img
          className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96"
          src={book?.cover_image}
          alt={book?.title}
        />
        <div className="flex flex-col w-full">
          <p className="font-bold text-2xl tracking-wide">
            Title: {book?.title}
          </p>
          <p>Author: {book?.author}</p>
          <p>Category: {book?.category}</p>
          <Separator />
          <p>Description:</p>
          <p>{book?.description}</p>
          <button className="bg-black text-white py-3 rounded-xl mt-5">
            Borrow
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailBook;
