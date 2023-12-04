import * as React from "react";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
}
export const Card = ({ children }: CardProps) => {
  return <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full">{children}</div>
  </div>
}

Card.Body = function ({ children }: CardProps) {
  return <div className="shadow bg-white p-6 rounded-lg">{children}</div>
}

Card.Below = function ({ children }: CardProps) {
  return <div className="mt-2 justify-center flex gap-3">{children}</div>
}