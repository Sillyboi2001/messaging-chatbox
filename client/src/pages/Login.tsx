import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <h1 className="font-serif text-3xl font-bold mb-8 text-center">Sign In</h1>
      <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="username">Username</label>
        <Input id="username" pattern="/S*" required ref={usernameRef}/>
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" required ref={passwordRef}/>
        <Button type="submit" className="col-span-full">Sign In</Button>
      </form>
    </>
  )
}