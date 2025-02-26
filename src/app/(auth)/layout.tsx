"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";


interface AuthLayoutProps {
    children: React.ReactNode;
}
const AuthLayout = ({children}:AuthLayoutProps) =>{

    const pathname = usePathname();

    return(
        <main className="bg-neutral-100 min-h-screen ">
            <div className=" max-w-screen mx-0.5 my-0.5 p-4 ">
                <nav className=" w-auto flex justify-between items-center">
                    <Image src="/logo.svg" alt="logo" height={50} width={200}/>
                        <Button asChild variant={"secondary"}>
                            <Link href= {pathname === "/sign-up"? "/sign-in" : "/sign-up"}>
                            {pathname === "/sign-up"? "Login" : "Sign Up"}
                            </Link>
                        </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                {children}
                </div>
            </div>
            
        </main>
    )
}

export default AuthLayout;