"use client"

import { z } from "zod"
import { api } from "@/lib/baseUrl"
import { zodResolver } from "@hookform/resolvers/zod"

import { ClearBtn, SaveBtn } from "@/components/btns"
import { InputFormItem } from "@/components/form-items"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FormWrapper } from "@/components/wrapper"
import { useForm } from "react-hook-form"
import BreadCrumbNav from "../_components/BreadCrumbNav"
import { CustomerDetailsSchema } from "@/lib/schema"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

const ClientDetailsPage = ({ searchParams }: any) => {
  const { toast } = useToast()

  const clientId = searchParams?.client_id;

  const form = useForm<z.infer<typeof CustomerDetailsSchema>>({
    resolver: zodResolver(CustomerDetailsSchema),
    defaultValues: {
      customerName: "",
      email: "",
      phone: "",
      address: "",
      businessType: "",
      businessName: "",
      websiteUrl: "",
      googleReviewUrl: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof CustomerDetailsSchema>) => {
    try {
      const res = await api.post('/customer', values)
      if (res.status === 201)
        toast({ title: "success", description: "Created Successfully!" })
    } catch (error) {
      toast({ title: "error", description: "Something went wrong!" })
    }
  }

  useEffect(() => {
    if (clientId) {
      const fetchCustomer = async () => {
        try {
          const { data } = await api.get(`/customer/${clientId}`)
          if (data) {
            Object.keys(data).forEach(key => {
              form.setValue(key as keyof typeof data, data[key as keyof typeof data]);
            });
          }
        } catch (error) {
          toast({ title: "error", description: "Something went wrong!" })
        }
      }
      fetchCustomer()
    }
  }, [clientId])

  return (
    < >
      <BreadCrumbNav currentPage="Customer Details" />
      <FormWrapper form={form} onSubmit={onSubmit}>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <InputFormItem form={form} label="Customer Name" name="customerName" />
                <InputFormItem form={form} label="Phone" name="phone" />
              </div>
              <div className="flex gap-2">
                <InputFormItem form={form} label="Email" name="email" />
                <InputFormItem form={form} label="Address" name="address" />
              </div>
            </CardContent>
          </Card>

          <Card className="my-2">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex col-span-12 gap-2">
                <InputFormItem form={form} label="Business Type" name="businessType" span={6} />
                <InputFormItem form={form} label="Business Name" name="businessName" span={6} />
              </div>
              <InputFormItem form={form} label="Website Url" name="websiteUrl" />
              <InputFormItem form={form} label="Google Review Url" name="googleReviewUrl" />
            </CardContent>
          </Card>

          <SaveBtn label="Sumbit" />
          <ClearBtn onClick={() => form.reset} />
        </div>
      </FormWrapper>
    </>
  )
}

export default ClientDetailsPage