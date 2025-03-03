"use client"
import React from "react";
import SectionTitle from "../Section-Title/SectionTitle";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "@/validations/formValidation";
import { IFormData } from "@/types/interfaces";
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
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { InferType } from "yup";
import { Send } from "lucide-react";
import 'dotenv/config'
import { addToast } from "@/lib/toast";
import { Effect } from "../ui/effects";

const Contact = () => {
    const form = useForm<InferType<typeof schema>>({
        resolver: yupResolver(schema),
    })
    async function onSubmit(data: IFormData) {
        const formData = new FormData();

        formData.append("access_key", "3bab4c53-274b-47cf-81a9-852ca97e165e");
        formData.append("name", data.username);
        formData.append("email", data.email);
        formData.append("message", data.message);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            if (localStorage.getItem("theme") === "dark") {
                addToast("dark", "success")
            } else {
                addToast("light", "success")
            }
        } else {
            if (localStorage.getItem("theme") === "dark") {
                addToast("dark", "warn")
            } else {
                addToast("light", "warn")
            }
        }
    }


    return <div className="relative flex flex-col items-center justify-center px-6 sm:px-12 pt-8 pb-16" id="contact">
        <Effect className="bottom-0 left-0 translate-x-[-50%] translate-y-[30%]" />
        <SectionTitle
            title="Contact Me"
            desc="If You'v Any Comments Or Feedback "
            className="justify-center items-center"
            h_size="30"
        />
        <div className="w-[90%] sm:w-auto mt-12">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-between flex-wrap gap-y-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="w-full sm:w-[49%]">
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="User name..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* {form.formState.errors.username && <span>{form.formState.errors.username.message}</span>} */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full sm:w-[49%]">
                                <FormLabel>Your Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Email..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* {form.formState.errors.email && <span>{form.formState.errors.email.message}</span>} */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Message..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* {form.formState.errors.message && <span>{form.formState.errors.message.message}</span>} */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        <span>Send Mail</span>
                        <Send />
                    </Button>
                </form>
            </Form>
        </div>
    </div>;
};

export default Contact;
