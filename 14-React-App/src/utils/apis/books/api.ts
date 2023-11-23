/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, PayloadPagination } from "@/utils/types/api";
import { Book } from ".";
import axiosWithConfig from "../axiosWithConfig";
import { BookSchema } from "./types";

export const getBooks = async () => {
  try {
    const response = await axiosWithConfig.get("/books");

    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getBooksBorrow = async () => {
  try {
    const response = await axiosWithConfig.get("/books?limit=5");

    return response.data as Response<PayloadPagination<Book[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailBooks = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.get(`/books/${id_book}`);

    return response.data as Response<Book>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateBooks = async (body: BookSchema, id_book: string) => {
  try {
    const response = await axiosWithConfig.put(`/books/${id_book}`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const addBooks = async (body: BookSchema) => {
  try {
    const response = await axiosWithConfig.post("/books", body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteBooks = async (id_book: string) => {
  try {
    const response = await axiosWithConfig.delete(`/books/${id_book}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
