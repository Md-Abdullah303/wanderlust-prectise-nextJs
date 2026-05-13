"use client";
import { authClient } from "@/app/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Checkbox,
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
import { PiGoogleLogo } from "react-icons/pi";
import { toast } from "react-toastify";

const LoginForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
      callbackURL: "/",
    });
    console.log(data, error);

    if (data?.user) {
      toast.success("login successful");
      router.refresh("/");
    //   redirect("/");
    }
  };
  return (
    <Form
      className="w-full border bg-white border-gray-200 p-4 shadow"
      onSubmit={onSubmit}
    >
      <Fieldset>
        <FieldGroup>
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

          <div className="flex items-center justify-between">
            <Checkbox id="basic-terms">
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label htmlFor="basic-terms">Remember me</Label>
              </Checkbox.Content>
            </Checkbox>
            <p className="text-cyan-400 cursor-pointer">Forgot Password?</p>
          </div>
        </FieldGroup>
        <Button className={"w-full rounded-none bg-cyan-500"} type="submit">
          Sign In
        </Button>
        <div className="flex justify-center items-center gap-2">
          <hr className="w-[35%]" />
          <p className="text-gray-400">Or continue with</p>
          <hr className="w-[35%]" />
        </div>
        <Button className={"rounded-none w-full"} variant="outline">
          <PiGoogleLogo /> Sign Up With Google
        </Button>
        <p className="text-center text-gray-600">
          Don't have account{" "}
          <Link className="text-cyan-400" href={"/signUp"}>
            Sign Up
          </Link>
        </p>
      </Fieldset>
    </Form>
  );
};

export default LoginForm;
