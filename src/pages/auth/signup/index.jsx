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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"; // Import Dialog components

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Form handling for dialog
  const dialogForm = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedinProfile: "",
      revenueGenerated: "",
      industryExperience: "",
      presidentClubExperience: "",
      leadCloseRatio: "",
    },
  });

  return (
    <>
      <div>
        <div className="max-h-screen">
          <div className="flex">
            <div className="flex-1 w-full px-5 py-5">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-xl flex flex-col justify-center items-center w-full">
                  <div className="text-start">
                    <h1 className="text-primary text-[32px] font-semibold leading-[24px] text-start">
                      Sign up
                    </h1>
                    <p className="text-[#535862] font-normal text-[16px] leading-[24px] py-5 text-start">
                      Start your 30-day free trial.
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
                            <FormLabel>Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email*</FormLabel>
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

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full h-12 text-white"
                            type="button"
                          >
                            Create account
                          </Button>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogTitle>Create Account Details</DialogTitle>
                          <form
                            onSubmit={dialogForm.handleSubmit((data) =>
                              console.log(data)
                            )}
                            className="space-y-4"
                          >
                            {/* First name and last name - flex justify-between */}
                            <div className="flex justify-between space-x-4">
                              <FormField
                                control={dialogForm.control}
                                name="firstName"
                                render={({ field }) => (
                                  <FormItem className="w-1/2">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="First Name"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={dialogForm.control}
                                name="lastName"
                                render={({ field }) => (
                                  <FormItem className="w-1/2">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Last Name"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* Email - full width */}
                            <FormField
                              control={dialogForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Email Address"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Phone */}
                            <FormField
                              control={dialogForm.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Phone Number"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* LinkedIn Profile - file upload */}
                            <FormField
                              control={dialogForm.control}
                              name="linkedinProfile"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>LinkedIn Profile</FormLabel>
                                  <FormControl>
                                    <Input type="file" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Revenue Generated & Industry Experience - flex */}
                            <div className="flex justify-between space-x-4">
                              <FormField
                                control={dialogForm.control}
                                name="revenueGenerated"
                                render={({ field }) => (
                                  <FormItem className="w-1/2">
                                    <FormLabel>
                                      Revenue Generated (2024)
                                    </FormLabel>
                                    <FormControl>
                                      <Input placeholder="Revenue" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={dialogForm.control}
                                name="industryExperience"
                                render={({ field }) => (
                                  <FormItem className="w-1/2">
                                    <FormLabel>Industry Experience</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Experience"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* President Club Experience & Lead Close Ratio - flex */}
                            <div className="flex justify-between space-x-4">
                              <FormField
                                control={dialogForm.control}
                                name="presidentClubExperience"
                                render={({ field }) => (
                                  <FormItem className="w-1/2">
                                    <FormLabel>
                                      President Club Experience
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Experience"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={dialogForm.control}
                                name="leadCloseRatio"
                                render={({ field }) => (
                                  <FormItem className="w-1/2">
                                    <FormLabel>Lead Close Ratio</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Ratio" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            {/* Final button */}
                            <Button
                              className="w-full h-12 text-white"
                              type="submit"
                            >
                              Analyze the data
                            </Button>
                          </form>
                          {/* <DialogClose asChild>
                            <Button className="mt-4" variant="outline">
                              Close
                            </Button>
                          </DialogClose> */}
                        </DialogContent>
                      </Dialog>
                    </form>
                  </Form>
                  <div className="flex justify-center py-5">
                    <p className="text-foreground/70 space-x-2">
                      <span>Already have an account?</span>
                      <Link
                        to="/auth/sign-up"
                        className="font-medium text-primary"
                      >
                        Log In
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

export default Signup;
