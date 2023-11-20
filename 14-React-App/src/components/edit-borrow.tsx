/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";


import { BorrowPayload, borrowPayload } from "@/utils/apis/borrows/types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CustomFormDatePicker } from "./custom-formdatepicker";
import edit from "../assets/edit.svg";

type EditBorrowProps = {
  borrow_date?: any;
  due_date?: any;
  return_date?: any;
  handleEditBorrow?: any;
};

const EditBorrow = (props: BorrowPayload) => {
  const { borrow_date, due_date, return_date } = props;

  const form = useForm<BorrowPayload>({
    resolver: zodResolver(borrowPayload),
    defaultValues: {
      borrow_date: new Date(),
      due_date: new Date(),
      return_date: new Date(),
    },
  });

 

  useEffect(() => {
    form.setValue("borrow_date", new Date(borrow_date));
    form.setValue("due_date", new Date(due_date));
  }, []);

  return (
    <div className="bg-white">
      <Dialog>
        <DialogTrigger>
          <img src={edit} alt="edit icon" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">Edit Borrow</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form className="flex flex-col gap-5">
                  <CustomFormDatePicker
                    control={form.control}
                    name="borrow_date"
                    label="Borrow Date">
                    {(field) => (
                      <Input
                        {...field}
                        value={borrow_date.toString()}
                        placeholder={borrow_date.toString()}
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormDatePicker>
                  <CustomFormDatePicker
                    control={form.control}
                    name="due_date"
                    label="Due Date">
                    {(field) => (
                      <Input
                        {...field}
                        value={due_date.toString()}
                        placeholder={due_date.toString()}
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormDatePicker>
                  <CustomFormDatePicker
                    control={form.control}
                    name="return_date"
                    label="Return Date">
                    {(field) => (
                      <Input
                        {...field}
                        value={return_date?.toString()}
                        placeholder="Return Date"
                        disabled={form.formState.isSubmitted}
                        aria-disabled={form.formState.isSubmitted}
                      />
                    )}
                  </CustomFormDatePicker>
                  <Button
                    className="w-[130px] ms-[330px]"
                    onClick={() => handleEditBorrow()}>
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

export default EditBorrow;
