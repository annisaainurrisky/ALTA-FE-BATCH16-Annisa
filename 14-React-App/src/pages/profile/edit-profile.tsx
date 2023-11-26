/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CustomFormField } from "@/components/custom-formfield";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import {
  ProfileUpdateType,
  getProfile,
  profileUpdateSchema,
} from "@/utils/apis/users";
import { deleteProfile, updateProfile } from "@/utils/apis/users/api";
import Alert from "@/components/alert";

const EditProfile = () => {
  const { toast } = useToast();

  const form = useForm<ProfileUpdateType>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      address: "",
      phone_number: "",
      profile_picture: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();
      form.setValue("full_name", result.payload.full_name);
      form.setValue("email", result.payload.email);
      form.setValue("address", result.payload.address);
      form.setValue("phone_number", result.payload.phone_number);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleUpdateProfile(body: ProfileUpdateType) {
    try {
      const result = await updateProfile(body);
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

  async function handleDeleteProfile() {
    try {
      const result = await deleteProfile();
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
    <Layout>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdateProfile)}
            className="flex flex-col gap-5 w-[300px] md:w-[600px] justify-center mx-auto">
            <div className="">
              <CustomFormField
                control={form.control}
                name="full_name"
                label="Full Name">
                {(field) => (
                  <Input
                    {...field}
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
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="profile_picture"
                label="Cover Image">
                {(field) => (
                  <Input
                    {...field}
                    disabled={form.formState.isSubmitted}
                    aria-disabled={form.formState.isSubmitted}
                    type="file"
                    name="image"
                  />
                )}
              </CustomFormField>
              <div className="mt-3 flex flex-row justify-end gap-1">
                <Button type="submit">Submit</Button>
                <Alert
                  title="Are you absolutely sure?"
                  description=" This action cannot be undone. This will permanently delete your account
        and remove your data from our servers."
                  onAction={() => handleDeleteProfile()}>
                  <Button variant="destructive">Delete Account</Button>
                </Alert>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default EditProfile;
