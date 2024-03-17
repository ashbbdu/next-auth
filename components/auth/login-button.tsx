"use Client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children : React.ReactNode;
    mode? : "model" | "redirect";
    asChild? : boolean
}



export const LoginButton = ({children , mode  = "redirect" , asChild} : LoginButtonProps) => 
 {
    const router = useRouter()
    const onClick = () => {
        router.push("/auth/login")
    }
    if(mode === "model") {
        return <span>
            TODO : Implement Modal
        </span>
    }
    return <span onClick={onClick} className="pointer">
        {children}
    </span>
}