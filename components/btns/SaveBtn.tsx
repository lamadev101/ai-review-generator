import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SaveBtnProps {
  label?: string,
  className?: string,
  loading?: boolean,
}

const SaveBtn: React.FC<SaveBtnProps> = ({
  label = "Save",
  className = null,
  loading = false,
}) => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={cn(className ?? "bg-teal-600 px-8 py-2")}
    >
      {label}
    </Button>
  )
}

export default SaveBtn