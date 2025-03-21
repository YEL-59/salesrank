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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Mydetails = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <div className="py-5 flex justify-between items-center border-b">
        <div>
          <h1 className="text-lg font-semibold text-primary">Personal Info</h1>
          <p className="text-sm text-muted-foreground">
            Update your photo and personal details here.
          </p>
        </div>
        <div>
          <Button variant="outline" className="text-primary mr-2">
            Cancel
          </Button>
          <Button type="submit" className="text-white">
            Save
          </Button>
        </div>
      </div>

      <div className="py-6 space-y-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => console.log(data))}
            className="space-y-6"
          >
            <div className="flex items-center gap-6 border-b py-5">
              <FormLabel className="w-1/3 text-primary">Full Name</FormLabel>
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
                Email Address
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
              {/* Label Section */}
              <FormLabel className="w-1/3 text-primary">
                Your Photo{" "}
                <p className="text-sm text-primary-foreground">
                  This will be displayed on your profile.
                </p>
              </FormLabel>

              <div className="flex items-center gap-4 w-2/3">
                <div className="h-20 w-20 bg-gray-200 rounded-md flex items-center justify-center border border-dashed">
                  <span className="text-gray-400 text-sm">Preview</span>
                </div>

                {/* Upload Box */}
                <div className="w-[42%] border-2 border-dashed border-gray-300 py-10 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
                  <p className="text-sm text-primary-foreground">
                    Click to upload
                  </p>
                  <p className="text-xs text-gray-500">
                    JPG, PNG, GIF (max 2MB)
                  </p>
                  <input type="file" className="hidden" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 border-b py-5">
              <FormLabel className="w-1/3 text-primary">Role</FormLabel>
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
              {/* Label */}
              <FormLabel className="w-1/3 text-primary">Country</FormLabel>

              {/* Country Select Dropdown */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="w-1/3">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="in">India</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* <div className="flex items-center gap-6 border-b py-5">
              
              <FormLabel className="w-1/3 text-primary">Bio</FormLabel>

             
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <ReactQuill
                        theme="snow"
                        value={field.value}
                        onChange={field.onChange}
                        className="w-full bg-white rounded-md"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div> */}
            <div className="flex items-center gap-6 border-b py-5">
              {/* Label Section */}
              <FormLabel className="w-1/3 text-primary">
                Portfolio projects
                <p className="text-sm text-primary-foreground">
                  Share a few snippets of your work.
                </p>
              </FormLabel>

              <div className="flex items-center gap-4 w-2/3">
                <div className="h-20 w-20 bg-gray-200 rounded-md flex items-center justify-center border border-dashed">
                  <span className="text-gray-400 text-sm">Preview</span>
                </div>

                {/* Upload Box */}
                <div className="w-[42%] border-2 border-dashed border-gray-300 py-10 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
                  <p className="text-sm text-primary-foreground">
                    Click to upload
                  </p>
                  <p className="text-xs text-gray-500">
                    JPG, PNG, GIF (max 2MB)
                  </p>
                  <input type="file" className="hidden" />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <Button type="submit" className="px-6 py-2 text-white">
                Save Changes
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Mydetails;
