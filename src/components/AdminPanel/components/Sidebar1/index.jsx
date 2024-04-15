import React from "react";
import { Heading, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar {...props} width="315px !important" collapsedWidth="80px !important" collapsed={collapsed}>
      <div className="w-[17%] ml-[63px] p-3 md:ml-0 rounded-tl-[5px] rounded-bl-[5px] bg-gradient">
        <div className="h-[17px] w-[18px] bg-white-A700" />
      </div>
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.62px" } }}
        className="flex flex-col self-center w-full mb-[217px]"
      >
        <div className="flex self-start items-center gap-3 p-6 sm:p-5">
          <Img
            src="images/img_monochrome_layer_gray_600.svg"
            alt="monochrome_one"
            className="h-[30px] w-[30px] ml-[42px]"
          />
          <Heading as="h4">Dashboard</Heading>
        </div>
        <div className="flex self-start items-center gap-3 p-6 sm:p-5">
          <Img
            src="images/img_design_tools_grid_gray_500.svg"
            alt="designtools_one"
            className="h-[30px] w-[30px] ml-[42px]"
          />
          <Heading as="h4" className="!text-gray-500">
            Products
          </Heading>
        </div>
        <div className="flex self-start items-center gap-[11px] p-6 sm:p-5">
          <Img src="images/img_users_users_gray_500.svg" alt="usersusers_one" className="h-[30px] w-[30px] ml-[43px]" />
          <Heading as="h4" className="!text-gray-500">
            Customers
          </Heading>
        </div>
        <div className="flex self-start items-center gap-3.5 p-6 sm:p-5">
          <Img src="images/img_vector.svg" alt="vector_one" className="h-[25px] w-[25px] ml-11" />
          <Heading as="h4">Orders</Heading>
        </div>
        <div className="flex self-start items-center gap-[11px] p-6 sm:p-5">
          <Img src="images/img_transport_shipping.svg" alt="transport_one" className="h-[30px] w-[30px] ml-[43px]" />
          <Heading as="h4">Shipments</Heading>
        </div>
        <div className="flex items-center gap-[11px] p-6 sm:p-5">
          <Img src="images/img_business_credit.svg" alt="businesscredit" className="h-[30px] w-[30px]" />
          <Heading as="h4">Transactions</Heading>
        </div>
        <div className="flex self-start items-center gap-[11px] p-6 sm:p-5">
          <Img
            src="images/img_user_interface_orange_a200_01.svg"
            alt="userinterface"
            className="h-[30px] w-[30px] ml-[43px]"
          />
          <Heading as="h4" className="!text-orange-A200_01">
            Categories{" "}
          </Heading>
        </div>
        <div className="flex self-end items-center gap-[11px] p-6 sm:p-5">
          <Img src="images/img_user_interface_orange_a200_01.svg" alt="userinterface" className="h-[30px] w-[30px]" />
          <Heading as="h4" className="mr-[35px] !text-orange-A200_01">
            Sub Category
          </Heading>
        </div>
        <div className="flex self-start items-center gap-2.5 p-6 sm:p-5">
          <Img
            src="images/img_user_interface_blue_gray_100_01.svg"
            alt="userinterface"
            className="h-[30px] w-[30px] ml-[46px]"
          />
          <Heading as="h4">Logout</Heading>
        </div>
      </Menu>
    </Sidebar>
  );
}
