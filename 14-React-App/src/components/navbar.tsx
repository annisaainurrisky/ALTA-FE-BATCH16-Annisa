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
import useTheme from "@/utils/hooks/useTheme";
import { useToken } from "@/utils/contexts/token";
import { useToast } from "./ui/use-toast";

const Navbar = () => {
  const { token, user, changeToken } = useToken();
  const [toggleTheme] = useTheme();
  const { toast } = useToast();

  function handleLogout() {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <header className="w-full sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <nav className="mx-auto flex container items-center justify-between p-6">
        <p className="font-bold text-3xl">
          <Link to="/">LibraryApp</Link>{" "}
        </p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.profile_picture} alt={user.full_name} />
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 bg-white" align="end">
            {token && (
              <>
                <DropdownMenuLabel>Hi! {user.full_name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/profile">Profile</Link>{" "}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/dashboard">Dashboard</Link>{" "}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/history-borrow">History Borrow</Link>{" "}
                </DropdownMenuItem>
              </>
            )}

            <DropdownMenuItem onClick={() => toggleTheme()}>
              Change Theme
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {token ? (
              <DropdownMenuItem onClick={() => handleLogout()}>
                Logout
              </DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuItem>
                  <Link to="/login">Login</Link>{" "}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/register">Register</Link>{" "}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Navbar;
