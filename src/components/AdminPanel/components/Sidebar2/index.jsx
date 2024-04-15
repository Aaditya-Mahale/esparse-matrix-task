import React from "react";
import { Heading, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar2({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar {...props} width="315px !important" collapsedWidth="80px !important" collapsed={collapsed}>
      <div className="w-[21%] ml-2 p-3 md:ml-0 rounded-tl-[5px] rounded-bl-[5px] bg-gradient">
        <div className="h-[17px] w-[18px] bg-white-A700" />
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
            [`&:hover, &.ps-active`]: { color: "#ffad33", fontWeight: "600 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "1.00px" } }}
        className="flex flex-col self-stretch items-center w-full mb-[266px] pl-3"
      >
        <div className="flex items-center gap-3 py-[25px] sm:py-5">
          <Img src="images/img_monochrome_layer_gray_600.svg" alt="monochrome_one" className="h-[30px] w-[30px]" />
          <Heading as="h4">Dashboard</Heading>
        </div>
        <div className="flex items-center gap-3 py-[25px] sm:py-5">
          <Img src="images/img_design_tools_grid_yellow_700.svg" alt="designtools_one" className="h-[30px] w-[30px]" />
          <Heading as="h4">Products</Heading>
        </div>
        <div className="flex items-center gap-[11px]">
          <Img src="images/img_users_users.svg" alt="usersusers_one" className="h-[30px] w-[30px] my-6" />
          <Heading as="h4">Customers</Heading>
        </div>
        <div className="flex self-start items-center gap-3.5">
          <Img src="images/img_vector.svg" alt="vector_one" className="h-[25px] w-[25px]" />
          <Heading as="h4" className="my-[23px]">
            Orders
          </Heading>
        </div>
        <div className="flex items-center gap-[11px]">
          <Img src="images/img_transport_shipping.svg" alt="transport_one" className="h-[30px] w-[30px] my-6" />
          <Heading as="h4">Shipments</Heading>
        </div>
        <div className="flex items-center gap-[11px] z-[1]">
          <Img src="images/img_business_credit.svg" alt="businesscredit" className="h-[30px] w-[30px] my-6" />
          <Heading as="h4">Transactions</Heading>
        </div>
        <div className="flex self-start items-center gap-[11px]">
          <Img src="images/img_user_interface.svg" alt="userinterface" className="h-[30px] w-[30px] my-6" />
          <Heading as="h4">Settings</Heading>
        </div>
        <div className="flex self-start items-center gap-2.5">
          <Img
            src="images/img_user_interface_blue_gray_100_01.svg"
            alt="userinterface"
            className="h-[30px] w-[30px] my-[23px]"
          />
          <Heading as="h4">Logout</Heading>
        </div>
      </Menu>
    </Sidebar>
  );
}
