import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-white/90 z-50">
      <nav className="mx-auto flex container items-center justify-between p-6">
        <p className="font-bold text-3xl">
          <Link to="/">LibraryApp</Link>{" "}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 bg-white" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/profile">Profile</Link>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/history-borrow">History Borrow</Link>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/login">Login</Link>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/register">Register</Link>{" "}
            </DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Navbar;
