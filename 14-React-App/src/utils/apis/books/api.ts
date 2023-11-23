/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, PayloadPagination } from "@/utils/types/api";
import { Book } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { BookSchema } from "./types";

export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books"
    );

    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getBooksBorrow = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/books?limit=5"
    );

    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};



export const getDetailBooks = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.get(
      `https://hells-kitchen.onrender.com/api/v1/books/${id_book}`
    );

    return response.data as Response<Book>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateBooks = async (body: BookSchema, id_book: string) => {
  try {
    const response = await axiosWithConfig.put(
      `https://hells-kitchen.onrender.com/api/v1/books/${id_book}`,
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addBooks = async (body: BookSchema) => {
  try {
    const response = await axiosWithConfig.post(
      'https://hells-kitchen.onrender.com/api/v1/books',
      body
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteBooks = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.delete(
      `https://hells-kitchen.onrender.com/api/v1/books/${id_book}`
    );

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};