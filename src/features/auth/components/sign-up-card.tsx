
//Icons packs
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";


//Form control and Validation and Resolvers
import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

// ShadCn UI components
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";


const formSchema = z.object({

    name : z.string().min(2, "Please Enter a valid name"),
    email: z.string().email(),
    password: z.string().min(6,"Please enter minimum of 6 characters")
})




export const SingUpCard = () =>{

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: "",
            email: "",
            password: "",
        }
    })

    const onSubmit = (values:z.infer<typeof formSchema>) =>{
        console.log(values);
    }



    return (
        <div>
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">
                    Sign Up
                </CardTitle>
                <CardDescription>
                By Sigining up you agree to our {" "}
                <a href= "/privacy">
                <span className="text-blue-700">Privacy Policy</span>
                </a>
            </CardDescription>
            </CardHeader>

            <div className = "px-7">
            <Separator />
            </div>

            <CardContent className="p-7">
                <Form {...form}>
                <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                name = "name"
                control = {form.control}
                render={({field})=>(
                    <FormItem> 
                        <FormControl>           
                            <Input
                                {...field}
                                type="text"
                                placeholder="Enter your name"
                                >
                            </Input>
                        </FormControl>
                        <FormMessage/>   
                    </FormItem>  
                )}
                /> 
                <FormField 
                    name = "email"
                    control = {form.control}
                    render = {({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input
                                {...field}
                                type="email"
                                placeholder="Enter Email Address"
                                >
                                </Input>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        
                    )}
                />
                 <FormField 
                    name = "password"
                    control = {form.control}
                    render = {({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input
                                {...field}
                                type="password"
                                placeholder="Enter Password"
                                >
                                </Input>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                        
                    )}
                    />
                        <Button className="w-full" size="lg">
                            Sign Up
                        </Button>
                </form>
                </Form>
            </CardContent>
            <div className = "px-7">
                <Separator/>
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button variant={"secondary"}
                className="w-full"
                size="lg"
                disabled = {false}
                >
                    <FcGoogle className="mr-2 size-5" />  
                    Login with Google
                </Button>
                
                <Button variant={"secondary"}
                className="w-full"
                size="lg"
                disabled = {false}
                >
                    <FaGithub className="mr-2 size-5" />  
                    Login with Github
                </Button>

            </CardContent>

            <div className="px-7">
                <Separator/>
            </div>

            <CardContent>
                <div className="flex items-center justify-center py-7 ">
                <p>Don&apos;t have an accout? 
                        <Link href= "sign-in">
                            <span className = "text-blue-700"> Sign in </span>
                        </Link>
                </p>
                </div>
            </CardContent>
           
            

            
        </Card>
        
        </div>


    )
}