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
import { Switch } from "@/components/ui/switch";
import { signInSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Notification = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <div className=" py-6">
      <div className="py-5 flex items-center border-b mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-primary mb-2">
            Notifications
          </h1>
          <p className="text-sm text-muted-foreground">
            Select when and how you'll be notified.
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="space-y-6"
          >
            {/* General Notifications Section */}
            <div className="flex items-center gap-6 border-b py-5">
              <FormLabel className="w-1/3 text-primary">
                General notifications
                <p className="text-sm text-primary-foreground py-2">
                  Select when you'll be notified when the following changes
                  occur.
                </p>
              </FormLabel>

              <div className="flex flex-col w-2/3 space-y-4">
                {[
                  "I'm mentioned in a message",
                  "Someone comments on my post",
                  "Someone follows me",
                  "I receive a new message",
                ].map((label, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-primary-foreground">
                      {label}
                    </span>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>

            {/* Email Address Field */}
            <div className="flex items-center gap-6 border-b py-5">
              <FormLabel className="w-1/3 text-primary">
                New password*
              </FormLabel>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-2/3">
                    <FormControl>
                      <Input
                        placeholder="Enter your new password"
                        {...field}
                        className="w-full border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Save Button Section */}
            <div className="flex justify-end pt-4 gap-5">
              <Button className="px-6 py-2 text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-200">
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-6 py-2 text-white bg-primary hover:bg-primary-dark transition-all duration-200"
              >
                Update password
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Notification;
