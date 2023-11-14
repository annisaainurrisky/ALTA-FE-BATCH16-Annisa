/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";
// import TableData from "@/components/table";
import { getHistory } from "@/utils/apis/history/api";
import { History } from "@/utils/apis/history";

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
      {/* {history.map((history) => (
        <TableData
          key={history?.id}
          id={history?.id}
          borrow_date={history?.borrow_date}
          due_date={history?.due_date}
          return_date={null}
          title={history?.title}
          full_name={history?.full_name}
        />
      ))} */}

      <Table>
        <TableCaption></TableCaption>
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
              <TableCell>{history?.full_name}</TableCell>
              <TableCell>{history?.title}</TableCell>
              <TableCell>{history?.borrow_date}</TableCell>
              <TableCell>{history?.due_date}</TableCell>
              <TableCell>{history?.return_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Layout>
  );
};

export default BorrowHistory;
