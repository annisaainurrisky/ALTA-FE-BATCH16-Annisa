/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CustomFormField,
  CustomFormSelect,
} from "@/components/custom-formfield";
import { BookSchema, bookSchema } from "@/utils/apis/books/types";
import { Textarea } from "./ui/textarea";
import { LucideEdit } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type editBookProps = {
  title: string;
  author: string;
  isbn: string;
  category: string;
  description: string;
  handleEditBook: (body: BookSchema) => void;
};

const EditBook = (props: editBookProps) => {
  const { title, author, isbn, category, description, handleEditBook } = props;
  const categories = [
    "Fiction",
    "Fantasy",
    "Mystery",
    "Romance",
    "Science",
    "History",
    "Business",
    "Children",
    "Thriller",
    "Biography",
    "Religion",
    "Cookbooks",
    "Horror",
    "Psychology",
  ];

  const form = useForm<BookSchema>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: title,
      cover_image: "",
      author: author,
      isbn: isbn,
      category: category,
      description: description,
    },
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <LucideEdit />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit a Book</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  className="flex flex-col gap-5"
                  onSubmit={form.handleSubmit(handleEditBook)}>
                  <CustomFormField
                    control={form.control}
                    name="title"
                    label="Title">
                    {(field) => (
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormField>
                  <CustomFormField
                    control={form.control}
                    name="cover_image"
                    label="Cover Image">
                    {(field) => (
                      <Input
                        {...field}
                        type="file"
                        name="image"
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormField>
                  <CustomFormField
                    control={form.control}
                    name="author"
                    label="Author">
                    {(field) => (
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormField>
                  <CustomFormField
                    control={form.control}
                    name="isbn"
                    label="ISBN">
                    {(field) => (
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormField>
                  <CustomFormSelect
                    control={form.control}
                    name="category"
                    label="Category"
                    placeholder="Select a Category"
                    options={categories}>
                    {(field) => (
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormSelect>
                  <CustomFormField
                    control={form.control}
                    name="description"
                    label="Description">
                    {(field) => (
                      <Textarea
                        {...field}
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormField>
                  <Button type="submit" className="w-[130px] ms-[330px]">
                    Save changes
                  </Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditBook;
