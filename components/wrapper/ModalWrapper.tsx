import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface ModalWrapperProps {
  children: React.ReactNode;
  title: string;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, title }) => {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>

  )
}

export default ModalWrapper