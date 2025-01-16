"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { BsFillSendFill } from "react-icons/bs";

import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (data) => {
    const { name, email, message } = data;

    const ServiceId = "service_1lwnat9";
    const TemplateId = "template_9giszts";
    const publicKey = "zy9Vw4CjqM_kpMatp";
    const TemplateParams = {
      from_name: name,
      from_email: email.toLowerCase(),
      to_name: "Shahed Abid",
      message: message,
    };

    emailjs
      .send(ServiceId, TemplateId, TemplateParams, publicKey)
      .then((res) => {
        console.log("EmailJS Response:", res);
        if (res.text === "OK") {
          toast.success("Email sent successfully");
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send email");
      });
  };

  return (
    <div
      className="font text-white overflow-hidden relative lg:flex items-center my-20 mx-4 block"
      id="contact"
    >
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img
          className="lg:w-[450px] md:w-[100%] mb-4 mr-20 rounded-xl lg:h-[400px] md:h-[600px]"
          src={"/sent.png"}
          alt="projects images"
        />
      </motion.div>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <form className="w-full space-y-4" onSubmit={handleSubmit(sendEmail)}>
          <div className="space-y-2">
            <Label className="title-width " htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              className="lg:w-[550px]"
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="title-width " htmlFor="email">
              Your Email
            </Label>
            <Input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="title-width " htmlFor="message">
              Your Message
            </Label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="bg-transparent border rounded p-2 w-full"
              placeholder="Leave Your Message ..."
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="font-bold py-2 text-xl px-4 flex items-center rounded bg-[#2ca8ea] transition"
            >
              <BsFillSendFill size={16} className="mr-1" />
              Send
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
