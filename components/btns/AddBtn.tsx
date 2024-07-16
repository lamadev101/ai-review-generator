import { DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";

interface AddBtnProps {
  label: string;
}


const AddBtn: React.FC<AddBtnProps> = ({
  label,

}) => {
  return (
    <DialogTrigger asChild>
      <Button>
        <PlusCircledIcon className="mr-2 h-4 w-4" />
        {label}
      </Button>
    </DialogTrigger>
  )
}

export default AddBtn