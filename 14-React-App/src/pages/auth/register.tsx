/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/custom-formfield";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

import {
  registerAccount,
  RegisterSchema,
  registerSchema,
} from "@/utils/apis/auth";

const register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      phone_number: "",
    },
  });

  async function onSubmitRegister(data: RegisterSchema) {
    try {
      const result = await registerAccount(data);
      toast({
        description: result.message,
      });
      navigate("/login");
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitRegister)}>
              <CustomFormField
                control={form.control}
                name="full_name"
                label="Full Name">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="John Doe"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="email"
                label="Email">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="name@mail.com"
                    type="email"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="password"
                label="Password">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Password"
                    type="password"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="repassword"
                label="Retype Password">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Retype Password"
                    type="password"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="address"
                label="Address">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Address"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="phone_number"
                label="Phone Number">
                {(field) => (
                  <Input
                    {...field}
                    placeholder="Phone Number"
                    type="tel"
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <Button
                className="w-[300px] my-3"
                type="submit"
                disabled={form.formState.isSubmitted}
                aria-disabled={form.formState.isSubmitted}>
                {form.formState.isSubmitted ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </form>
          </Form>
          <div className="text-center text-gray-400">
            <p>
              Already have an account?{" "}
              <span className="font-bold text-black">
                <Link to={"/login"}>Login here</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default register;
