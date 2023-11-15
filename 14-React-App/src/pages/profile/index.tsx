/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import { Profile, getProfile } from "@/utils/apis/users";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const { toast } = useToast();

  const [profile, setProfile] = useState<Profile>();

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
      console.log("error");
    }
  }
  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 mb-10 ">
        <img
          className="rounded-full aspect-square w-32 md:w-52"
          src={profile?.profile_picture}
          alt={profile?.full_name}
        />
        <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-5">
          Hi, {profile?.full_name}
        </p>
        <Separator />
        <div className="flex flex-row gap-20">
          <div className="flex flex-col gap-5">
            <p>Name</p>
            <p>Email</p>
            <p>Address</p>
            <p>Phone Number</p>
          </div>
          <div className="flex flex-col gap-5">
            <p>{profile?.full_name}</p>
            <p>{profile?.email}</p>
            <p>{profile?.address}</p>
            <p>{profile?.phone_number}</p>
          </div>
        </div>
        <button className="bg-black text-white rounded-xl py-2 px-[138px] hover:bg-slate-300 hover:text-black hover:border hover:border-gray-300 ">
          <Link to="/edit-profile">Edit Profile</Link>
        </button>
      </div>
    </Layout>
  );
};

export default Index;
