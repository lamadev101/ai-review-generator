import { Button } from '../ui/button'
import { FaFilePdf } from 'react-icons/fa'

interface ExportBtnProps {
  onClick: () => void,
  label?: string,
}

const ExportBtn: React.FC<ExportBtnProps> = ({
  onClick,
  label = "Export to PDF"
}) => {
  return (
    <Button
      onClick={onClick}
      className="px-4 py-2 hover:bg-slate-800 felx items-center gap-3 text-white w-max"
    >
      <FaFilePdf />
      {label}
    </Button>
  )
}

export default ExportBtn