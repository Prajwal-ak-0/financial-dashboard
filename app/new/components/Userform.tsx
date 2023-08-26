"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Heading } from "@/components/Heading"
import axios from "axios"
import toast from "react-hot-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  number: z.string().min(10).max(10),
  price: z.string().min(1).max(10),
})

export const Userform = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        number: "",
        price: "",
      },
    });
  
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      try {
        setLoading(true);

          setLoading(true);
          await axios.post("../page/api/api_four", data);
          setLoading(false);
       
          setLoading(false);
        toast.success("User Added Successfully");
        console.log(data);
        router.push('/'); 
      } catch (error) {
        console.log(error);
        setLoading(false);
      toast.error("An error occurred");
      }
    };

    return (
        <>
            <Heading
                title="Add User"
                description="Add a new user to your system."
            />
            <Form {...form}>
                <div className="md:grid-cols-2 md:grid gap-8">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-md pl-1">Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </form>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-md pl-1">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </form>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-md pl-1">Phone No</FormLabel>
                            <FormControl>
                                <Input placeholder="xxxxx xxxxx" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </form>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-md pl-1">Price</FormLabel>
                            <FormControl>
                                <Input placeholder="$" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </form>
                </div>
                <div className="item-center justify-center md:flex">
                    <Button 
                        type="submit"
                        className={buttonVariants({variant:"ghost"})} 
                        disabled={loading}  
                    >
                        {loading ? "Submiting..." : "Submit"}
                    </Button>
                </div>
            </Form>
        </>
    )
}