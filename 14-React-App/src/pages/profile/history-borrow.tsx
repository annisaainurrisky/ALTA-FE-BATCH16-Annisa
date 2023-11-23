/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Bookcard from "@/components/book-card";
import { Book } from "@/utils/apis/books";
import { useToast } from "@/components/ui/use-toast";
import { getBooksBorrow } from "@/utils/apis/books/api";

const BorrowHistory = () => {
  const { toast } = useToast();

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooksBorrow();
      setBooks(result.payload.datas);
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
      <div>
        <p className="font-bold text-xl mb-2">Your History</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {books.map((book) => (
          <Bookcard key={book.id} data={book} />
        ))}
      </div>
    </Layout>
  );
};

export default BorrowHistory;
