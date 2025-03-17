import { useForm } from "react-hook-form";
import img from "../../../assets/authbg.png";
import logo from "../../../assets/logo2.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/auth.schema";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import frimg from "../../../assets/reset.png";

const ResetPassword = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <header className=" w-full py-4 fixed top-0 left-0 z-50 ">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
      </header>

      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className=" p-8 rounded-lg  w-full max-w-md">
          <div className="text-center">
            <img
              src={frimg}
              alt="Logo"
              className="flex justify-center items-center max-w-sm mx-auto"
            />
            <h1 className="text-primary text-[32px] font-bold leading-[24px] py-2">
              Set new password
            </h1>
            <p className="text-sm ">
              Your new password must be different to previously used passwords.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(signInSchema)}
              className="space-y-4 w-full"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
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
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
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
                    <FormLabel> Password*</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full h-12 text-white" type="submit">
                Reset password
              </Button>
            </form>
          </Form>
          <div className="flex justify-center py-5">
            <p className="text-foreground/70 space-x-2 flex items-center">
              <MoveLeft />
              <Link to="/sign-in" className="font-medium">
                Back to log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
