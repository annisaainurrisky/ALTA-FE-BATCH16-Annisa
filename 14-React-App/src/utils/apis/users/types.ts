import * as z from "zod";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const profileUpdateSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Not a valid email"),
  full_name: z.string().min(1, { message: "Full name is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character" }),
  address: z.string().min(1, { message: "Address is required" }),
  phone_number: z
    .string()
    .min(7, { message: "Phone number minimum length is 7" }),
  profile_picture: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max image size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpeg, .jpg, and .png formats are supported"
    ),
});

export type ProfileUpdateType = z.infer<typeof profileUpdateSchema>;

export interface Profile {
  id: number;
  full_name: string;
  email: string;
  role: string;
  profile_picture: string;
  address: string;
  phone_number: string;
  password: string;
}

export interface ProfilePayload {
  full_name: string;
  email: string;
  address: string;
  phone_number: string;
  password: string;
}
