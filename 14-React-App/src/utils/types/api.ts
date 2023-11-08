// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Response<T = any> = {
  message: string;
  payload: T;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PayloadPagination<T = any> = {
  totalItems: number;
  datas: T;
  totalPages: number;
  currentPage: number;
};
