import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Mydetails from "./mydetails";
import Password from "./password";
import Team from "./team";
import Notification from "./notification";

const Tab = () => {
  return (
    <div className="w-full  ">
      <Tabs defaultValue="mydetails" className="w-full bg-transparent">
        <TabsList className="flex border-b w-full">
          {[
            { value: "mydetails", label: "My Details" },

            { value: "password", label: "Password" },

            { value: "notification", label: "Notification" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1 text-center py-2 relative bg-transparent data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-black"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="mydetails">
          <Mydetails />
        </TabsContent>
        <TabsContent value="profile">Manage your profile here.</TabsContent>
        <TabsContent value="password">
          <Password />
        </TabsContent>
        <TabsContent value="team">
          <Team />
        </TabsContent>
        <TabsContent value="notification">
          <Notification />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tab;
