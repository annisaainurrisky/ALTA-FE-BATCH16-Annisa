/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, PayloadPagination } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { BorrowPayload, Borrow, BorrowSchema } from ".";

export const getBorrow = async () => {
  try {
    const response = await axiosWithConfig.get("/borrows");
    console.log("data", response.data);
    return response.data as Response<PayloadPagination<Borrow[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const editBorrowService = async (
  body: BorrowPayload,
  id_borrow: number
) => {
  try {
    const response = await axiosWithConfig.put(
      "/borrows/" + id_borrow.toString(),
      body
    );

    return response.data as Response<{ token: string }>;
  } catch (error: any) {
    console.log("error:", error.response.data.message);
    throw Error(error.response.data.message);
  }
};

export const deleteBorrow = async (id_borrow: string) => {
  try {
    const response = await axiosWithConfig.delete(`/borrows/${id_borrow}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const createBorrow = async (body: BorrowSchema) => {
  try {
    const response = await axiosWithConfig.post("/borrows", body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
