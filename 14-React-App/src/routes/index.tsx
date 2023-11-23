import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

import ProtectedRoutes from "./protected-routes";
import Home from "@/pages";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import DetailBookPage from "@/pages/books/detail";
import ProfilePage from "@/pages/profile";
import EditProfilePage from "@/pages/profile/edit-profile";
import BorrowHistoryPage from "@/pages/profile/history-borrow";
import Dashboard from "@/pages/admin";
import Cart from "@/pages/books/cart";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/books/:id_book",
          element: <DetailBookPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/edit-profile",
          element: <EditProfilePage />,
        },
        {
          path: "/history-borrow",
          element: <BorrowHistoryPage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: (
            <div className="min-h-screen w-full flex flex-col justify-center items-center gap-5">
              <p className="text-9xl font-bold tracking-wide">Oops!</p>
              <p className="text-xl font-bold">404-PAGE NOT FOUND</p>
              <div className="flex flex-col items-center">
                <p>The page you are looking for might have been removed</p>
                <p>had it's name changed or is temporary unavailable.</p>
              </div>
              <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300">
                <Link to="/">GO TO HOMEPAGE</Link>
              </button>
            </div>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
