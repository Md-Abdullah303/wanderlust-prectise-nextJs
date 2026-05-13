"use client";

import { authClient } from "@/app/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { PiGoogleLogo } from "react-icons/pi";
import { toast } from "react-toastify";

export function SignUpForm() {
    const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData.name);

    if(userData.password != userData.confirm){
        toast.error("password and confirm password are not same..")
        return;
    }

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email, // required
      password: userData.password, // required
      image: userData.image,
      callbackURL: "/",
    });
    console.log(data, error);

    if(data?.user){
        toast.success("login successful")
        router.refresh("/")
        redirect("/")
    }else if(error?.message){
      toast.error(error?.message)
    }

  };

  const handleGooglelogin = async () => {
      const res = await authClient.signIn.social({
        provider: "google",
      });
      console.log(res);
    };

  return (
    <Form
      className="w-full border bg-white border-gray-200 p-4 shadow"
      onSubmit={onSubmit}
    >
      <Fieldset>
        <FieldGroup>
          {/* name */}
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }

              return null;
            }}
          >
            <Label>Full Name</Label>
            <Input
              className={
                "bg-slate-50 rounded-xs border border-gray-200 shadow-none"
              }
              placeholder="Enter your name"
            />
            <FieldError />
          </TextField>
          {/* email */}
          <TextField isRequired name="email" type="email">
            <Label>Email Address</Label>
            <Input
              className={
                "bg-slate-50 rounded-xs border border-gray-200 shadow-none"
              }
              placeholder="Enter your email"
            />
            <FieldError />
          </TextField>

          {/* imageUrl */}
          <TextField isRequired name="image">
            <Label>Image URI</Label>
            <Input
              className={
                "bg-slate-50 rounded-xs border border-gray-200 shadow-none"
              }
              placeholder="Enter your imageUrl"
            />
            <FieldError />
          </TextField>

          {/* password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              className={
                "bg-slate-50 rounded-xs border border-gray-200 shadow-none"
              }
              placeholder="Enter your password"
            />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          {/* confirm password */}
          <TextField isRequired name="confirm" type="password"
          validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Confirm Password</Label>
            <Input
              className={
                "bg-slate-50 rounded-xs border border-gray-200 shadow-none"
              }
              placeholder="Confirm your password"
            />
            <FieldError />
          </TextField>
        </FieldGroup>
        <Button className={"w-full rounded-none bg-cyan-500"} type="submit">
          <FloppyDisk />
          Create Account
        </Button>
        <div className="flex justify-center items-center gap-2">
          <hr className="w-[35%]" />
          <p className="text-gray-400">Or sign up with</p>
          <hr className="w-[35%]" />
        </div>
        <Button onClick={handleGooglelogin} className={"rounded-none w-full"} variant="outline">
          <PiGoogleLogo /> Sign Up With Google
        </Button>
        <p className="text-center text-gray-600">
          already have a account?{" "}
          <Link className="text-cyan-400" href={"/login"}>
            Sign in
          </Link>
        </p>
      </Fieldset>
    </Form>
  );
}
