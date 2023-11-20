/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { formatDate } from "@/utils/utils";
import EditBorrow from "@/components/edit-borrow";
import Alert from "@/components/alert";
import deleteIcon from "../assets/delete.svg";
import { FormEvent, useState } from "react";
import { BorrowPayload, editBorrow, deleteBorrow } from "@/utils/apis/borrows";
import { Borrow } from "@/utils/apis/borrows";

type tableBorrowProps = {
  history: any;
};

const TableBorrow = (props: tableBorrowProps) => {
  const { history } = props;
  const { toast } = useToast();

  const [borrow, setBorrow] = useState<Partial<Borrow>>({
    due_date: new Date(),
    borrow_date: new Date(),
    return_date: new Date(),
  });

  async function handleUpdateBorrow(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      borrow_date: borrow?.borrow_date,
      due_date: borrow?.due_date,
      return_date: borrow?.return_date,
    };

    try {
      const result = await editBorrow(body);
      toast({
        description: result,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleDeleteBorrow() {
    try {
      const result = await deleteBorrow();
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
        {history.map((history: any) => (
          <TableRow>
            <TableCell>{history?.id}</TableCell>
            <TableCell>{history?.user.full_name}</TableCell>
            <TableCell>{history?.book.title}</TableCell>
            <TableCell>{formatDate(history?.borrow_date)}</TableCell>
            <TableCell>{formatDate(history?.due_date)}</TableCell>
            <TableCell>{history?.return_date}</TableCell>
            <TableCell>
              <EditBorrow
                due_date={history.due_date}
                borrow_date={history.borrow_date}
                handleEditBorrow={handleUpdateBorrow()}
              />
            </TableCell>
            <TableCell>
              <Alert
                title="Are you absolutely sure?"
                description=" This action cannot be undone. This will permanently delete the borrow data
and remove your data from our servers."
                onAction={() => handleDeleteBorrow()}>
                <img src={deleteIcon} alt="delete icon" />
              </Alert>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableBorrow;
//
