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
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const Team = () => {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const [emailFields, setEmailFields] = useState([
    { email: "", userType: "view" },
  ]);

  const handleAddEmailField = () => {
    setEmailFields([...emailFields, { email: "", userType: "view" }]);
  };
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "John Doe", role: "Admin", selected: false },
    { id: 2, name: "Jane Smith", role: "Editor", selected: false },
    // Add more team members here
  ]);

  const handleCheckboxChange = (id) => {
    const updatedMembers = teamMembers.map((member) => {
      if (member.id === id) {
        return { ...member, selected: !member.selected };
      }
      return member;
    });
    setTeamMembers(updatedMembers);
  };
  return (
    <>
      <div>
        <div className="py-5 flex  items-center border-b">
          <div>
            <h1 className="text-lg font-semibold text-primary">
              Team management
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your team members and their account permissions here.
            </p>
          </div>
        </div>

        <div className="py-6 space-y-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => console.log(data))}
              className="space-y-6"
            >
              <div className="flex flex-col gap-6 border-b py-5">
                <div className="flex items-start gap-6">
                  <FormLabel className="w-1/3 text-primary">
                    Invite team members
                    <p className="text-primary-foreground text-sm max-w">
                      Get your projects up and running faster by inviting your
                      team to collaborate.
                    </p>
                  </FormLabel>

                  <div className="w-2/3">
                    {emailFields.map((field, index) => (
                      <div key={index} className="flex items-center gap-6 mb-4">
                        <FormItem className="w-1/2">
                          <FormControl>
                            <Input
                              value={field.email}
                              onChange={(e) => {
                                const updatedFields = [...emailFields];
                                updatedFields[index].email = e.target.value;
                                setEmailFields(updatedFields);
                              }}
                              placeholder="Enter email"
                              className="w-full"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>

                        <FormItem className="w-1/3">
                          <FormControl>
                            <Select
                              value={field.userType}
                              onValueChange={(value) => {
                                const updatedFields = [...emailFields];
                                updatedFields[index].userType = value;
                                setEmailFields(updatedFields);
                              }}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select user type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="view">View</SelectItem>
                                <SelectItem value="edit">Edit</SelectItem>
                                <SelectItem value="delete">Delete</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between ">
                  <button
                    type="button"
                    onClick={handleAddEmailField}
                    className="text-primary underline mt-4"
                  >
                    + Add another email
                  </button>

                  <Button
                    type="submit"
                    className="text-white w-xl py-4"
                    // disabled={!form.formState.isValid}
                  >
                    Send invitations
                  </Button>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center gap-6 border-b py-5">
                <FormLabel className="w-1/3 text-primary">
                  Team members
                  <p>Manage your existing team and change roles/permissions.</p>
                </FormLabel>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-2/3">
                      <FormControl>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-1/6">
                                <Checkbox />
                              </TableHead>
                              <TableHead className="w-2/6">Name</TableHead>
                              <TableHead className="w-2/6">Role</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {teamMembers.map((member) => (
                              <TableRow key={member.id}>
                                <TableCell className="w-1/6">
                                  <Checkbox
                                    checked={member.selected}
                                    onChange={() =>
                                      handleCheckboxChange(member.id)
                                    }
                                  />
                                </TableCell>
                                <TableCell className="w-2/6">
                                  {member.name}
                                </TableCell>
                                <TableCell className="w-2/6">
                                  {member.role}
                                </TableCell>
                                <TableCell className="w-2/6">
                                  {member.role}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
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
    </>
  );
};

export default Team;
