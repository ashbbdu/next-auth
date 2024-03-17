import { Input } from "../ui/input"

export const LoginForm = () => {
    return (
        <div className="">
           <div>
            <label htmlFor="email"></label>
            <Input type="email" placeholder="ash@yopmail.com" />
           </div>
           <div>
            <label htmlFor="email"></label>
            <Input type="password" placeholder="12345" />
           </div>
        </div>
    )
}