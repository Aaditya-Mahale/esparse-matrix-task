import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function ShipmentsPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full bg-yellow-900_9e shadow-xs">
        <div className="flex md:flex-col items-start w-[97%] md:w-full gap-[47px] md:p-5">
          <Sidebar
            width="317px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="flex flex-col h-screen top-0 p-[9px] bg-white-A700 !sticky overflow-auto md:hidden"
          >
            <div className="flex flex-col w-[82%] md:w-full mt-[23px] mb-[312px] gap-[94px] md:gap-[70px] sm:gap-[47px]">
              <div className="flex items-center gap-[3px]">
                <div className="self-end w-[18%] mb-3.5 p-3 rounded-tl-[5px] rounded-bl-[5px] bg-gradient">
                  <div className="h-[17px] w-[18px] bg-white-A700" />
                </div>
                <Heading size="4xl" as="h2" className="w-[83%] !text-blue_gray-700 text-center">
                  STARTUP IDEA
                </Heading>
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    color: "#cdcdcd",
                    fontWeight: 600,
                    fontSize: "24px",
                    gap: "12px",
                    paddingTop: "9px",
                    paddingBottom: "9px",
                    [`&:hover, &.ps-active`]: { color: "#ffad33" },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "0.74px" } }}
                className="flex flex-col items-start pl-1"
              >
                <MenuItem
                  icon={
                    <Img
                      src="images/img_monochrome_layer_gray_600.svg"
                      alt="monochrome_one"
                      className="h-[30px] w-[30px]"
                    />
                  }
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  icon={
                    <Img src="images/img_design_tools_grid.svg" alt="designtools_one" className="h-[30px] w-[30px]" />
                  }
                >
                  Products
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_users_users.svg" alt="usersusers_one" className="h-[30px] w-[30px]" />}
                >
                  Customers
                </MenuItem>
                <MenuItem icon={<Img src="images/img_vector.svg" alt="vector_one" className="h-[25px] w-[25px]" />}>
                  Orders
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_transport_shipping_orange_a200_01.svg"
                      alt="transport_one"
                      className="h-[30px] w-[30px]"
                    />
                  }
                >
                  Shipments
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_business_credit.svg" alt="businesscredit" className="h-[30px] w-[30px]" />}
                >
                  Transactions
                </MenuItem>
                <MenuItem
                  icon={<Img src="images/img_user_interface.svg" alt="userinterface" className="h-[30px] w-[30px]" />}
                >
                  Settings
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      src="images/img_user_interface_blue_gray_100_01.svg"
                      alt="userinterface"
                      className="h-[30px] w-[30px]"
                    />
                  }
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Sidebar>
          <div className="flex flex-col md:self-stretch gap-6 flex-1">
            <Header className="flex md:flex-col justify-between items-center gap-5" />
            <div>
              <div className="flex justify-between items-start gap-5 p-9 sm:p-5 bg-white-A700 shadow-xs rounded-[20px]">
                <Heading size="5xl" as="h1" className="mb-[832px] !text-black-900">
                  Track Shipment
                </Heading>
                <Button
                  color="white_A700"
                  size="xs"
                  className="font-semibold border-lime-800 border border-solid min-w-[138px] rounded-lg"
                >
                  &lt; March &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
