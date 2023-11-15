/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, PayloadPagination } from "@/utils/types/api";
import axiosWithConfig from "../axiosWithConfig";
import { History } from ".";

//

export const getHistory = async () => {
  try {
    const response = await axiosWithConfig.get(
      "https://hells-kitchen.onrender.com/api/v1/borrows"
    );
    console.log("data", response.data);
    return response.data as Response<PayloadPagination<History[]>>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
