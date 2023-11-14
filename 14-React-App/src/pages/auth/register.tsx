/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { registerAccount } from "@/utils/apis/auth";

const register = () => {
  const { toast } = useToast();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  async function onSubmitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const body = {
        full_name: fullName,
        email,
        password,
        role: "user",
        address,
        phone_number: phoneNumber,
      };

      const result = await registerAccount(body);
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-8 md:p-16">
          <h1 className="font-bold text-2xl text-center mb-5">Register</h1>
          <form onSubmit={(e) => onSubmitRegister(e)}>
            <div className="py-2">
              <h3 className="mb-2">Full Name</h3>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500"
                name="fullname"
                id="fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
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
            <div className="py-2">
              <h3 className="mb-2">Address</h3>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="py-2">
              <h3 className="mb-2">Phone Number</h3>
              <input
                className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500"
                name="number"
                id="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="py-3">
              <button
                className="w-full font-semibold bg-black text-white p-2 rounded-xl mb-6 hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300"
                type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="text-center text-gray-400">
            <p>
              Already have an account?{" "}
              <span className="font-bold text-black">Login here</span>
            </p>
          </div>
        </div>
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default register;
