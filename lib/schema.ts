import * as z from "zod"

export const CustomerDetailsSchema = z.object({
  id: z.string().optional(),
  customerName: z.string({ message: "Customer Name is required!" }),
  phone: z.string().optional(),
  email: z.string().email({message:"Please enter valid email!"}),
  address: z.string().optional(),

  businessType: z.string().optional(),
  businessName: z.string({ message: "Business Name is required!" }),
  websiteUrl: z.string().optional(),
  googleReviewUrl: z.string({ message: "Google Review Url is required!" }),
})