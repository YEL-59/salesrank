import OnboadingFooter from "@/components/dashboard/onboarding/onboading-footer";
import OnboardingCalender from "@/components/dashboard/onboarding/onboarding-calender";
import { Ellipsis } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const Onboarding = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Section */}
        <div className="md:col-span-4">
          <OnboardingCalender />
        </div>

        {/* Right Section */}
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Card */}
            <div>
              <div className="flex justify-between items-center border-b pb-4">
                <h1 className="text-xl font-semibold text-gray-800">
                  Onboarding Feedback
                </h1>
                <Ellipsis className="cursor-pointer text-gray-500py-2" />
              </div>

              <Card className="shadow-md border border-gray-200 rounded-xl bg-white mb-5">
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-3 items-center">
                      <div className="h-14 w-14 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-lg font-semibold">
                          OS
                        </span>
                      </div>
                      <div>
                        <Badge className="bg-gray-200 text-gray-700">
                          Human Resources
                        </Badge>
                        <h1 className="text-lg font-semibold text-primary">
                          Olivia Smith
                        </h1>
                        <p className="text-sm text-gray-500">HR Manager</p>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700">
                      Mid-level
                    </Badge>
                    <Badge className="bg-green-100 text-green-700">
                      5+ Years
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-700">
                      Full-time
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700">
                      Remote
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between text-sm text-gray-700">
                  <div>
                    <h4 className="text-gray-500">Start Date</h4>
                    <h1 className="font-semibold text-primary">
                      October 20, 2030
                    </h1>
                  </div>
                  <div className="text-right">
                    <h4 className="text-gray-500">Onboarding Status</h4>
                    <Badge className="bg-gray-200 text-gray-700">
                      In Progress
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
              <Card className="shadow-md border border-gray-200 rounded-xl bg-white mb-5">
                <CardHeader>
                  <CardTitle>
                    <div className="flex gap-3 items-center">
                      <div className="h-14 w-14 bg-yellow-100 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-lg font-semibold">
                          OS
                        </span>
                      </div>
                      <div>
                        <Badge className="bg-gray-200 text-gray-700">
                          Human Resources
                        </Badge>
                        <h1 className="text-lg font-semibold text-primary">
                          Olivia Smith
                        </h1>
                        <p className="text-sm text-gray-500">HR Manager</p>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-700">
                      Mid-level
                    </Badge>
                    <Badge className="bg-green-100 text-green-700">
                      5+ Years
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-700">
                      Full-time
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700">
                      Remote
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between text-sm text-gray-700">
                  <div>
                    <h4 className="text-gray-500">Start Date</h4>
                    <h1 className="font-semibold text-primary">
                      October 20, 2030
                    </h1>
                  </div>
                  <div className="text-right">
                    <h4 className="text-gray-500">Onboarding Status</h4>
                    <Badge className="bg-gray-200 text-gray-700">
                      In Progress
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Progress Tracker</h1>
                <Select>
                  <SelectTrigger className="w-[180px] border-gray-300">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Stages</SelectLabel>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="assessment">Assessment</SelectItem>
                      <SelectItem value="completion">Completion</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="p-4 border rounded-lg shadow bg-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="font-semibold">Laura Smith</span>
                  <span className="text-gray-500">
                    {" "}
                    &middot; SEO Specialist
                  </span>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500"
                    style={{ width: "80%" }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Progress:{" "}
                  <span className="font-medium">
                    Training Sessions in Progress
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* Table Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Onboarding Table
            </h2>
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Start Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2">Olivia Smith</td>
                  <td className="px-4 py-2">HR Manager</td>
                  <td className="px-4 py-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-2">Oct 20, 2030</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">Software Engineer</td>
                  <td className="px-4 py-2">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-2">Nov 15, 2030</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <OnboadingFooter />
      </div>
    </div>
  );
};

export default Onboarding;
