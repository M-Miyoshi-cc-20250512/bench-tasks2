"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Head from "next/head";
import { useForm } from "react-hook-form";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Contact Form</title>
      </Head>

      <main>
        <h1>Contact Form</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label>Name</label><br />
            <input type="text" {...register("name")} />
            {errors.name && <p>{errors.name.message as string}</p>}
          </div>

          <div>
            <label>Email</label><br />
            <input type="email" {...register("email")} />
            {errors.email && <p>{errors.email.message as string}</p>}
          </div>

          <div>
            <label>Message</label><br />
            <textarea {...register("message")}></textarea>
            {errors.message && <p>{errors.message.message as string}</p>}
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}