/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { BorrowSchema, BorrowPayload } from ".";

export const editBorrow = async (body: BorrowPayload) => {
  try {
    const response = await axiosWithConfig.post(
      "https://hells-kitchen.onrender.com/api/v1/borrows/:id_borrow",
      body
    );

    return response.data as Response<{ token: string }>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteBorrow = async () => {
  try {
    const response = await axiosWithConfig.delete(
      "https://hells-kitchen.onrender.com/api/v1/borrows/:id_borrow"
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
