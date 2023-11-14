/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useToast } from "@/components/ui/use-toast";
import { loginAccount } from "@/utils/apis/auth/api";
import { FormEvent, useState } from "react";

const login = () => {
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const body = {
        email,
        password,
      };

      const result = await loginAccount(body);
      localStorage.setItem("token", result.payload.token)
      toast({
        description: result.message,
      });
      console.log('success')
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
      console.log('error')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <h1 className="font-bold text-2xl text-center mb-5">Welcome Back!</h1>
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="py-2">
              <h3 className="mb-2">Email</h3>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-2">
              <h3 className="mb-2">Password</h3>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="py-3">
              <button
                className="w-full font-semibold bg-black text-white p-2 rounded-xl mb-6 hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300"
                type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="text-center text-gray-400">
            <p>
              Dont' have an account? {' '}
              <span className="font-bold text-black">Register for free</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
