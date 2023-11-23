import { getBooks, getDetailBooks, deleteBooks, updateBooks } from "./api";
import { booksSampleData } from "./sample-data";
import { Book, BookPayload } from "./types";

export { getBooks, getDetailBooks, booksSampleData, deleteBooks, updateBooks };
export type { Book, BookPayload };
