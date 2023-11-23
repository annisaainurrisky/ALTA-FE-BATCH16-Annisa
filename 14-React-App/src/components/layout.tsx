import { Toaster } from "@/components/ui/toaster";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "./theme-provider";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="w-full h-screen bg-white dark:bg-black font-roboto flex flex-col overflow-auto">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <div className="container grow mx-auto py-4 px-8 flex flex-col">
          {children}
        </div>
        <Toaster />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
