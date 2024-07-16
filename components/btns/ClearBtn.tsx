import { Button } from "@/components/ui/button"

interface ClearBtnProps {
  label?: string,
  onClick?: () => void,
}

const ClearBtn: React.FC<ClearBtnProps> = ({
  label = "Clear",
  onClick,
}) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className="border border-red-400 px-8 py-4 text-red-400 ms-2"
    >
      {label}
    </Button>
  )
}

export default ClearBtn