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
import { addToast } from "@/lib/toast";
import { Effect } from "../ui/effects";
import { useTranslations } from "next-intl";

const Contact = () => {
    const form = useForm<InferType<typeof schema>>({
        resolver: yupResolver(schema),
    })
    async function onSubmit(data: IFormData) {
        const formData = new FormData();

        formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3DORM_ACCESS_KEY}`);
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

    const t = useTranslations("ContactSection")
    return <div className="relative flex flex-col items-center justify-center px-6 sm:px-12 pt-8 pb-16" id="contact">
        <Effect className="bottom-0 left-0 translate-x-[-50%] translate-y-[30%]" />
        <SectionTitle
            title={t("title")}
            desc={t("desc")}
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
                                <FormLabel>{t("name")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={`${t("name")}...`} {...field} />
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
                                <FormLabel>{t("email")}</FormLabel>
                                <FormControl>
                                    <Input placeholder={`${t("email")}...`} {...field} />
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
                                <FormLabel>{t("msg")}</FormLabel>
                                <FormControl>
                                    <Textarea placeholder={`${t("msg")}...`} {...field} />
                                </FormControl>
                                <FormDescription>
                                    {/* {form.formState.errors.message && <span>{form.formState.errors.message.message}</span>} */}
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        <span>{t("send")}</span>
                        <Send />
                    </Button>
                </form>
            </Form>
        </div>
    </div>;
};

export default Contact;
