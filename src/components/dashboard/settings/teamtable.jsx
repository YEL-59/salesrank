import { useState } from "react";
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

export default function TeamTable() {
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
                          onChange={() => handleCheckboxChange(member.id)}
                        />
                      </TableCell>
                      <TableCell className="w-2/6">{member.name}</TableCell>
                      <TableCell className="w-2/6">{member.role}</TableCell>
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
  );
}
