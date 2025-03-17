import img1 from "../../../assets/signin.png";
import logo from "../../../assets/logo2.png";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Checkbox } from "@/components/ui/checkbox";
import Googleicon from "@/assets/googleicon";

const Signin = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
      <div>
        <div className=" max-h-screen">
          <div className="flex  ">
            <div className="flex-1 w-full px-5 py-5">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-xl flex flex-col justify-center items-center w-full">
                  <div className="text-start">
                    <h1 className="text-primary text-[32px] font-semibold leading-[24px] text-start">
                      Log In
                    </h1>
                    <p className="text-[#535862] font-normal text-[16px] leading-[24px] py-5 text-start">
                      Welcome back! Please enter your details.
                    </p>
                  </div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(signInSchema)}
                      className="space-y-4 w-full max-w-md"
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Email Address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Password"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Remember for 30 days
                            </label>
                          </div>
                        </div>
                        <div>
                          <p className="text-primary font-medium text-xs">
                            Forgot password
                          </p>
                        </div>
                      </div>
                      <Button className="w-full h-12 text-white" type="submit">
                        Sign In
                      </Button>
                      <Button className="w-full h-12 bg-white" type="submit">
                        <Googleicon />
                        Sign in with Google
                      </Button>
                    </form>
                  </Form>
                  <div className="flex justify-center py-5">
                    <p className="text-foreground/70 space-x-2">
                      <span>New User?</span>
                      <Link to="/auth/sign-up" className="font-medium">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full bg-[#F5F5F5]">
              <img src={img1} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
