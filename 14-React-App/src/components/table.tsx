import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  id: number;
  borrow_date: string;
  due_date: string;
  return_date: null;
  title: string;
  full_name: string;
}

const TableData = (props: Props) => {
  const { id, borrow_date, due_date, return_date, title, full_name } = props;
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
        <TableRow>
          <TableCell>{id}</TableCell>
          <TableCell>{full_name}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>{borrow_date}</TableCell>
          <TableCell>{due_date}</TableCell>
          <TableCell>{return_date}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableData;
