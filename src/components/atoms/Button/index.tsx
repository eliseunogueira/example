import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}
export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className="h-10 font-bold text-white bg-purple-600 hover:bg-purple-400 disabled:bg-gray-200 disabled:cursor-not-allowed">
      {children}
    </button>
  );
};
