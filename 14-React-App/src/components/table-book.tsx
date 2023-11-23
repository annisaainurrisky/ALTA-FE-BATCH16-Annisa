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
import Alert from "@/components/alert";
import EditBook from "./edit-book";
import { Trash2Icon } from "lucide-react";
import { Book, deleteBooks, updateBooks } from "@/utils/apis/books";
import { BookSchema } from "@/utils/apis/books/types";

type tableBookProps = {
  bookList: Book[];
};

const TableBook = (props: tableBookProps) => {
  const { bookList } = props;
  const { toast } = useToast();

  async function handleUpdateBook(body: BookSchema, id_book: string) {
    try {
      const result = await updateBooks(body, id_book);
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

  async function handleDeleteBooks(id_book: string) {
    try {
      const result = await deleteBooks(id_book);
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
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Featured</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookList.map((bookList: any) => (
          <TableRow key={bookList.id}>
            <TableCell>{bookList?.id}</TableCell>
            <TableCell>{bookList?.title}</TableCell>
            <TableCell>{bookList?.author}</TableCell>
            <TableCell>{bookList?.category}</TableCell>
            <TableCell>{bookList?.isbn}</TableCell>
            <TableCell>{bookList?.featured.toString()}</TableCell>
            <TableCell>
              <EditBook
                title={bookList.title}
                author={bookList.author}
                isbn={bookList.isbn}
                category={bookList.category}
                description={bookList.description}
                handleEditBook={(body) => handleUpdateBook(body, bookList.id)}
              />
            </TableCell>
            <TableCell>
              <Alert
                title="Are you absolutely sure?"
                description=" This action cannot be undone. This will permanently delete the books data
and remove your data from our servers."
                onAction={() => handleDeleteBooks(bookList.id.toString())}>
                <Trash2Icon />
              </Alert>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableBook;
