
const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="bg-emerald/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald">
      <span>{message}</span>
    </div>
  )
}

export default FormSuccess