import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}
const InputText = ({ label, ...props }: Props) => {
  return (
    <label className="flex flex-col w-full">
      <span>{label}</span>
      <input {...props} className="h-10 px-4 border border-gray-200" />
    </label>
  )
}
export default InputText