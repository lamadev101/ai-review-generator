
import { Form } from "@/components/ui/form";

interface FormWrapperProps {
  children: React.ReactNode,
  form: any;
  onSubmit: any;
}

export default function FormWrapper({
  children,
  form,
  onSubmit,
}: FormWrapperProps) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-10"
      >
        {children}
      </form>
    </Form>
  )
}
