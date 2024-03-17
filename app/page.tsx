"use client"
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {
  return (
  <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-blue-500">
      {/* <Button size={"lg"} variant={"outline"}>Click Me</Button> */}

    <div>
      <h1 className="text-center text-white text-6xl font-bold">
        Auth
      </h1>
      <p className="text-white text-lg my-2">A simple authentication service</p>
    </div>
    {/* <div onClick={() => router.push("/auth/login")}> */}
      <LoginButton><Button size={"lg"} variant="secondary">Sign in</Button></LoginButton>
    
    {/* </div> */}

  </main>
  );
}
