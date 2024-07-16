import { FormControl, FormMessage, FormItem, FormLabel, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface InputFormItemProps {
  form: any,
  name: string,
  label: string,
  placeholder?: string,
  type?: string,
  span?: number,
}

export const InputFormItem: React.FC<InputFormItemProps> = ({
  form,
  label,
  name,
  placeholder,
  type = "text",
  span = 4,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(`col-span-${span} w-full mb-4`)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder ?? label}
              type={type}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
