/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getBorrow, Borrow } from "@/utils/apis/borrows";

import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableBorrow from "@/components/table-borrow";
import { Book, getBooks } from "@/utils/apis/books";
import TableBook from "@/components/table-book";
import AddBook from "@/components/add-book";

const Dashboard = () => {
  const { toast } = useToast();

  const [books, setBooks] = useState<Book[]>([]);
  const [borrow, setBorrow] = useState<Borrow[]>([]);

  useEffect(() => {
    fetchData(), historyBorrow();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function historyBorrow() {
    try {
      const result = await getBorrow();
      setBorrow(result.payload.datas);
      console.log(result);
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
      <Tabs defaultValue="books">
        <TabsList className="flex items-center px-10">
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="borrows">Borrows</TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          <TableBook bookList={books} />
          <div className="flex justify-center">
            <AddBook />
          </div>
        </TabsContent>
        <TabsContent value="borrows">
          <TableBorrow borrow={borrow} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
