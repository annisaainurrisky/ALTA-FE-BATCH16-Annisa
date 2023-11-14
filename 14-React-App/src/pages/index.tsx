import { useState, useEffect } from "react";
import Layout from "@/components/layout";
import Bookcard from "@/components/book-card";
import { getBooks, Book } from "@/utils/apis/books";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <section>
        <div className="min-h-[40vh] text-center flex flex-col gap-8">
          <div>
            <p className="text-4xl lg:text-5xl font-bold mt-10">
              Welcome to LibraryApp
            </p>
            <p className="mt-1 text-slate-500">
              Explore and read ten thousand of books only with this app
            </p>
          </div>
          <div>
            <form action="">
              <input
                type="text"
                name="search"
                placeholder="Search Book..."
                autoComplete="off"
                aria-label="Search Book"
                className="pr-10 md:pr-40 pl-3 py-3 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-200 focus:ring-2"
              />
            </form>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p className="font-bold text-xl mb-2">List of Books</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {books.map((book) => (
            <Bookcard key={book.id} data={book} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
