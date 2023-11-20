/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { getHistory } from "@/utils/apis/history/api";
import { History } from "@/utils/apis/history";

import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import TableBorrow from "@/components/table-borrow";

const Dashboard = () => {
  const { toast } = useToast();

  const [history, setHistory] = useState<History[]>([]);

  useEffect(() => {
    historyBorrow();
  }, []);

  async function historyBorrow() {
    try {
      const result = await getHistory();
      setHistory(result.payload.datas);
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
      <Tabs defaultValue="account">
        <TabsList className="flex items-center px-10">
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="borrows">Borrows</TabsTrigger>
        </TabsList>
        <TabsContent value="books">tesssss</TabsContent>
        <TabsContent value="borrows">
          <TableBorrow history={history} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Dashboard;
