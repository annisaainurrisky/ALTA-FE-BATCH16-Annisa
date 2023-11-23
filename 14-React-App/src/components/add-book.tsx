/* eslint-disable @typescript-eslint/no-explicit-any */
import { BookSchema, bookSchema } from "@/utils/apis/books/types";
import { addBooks } from "@/utils/apis/books/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  CustomFormField,
  CustomFormSelect,
} from "@/components/custom-formfield";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AddBook = () => {
  const { toast } = useToast();
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
      title: "",
      cover_image: "",
      author: "",
      isbn: "",
      category: "",
      description: "",
    },
  });

  async function handleAddBooks(body: BookSchema) {
    try {
      const result = await addBooks(body);
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
    <div>
      <Dialog>
        <DialogTrigger>
          <Button> Add a Book</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a Book</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  className="flex flex-col gap-5"
                  onSubmit={form.handleSubmit(handleAddBooks)}>
                  <CustomFormField
                    control={form.control}
                    name="title"
                    label="Title">
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="Title Book"
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
                        placeholder="Choose File"
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
                        placeholder="Author"
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
                        placeholder="ISBN"
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
                        placeholder="Description"
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

export default AddBook;
