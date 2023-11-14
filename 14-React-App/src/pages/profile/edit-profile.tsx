/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useEffect, useState } from "react";

import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import { Profile, getProfile } from "@/utils/apis/users";
import { deleteProfile, updateProfile } from "@/utils/apis/users/api";
import Alert from "@/components/alert";

const EditProfile = () => {
  const { toast } = useToast();

  const [profile, setProfile] = useState<Partial<Profile>>({
    full_name: "",
    email: "",
    address: "",
    phone_number: "",
    password: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();
      setProfile(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleUpdateProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      full_name: profile?.full_name ?? "",
      email: profile?.email ?? "",
      password: profile?.password ?? "",
      address: profile?.address ?? "",
      phone_number: profile?.phone_number ?? "",
    };

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
      <div className="flex flex-col items-center gap-4">
        <form onSubmit={(e) => handleUpdateProfile(e)}>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-3">
              <p className="pt-2 font-semibold text-md">Full Name</p>
              <p className="pt-5 font-semibold text-md">Email</p>
              <p className="pt-5 font-semibold text-md">Password</p>
              <p className="pt-4 font-semibold text-md">Address</p>
              <p className="pt-4 font-semibold text-md">Phone Number</p>
            </div>
            <div className="flex flex-col gap-3">
              <input
                className="pl-2 md:pr-[400px] md:pl-3 py-2 border border-gray-300 rounded-xl placeholder:font-light placeholder:text-gray-500"
                name="fullname"
                id="fullname"
                value={profile?.full_name}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, full_name: e.target.value };
                  })
                }
              />
              <input
                className="pl-2 md:pr-[400px] md:pl-3 py-2 border border-gray-300 rounded-xl placeholder:font-light placeholder:text-gray-500"
                type="email"
                name="email"
                id="email"
                value={profile?.email}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, email: e.target.value };
                  })
                }
              />
              <input
                className="pl-2 md:pr-[400px] md:pl-3 py-2 border border-gray-300 rounded-xl placeholder:font-light placeholder:text-gray-500"
                type="password"
                name="password"
                id="password"
                value={profile?.password}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, password: e.target.value };
                  })
                }
              />
              <input
                className="pl-2 md:pr-[400px] md:pl-3 py-2 border border-gray-300 rounded-xl placeholder:font-light placeholder:text-gray-500"
                name="address"
                id="address"
                value={profile?.address}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, address: e.target.value };
                  })
                }
              />
              <input
                className="pl-2 md:pr-[400px] md:pl-3 py-2 border border-gray-300 rounded-xl placeholder:font-light placeholder:text-gray-500"
                name="number"
                id="number"
                value={profile?.phone_number}
                onChange={(e) =>
                  setProfile((prevState) => {
                    return { ...prevState, phone_number: e.target.value };
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <button
              className="bg-black text-white py-2 px-3 rounded-xl mb-6 hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300 mt-5"
              type="submit">
              Submit
            </button>
            <Alert
              title="Are you absolutely sure?"
              description=" This action cannot be undone. This will permanently delete your account
        and remove your data from our servers."
              onAction={() => handleDeleteProfile()}>
              <button
                className="bg-red-600 text-white py-2 px-3 rounded-xl mb-6 hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300 mt-5"
                type="button">
                Delete Account
              </button>
            </Alert>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditProfile;
