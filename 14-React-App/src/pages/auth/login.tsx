/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { loginAccount } from "@/utils/apis/auth/api";
import { loginSchema, LoginSchema } from "@/utils/apis/auth";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/custom-formfield";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToken } from "@/utils/contexts/token";

const login = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmitLogin(data: LoginSchema) {
    try {
      const result = await loginAccount(data);
      changeToken(result.payload.token);
      toast({
        description: result.message,
      });
      navigate("/");
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
        <div className="flex flex-col justify-center p-8 md:p-14">
          <h1 className="font-bold text-2xl text-center mb-5">Welcome Back!</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitLogin)}>
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
                  "Login"
                )}
              </Button>
            </form>
          </Form>
          <div className="text-center text-gray-400">
            <p>
              Dont' have an account?{" "}
              <span className="font-bold text-black">
                <Link to={"/register"}>Register for free</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
// 