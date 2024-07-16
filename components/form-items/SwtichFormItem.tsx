import { FormControl, FormMessage, FormItem, FormLabel, FormField } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"

interface SwtichFormItemProps {
  form: any,
  name: string,
  label: string,
}

export const SwtichFormItem: React.FC<SwtichFormItemProps> = ({
  form,
  label,
  name,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl className="block" >
            <Switch {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
