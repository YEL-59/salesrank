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

const Password = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  return (
    <>
      <div>
        <div>
          <div className="py-5 flex  items-center border-b">
            <div>
              <h1 className="text-lg font-semibold text-primary">Password</h1>
              <p className="text-sm text-muted-foreground">
                Please enter your current password to change your password.
              </p>
            </div>
          </div>
          <div className="py-6 space-y-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => console.log(data))}
                className="space-y-6"
              >
                <div className="flex items-center gap-6 border-b py-5">
                  <FormLabel className="w-1/3 text-primary">
                    Current password*
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email Address */}
                <div className="flex items-center gap-6 border-b py-5">
                  <FormLabel className="w-1/3 text-primary">
                    New password*
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center gap-6 border-b py-5">
                  <FormLabel className="w-1/3 text-primary">
                    Confirm new password*
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-4 gap-5">
                  <Button className="px-6 py-2 text-primary hover:text-white bg-transparent">
                    Cancel
                  </Button>
                  <Button type="submit" className="px-6 py-2 text-white">
                    Update password
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
