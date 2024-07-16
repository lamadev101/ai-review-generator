import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormControl, FormMessage, FormItem, FormLabel, FormField } from "@/components/ui/form"

interface SelectFormItemProps {
  form: any,
  name: string,
  label: string,
  placeholder?: string,
  type?: string,
  options: {
    id: string,
    value: string,
  }[]
}


export const SelectFormItem: React.FC<SelectFormItemProps> = ({
  form,
  label,
  name,
  placeholder,
  options
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={`Select ${label ?? placeholder}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map(option => (
                <SelectItem
                  key={option.id}
                  value={option.id}
                >
                  {option.value}
                </SelectItem>

              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
