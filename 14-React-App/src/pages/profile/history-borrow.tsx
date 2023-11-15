/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";

import { getHistory } from "@/utils/apis/history/api";
import { History } from "@/utils/apis/history";
import { formatDate } from "@/utils/utils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BorrowHistory = () => {
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
      <Table>
        <TableCaption>A list of your borrowed books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Book</TableHead>
            <TableHead>Borrow Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Return date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((history) => (
            <TableRow>
              <TableCell>{history?.id}</TableCell>
              <TableCell>{history?.user.full_name}</TableCell>
              <TableCell>{history?.book.title}</TableCell>
              <TableCell>{formatDate(history?.borrow_date)}</TableCell>
              <TableCell>{formatDate(history?.due_date)}</TableCell>
              <TableCell>{history?.return_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default BorrowHistory;
