import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function OrdersPage() {
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
                <MenuItem
                  icon={
                    <Img src="images/img_vector_orange_a200_01.svg" alt="vector_one" className="h-[25px] w-[25px]" />
                  }
                >
                  Orders
                </MenuItem>
                <MenuItem
                  icon={
                    <Img src="images/img_transport_shipping.svg" alt="transport_one" className="h-[30px] w-[30px]" />
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
              <div className="pt-[34px] sm:pt-5 bg-white-A700 shadow-xs rounded-[20px]">
                <div className="flex flex-col items-center gap-[35px]">
                  <div className="flex justify-between w-[95%] md:w-full gap-5">
                    <Heading size="5xl" as="h1" className="self-start !text-black-900">
                      Orders
                    </Heading>
                    <Button
                      color="white_A700"
                      size="xs"
                      className="font-semibold border-lime-800 border border-solid min-w-[138px] rounded-lg"
                    >
                      &lt; March &gt;
                    </Button>
                  </div>
                  <div className="flex flex-col self-stretch gap-3">
                    <div className="flex flex-col items-start gap-4 p-6 sm:p-5 bg-white-A700 shadow-bs flex-1">
                      <Heading size="lg" as="h2" className="!text-black-900">
                        #Order ID******
                      </Heading>
                      <div className="flex flex-col items-start w-[85%] md:w-full gap-[21px]">
                        <Text size="2xl" as="p" className="!text-gray-500_01">
                          Wed,march 16,2024, 4:00 PM
                        </Text>
                        <div className="flex md:flex-col self-stretch justify-between items-start ml-[186px] gap-5 md:ml-0">
                          <div className="flex flex-col items-start w-[17%] md:w-full gap-[9px]">
                            <Text size="2xl" as="p">
                              Customer Details
                            </Text>
                            <Text size="2xl" as="p" className="w-[92%] md:w-full !text-gray-500_01">
                              <>
                                Janhvi Sharma
                                <br />
                                janhvis@2345
                                <br />
                                +91 123456789
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Text size="2xl" as="p">
                              Payment Method
                            </Text>
                            <Text size="2xl" as="p" className="!text-gray-500_01">
                              Cash on Delivery
                            </Text>
                          </div>
                          <div className="flex flex-col items-start gap-2">
                            <Text size="2xl" as="p">
                              Shipping Details
                            </Text>
                            <Text size="2xl" as="p" className="!text-gray-500_01">
                              Xyz Express
                            </Text>
                          </div>
                          <div className="flex flex-col items-start w-[29%] md:w-full gap-[9px]">
                            <Text size="2xl" as="p">
                              Deliver to
                            </Text>
                            <Text size="2xl" as="p" className="!text-gray-500_01">
                              <>
                                City: Pune
                                <br />
                                Street: Karve road
                                <br />
                                Address: lane no.1 xyz colony
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[19px] p-6 sm:p-5 bg-white-A700 shadow-bs flex-1">
                      <Heading size="lg" as="h3" className="!text-black-900">
                        #Order ID******
                      </Heading>
                      <Text size="2xl" as="p" className="!text-gray-500_01">
                        Wed,march 16,2024, 4:00 PM
                      </Text>
                      <div className="flex md:flex-col justify-between items-start w-[83%] md:w-full ml-[187px] gap-5 md:ml-0">
                        <div className="flex flex-col items-start w-[17%] md:w-full gap-[9px]">
                          <Text size="2xl" as="p">
                            Customer Details
                          </Text>
                          <Text size="2xl" as="p" className="w-[92%] md:w-full !text-gray-500_01">
                            <>
                              Janhvi Sharma
                              <br />
                              janhvis@2345
                              <br />
                              +91 123456789
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Text size="2xl" as="p">
                            Payment Method
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-500_01">
                            Cash on Delivery
                          </Text>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <Text size="2xl" as="p">
                            Shipping Details
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-500_01">
                            Xyz Express
                          </Text>
                        </div>
                        <div className="flex flex-col items-start w-[29%] md:w-full gap-[9px]">
                          <Text size="2xl" as="p">
                            Deliver to
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-500_01">
                            <>
                              City: Pune
                              <br />
                              Street: Karve road
                              <br />
                              Address: lane no.1 xyz colony
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[19px] p-6 sm:p-5 bg-white-A700 shadow-bs flex-1">
                      <Heading size="lg" as="h4" className="!text-black-900">
                        #Order ID******
                      </Heading>
                      <Text size="2xl" as="p" className="!text-gray-500_01">
                        Wed,march 16,2024, 4:00 PM
                      </Text>
                      <div className="flex md:flex-col justify-between items-start w-[83%] md:w-full ml-[187px] gap-5 md:ml-0">
                        <div className="flex flex-col items-start w-[17%] md:w-full gap-[9px]">
                          <Text size="2xl" as="p">
                            Customer Details
                          </Text>
                          <Text size="2xl" as="p" className="w-[92%] md:w-full !text-gray-500_01">
                            <>
                              Janhvi Sharma
                              <br />
                              janhvis@2345
                              <br />
                              +91 123456789
                            </>
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Text size="2xl" as="p">
                            Payment Method
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-500_01">
                            Cash on Delivery
                          </Text>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <Text size="2xl" as="p">
                            Shipping Details
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-500_01">
                            Xyz Express
                          </Text>
                        </div>
                        <div className="flex flex-col items-start w-[29%] md:w-full gap-[9px]">
                          <Text size="2xl" as="p">
                            Deliver to
                          </Text>
                          <Text size="2xl" as="p" className="!text-gray-500_01">
                            <>
                              City: Pune
                              <br />
                              Street: Karve road
                              <br />
                              Address: lane no.1 xyz colony
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start pt-6 px-6 sm:pt-5 sm:px-5 bg-white-A700 shadow-bs flex-1">
                      <Heading size="lg" as="h5" className="!text-black-900">
                        #Order ID******
                      </Heading>
                      <Text size="2xl" as="p" className="mt-3.5 !text-gray-500_01">
                        Wed,march 16,2024, 4:00 PM
                      </Text>
                      <Text size="2xl" as="p" className="mt-[30px] ml-[187px] md:ml-0">
                        Customer Details
                      </Text>
                      <Text size="2xl" as="p" className="mt-[30px] ml-[401px] md:ml-0">
                        Payment Method
                      </Text>
                      <Text size="2xl" as="p" className="self-end mt-[30px]">
                        Shipping Details
                      </Text>
                      <Text size="2xl" as="p" className="self-end mt-[30px]">
                        Deliver to
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="w-[13%] md:w-full mt-[62px] ml-[187px] md:ml-0 !text-gray-500_01"
                      >
                        <>
                          Janhvi Sharma
                          <br />
                          janhvis@2345
                          <br />
                          +91 123456789
                        </>
                      </Text>
                      <Text size="2xl" as="p" className="mt-[62px] ml-[401px] md:ml-0 !text-gray-500_01">
                        Cash on Delivery
                      </Text>
                      <Text size="2xl" as="p" className="self-end mt-[62px] !text-gray-500_01">
                        Xyz Express
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="w-[59%] md:w-full mt-[62px] ml-[817px] md:ml-0 !text-gray-500_01"
                      >
                        <>
                          City: Pune
                          <br />
                          Street: Karve road
                          <br />
                          Address: lane no.1 xyz colony
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
