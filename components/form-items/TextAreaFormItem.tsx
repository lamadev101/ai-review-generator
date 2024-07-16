import { Textarea } from "@/components/ui/textarea"
import { FormControl, FormMessage, FormItem, FormLabel, FormField } from "@/components/ui/form"

interface TextAreaFormItemProps {
  form: any,
  name: string,
  label: string,
  placeholder?: string,
}

export const TextAreaFormItem: React.FC<TextAreaFormItemProps> = ({
  form,
  label,
  name,
  placeholder,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder ?? label}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
