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
import { Borrow, deleteBorrow, editBorrowService } from "@/utils/apis/borrows";
import { Trash2Icon } from "lucide-react";

type tableBorrowProps = {
  borrow: Borrow[];
};

const TableBorrow = (props: tableBorrowProps) => {
  const { borrow } = props;
  const { toast } = useToast();

  async function handleUpdateBorrow(d: any, id_borrow: number) {
    const body = {
      borrow_date: d?.borrow_date,
      due_date: d?.due_date,
      return_date: d?.return_date,
    };

    try {
      const result = await editBorrowService(body, id_borrow);
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

  async function handleDeleteBorrow(id_borrow: string) {
    try {
      const result = await deleteBorrow(id_borrow);
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
        {borrow.map((borrow) => (
          <TableRow key={borrow.id}>
            <TableCell>{borrow.id}</TableCell>
            <TableCell>{borrow.user.full_name}</TableCell>
            <TableCell>{borrow.book.title}</TableCell>
            <TableCell>{formatDate(borrow.borrow_date)}</TableCell>
            <TableCell>{formatDate(borrow.due_date)}</TableCell>
            <TableCell>{formatDate(borrow.return_date)}</TableCell>
            <TableCell>
              <EditBorrow
                due_date={borrow.due_date}
                borrow_date={borrow.borrow_date}
                return_date={borrow.return_date}
                id_borrow={borrow.id}
                handleEditBorrow={(body) => handleUpdateBorrow(body, borrow.id)}
              />
            </TableCell>
            <TableCell>
              <Alert
                title="Are you absolutely sure?"
                description=" This action cannot be undone. This will permanently delete the borrow data
and remove your data from our servers."
                onAction={() => handleDeleteBorrow(borrow.id.toString())}>
                <Trash2Icon />
              </Alert>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableBorrow;
