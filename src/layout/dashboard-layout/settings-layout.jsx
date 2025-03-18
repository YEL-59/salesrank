import { Outlet } from "react-router";
const SettingsLayout = () => {
  return (
    <>
      <div className=" overflow-y-auto px-5 py-10">
        <Outlet />
      </div>
    </>
  );
};

export default SettingsLayout;
