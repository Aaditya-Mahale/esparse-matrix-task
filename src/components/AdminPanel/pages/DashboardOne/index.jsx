import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, SelectBox } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardOnePage() {
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
      <div className="w-full bg-yellow-900_9e shadow-xs">
        <div className="flex md:flex-col items-start gap-[47px]">
          <Sidebar
            width="317px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            className="flex flex-col h-screen top-0 p-[9px] md:p-5 bg-white-A700 !sticky overflow-auto md:hidden"
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
                    [`&:hover, &.ps-active`]: { color: "#ffc42a" },
                  },
                }}
                rootStyles={{ ["&>ul"]: { gap: "1.00px" } }}
                className="flex flex-col items-center pl-1"
              >
                <MenuItem
                  icon={
                    <Img src="images/img_monochrome_layer.svg" alt="monochrome_one" className="h-[30px] w-[30px]" />
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
          <div className="flex flex-col md:self-stretch gap-6 md:p-5 flex-1">
            <Header className="flex md:flex-col justify-between items-center gap-5" />
            <div>
              <div className="flex flex-col gap-5">
                <div className="flex md:flex-col justify-center gap-[18px]">
                  <div className="md:self-stretch p-[35px] sm:p-5 bg-white-A700 shadow-xs flex-1 rounded-[20px]">
                    <div className="flex flex-col mb-6 gap-[9px]">
                      <div className="flex justify-between items-start gap-5">
                        <Heading size="5xl" as="h1" className="mb-[5px] !text-black-900">
                          NO .Of Enquiry
                        </Heading>
                        <SelectBox
                          color="orange_50"
                          size="xs"
                          indicator={<Img src="images/img_polygon_1.svg" alt="Polygon 1" />}
                          name="thisyear"
                          placeholder={`THIS YEAR`}
                          options={dropDownOptions}
                          className="w-[11%] gap-px sm:pr-5 font-medium rounded-[7px]"
                        />
                      </div>
                      <div>
                        <div className="flex flex-col items-start">
                          <Text size="4xl" as="p" className="ml-[58px] md:ml-0">
                            150
                          </Text>
                          <div className="flex md:flex-col self-stretch items-end ml-[5px] md:ml-0">
                            <div className="h-[162px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[179px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[215px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[259px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[290px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[153px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[195px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[280px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[343px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[200px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[257px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[154px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[195px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[130px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[162px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[178px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[215px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[101px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[140px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[69px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[101px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                            <div className="h-[46px] w-[25px] ml-[25px] md:ml-0 rounded-tr-[12px] rounded-tl-[12px] bg-gray-200" />
                            <div className="h-[80px] w-[25px] rounded-tr-[12px] rounded-tl-[12px] bg-yellow-700" />
                          </div>
                          <div className="flex md:flex-col mt-[18px] gap-[42px]">
                            <Text size="2xl" as="p" className="self-start !text-gray-500 !font-medium">
                              Jan
                            </Text>
                            <Text size="2xl" as="p" className="self-start !text-gray-500 !font-medium">
                              Feb
                            </Text>
                            <div className="flex self-start">
                              <div className="flex flex-col">
                                <Text size="2xl" as="p" className="!text-gray-500 !font-medium">
                                  Mar
                                </Text>
                                <Text size="2xl" as="p" className="mt-[-24px] !text-gray-500 !font-medium relative">
                                  Mar
                                </Text>
                              </div>
                            </div>
                            <Text size="2xl" as="p" className="self-end !text-gray-500 !font-medium">
                              Apr
                            </Text>
                            <Text size="2xl" as="p" className="self-end !text-gray-500 !font-medium">
                              May
                            </Text>
                            <Text size="2xl" as="p" className="self-start !text-gray-500 !font-medium">
                              Jun
                            </Text>
                            <Text size="2xl" as="p" className="self-start !text-gray-500 !font-medium">
                              Jul
                            </Text>
                            <Text size="2xl" as="p" className="self-end !text-gray-500 !font-medium">
                              Aug
                            </Text>
                            <Text size="2xl" as="p" className="self-end !text-gray-500 !font-medium">
                              Sep
                            </Text>
                            <Text size="2xl" as="p" className="self-start !text-gray-500 !font-medium">
                              Oct
                            </Text>
                            <Text size="2xl" as="p" className="self-start !text-gray-500 !font-medium">
                              Nov
                            </Text>
                            <Text size="2xl" as="p" className="self-start !text-gray-500 !font-medium">
                              Dec
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[28%] md:w-full p-5 bg-white-A700 shadow-xs rounded-[30px]">
                    <div className="flex flex-col items-start mt-[13px] mb-[65px]">
                      <div className="flex self-stretch justify-between items-center ml-2.5 gap-5 md:ml-0">
                        <Heading size="2xl" as="h2" className="!text-blue_gray-700">
                          Customers
                        </Heading>
                        <Img src="images/img_group_9.svg" alt="image_one" className="self-end h-[18px] w-[18px] mb-1" />
                      </div>
                      <Heading size="md" as="h3" className="ml-2.5 md:ml-0 !text-gray-500">
                        Information About your Customers
                      </Heading>
                      <div className="self-stretch mt-[27px]">
                        <div className="flex flex-col items-center">
                          <div className="flex self-stretch justify-between gap-[52px]">
                            <div className="h-[130px] w-[130px] md:h-auto relative">
                              <Heading
                                size="5xl"
                                as="h4"
                                className="mr-[30px] md:mr-0 !text-deep_purple-500 !font-bold"
                              >
                                120
                              </Heading>
                              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto border-gray-300 border-[10px] border-solid absolute rounded-[65px]">
                                <div className="h-[129px] w-[129px] border-deep_purple-500 border-[15px] border-solid rounded-[64px]" />
                              </div>
                            </div>
                            <div className="h-[130px] w-[130px] md:h-auto relative">
                              <Heading size="5xl" as="h5" className="!text-yellow-700 !font-bold">
                                150
                              </Heading>
                              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto border-gray-300 border-[10px] border-solid absolute rounded-[65px]">
                                <div className="h-[129px] w-[129px] border-yellow-700 border-[15px] border-solid rounded-[64px]" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-start w-[86%] md:w-full mt-3.5 gap-5 flex-wrap">
                            <Text as="p" className="mb-[5px] !text-red-500">
                              New Seller Register{" "}
                            </Text>
                            <Heading size="md" as="h6" className="!text-red-500">
                              No. of Enquiry
                            </Heading>
                          </div>
                          <div className="flex self-stretch justify-between mt-[49px] gap-[52px]">
                            <div className="h-[130px] w-[130px] md:h-auto relative">
                              <Heading size="5xl" as="h1" className="mb-[39px] !text-yellow-900_01 !font-bold">
                                150
                              </Heading>
                              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto border-gray-300 border-[10px] border-solid absolute rounded-[65px]">
                                <div className="h-[129px] w-[129px] border-yellow-900_01 border-[15px] border-solid rounded-[64px]" />
                              </div>
                            </div>
                            <div className="h-[130px] w-[130px] md:h-auto relative">
                              <Heading size="5xl" as="h1" className="h-[43px] mb-[39px] !text-red-300 !font-bold">
                                50
                              </Heading>
                              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto border-gray-300 border-[10px] border-solid absolute rounded-[65px]">
                                <div className="h-[129px] w-[129px] border-red-300 border-[15px] border-solid rounded-[64px]" />
                              </div>
                            </div>
                          </div>
                          <div className="flex self-stretch justify-between mt-[19px] gap-5 flex-wrap">
                            <Heading size="md" as="p" className="!text-deep_orange-600">
                              No.Of Products Added
                            </Heading>
                            <Heading size="md" as="p" className="!text-deep_orange-600">
                              No.Of Services Added{" "}
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-center items-center gap-5">
                  <div className="flex flex-col items-center md:self-stretch mb-[3px] gap-5 p-[21px] sm:p-5 bg-white-A700 shadow-xs flex-1 rounded-[25px]">
                    <div className="flex md:flex-row sm:flex-col w-[87%] md:w-full mt-2 gap-px">
                      <div className="flex p-[13px] bg-gray-200_01 rounded-[10px]">
                        <div className="flex items-start gap-[9px] my-[11px]">
                          <Img src="images/img_group_6.svg" alt="total_visits" className="h-[25px] w-[25px]" />
                          <div className="flex flex-col items-start">
                            <Heading size="s" as="p" className="!text-gray-600_01">
                              Total Visits
                            </Heading>
                            <Text size="s" as="p" className="!text-gray-600">
                              10.8m
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img src="images/img_group_6.svg" alt="group" className="h-[18px] sm:w-full mt-[29px] sm:mt-0" />
                      <Text size="xs" as="p" className="mt-[25px] sm:mt-0 !text-gray-600_01">
                        Total Visits
                      </Text>
                      <Text size="xs" as="p" className="mb-[30px] sm:mb-0 !text-gray-600">
                        10.8m
                      </Text>
                      <div className="flex p-[13px] bg-gray-200_01 rounded-[10px]">
                        <div className="flex items-start gap-[9px] my-2.5">
                          <Img
                            src="images/img_vector_deep_purple_500.svg"
                            alt="vector_one"
                            className="h-[25px] w-[25px]"
                          />
                          <div className="flex flex-col items-start">
                            <Heading size="s" as="p" className="!text-gray-600_01">
                              Total Sales
                            </Heading>
                            <Text size="s" as="p" className="!text-gray-600">
                              100,345
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-3 bg-gray-200_01 rounded-[10px]">
                        <div className="flex items-start gap-[9px] my-3">
                          <Img src="images/img_group_7.svg" alt="image" className="h-[25px] w-[25px]" />
                          <div className="flex flex-col items-start">
                            <Heading size="s" as="p" className="!text-gray-600_01">
                              Total Made
                            </Heading>
                            <Text size="s" as="p" className="!text-gray-600">
                              $200k
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-2 bg-gray-200_01 rounded-[10px]">
                        <div className="flex items-start gap-2 my-[17px]">
                          <Img src="images/img_group_8.svg" alt="image" className="h-[22px] w-[22px]" />
                          <div className="flex flex-col items-start">
                            <Heading size="xs" as="p" className="!text-gray-600_01">
                              Orders Completed
                            </Heading>
                            <Text size="s" as="p" className="!text-gray-600">
                              98,771
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text size="3xl" as="p" className="self-start !text-blue_gray-700">
                      Top Products
                    </Text>
                    <div className="flex flex-col w-[94%] md:w-full gap-2">
                      <div className="flex p-3 bg-gray-200_01 flex-1 rounded-[10px]">
                        <div className="flex md:flex-col justify-between items-center w-full ml-1.5 gap-5 md:ml-0">
                          <div className="flex items-center gap-2.5">
                            <Img src="images/img_image_1.png" alt="samsung_s20_128" className="object-cover" />
                            <div className="flex flex-col items-start">
                              <Text size="lg" as="p" className="!text-gray-600">
                                Samsung S20 128 GB
                              </Text>
                              <Text as="p" className="!text-gray-600">
                                Pink - 50 orders
                              </Text>
                            </div>
                          </div>
                          <div className="w-[57%] md:w-full">
                            <div className="flex justify-between mr-3.5 gap-5 md:mr-0 z-[1] flex-wrap">
                              <Text size="xl" as="p" className="self-end !text-gray-600">
                                Inventory
                              </Text>
                              <Text size="xl" as="p" className="self-start !text-gray-600">
                                Sale
                              </Text>
                              <Text size="xl" as="p" className="self-start !text-gray-600">
                                Price
                              </Text>
                              <Text size="xl" as="p" className="!text-gray-600">
                                Today
                              </Text>
                            </div>
                            <div className="flex justify-between gap-5">
                              <Text as="p">700</Text>
                              <div className="flex self-start justify-between w-[43%] gap-5 flex-wrap">
                                <Text as="p">$1,000.60</Text>
                                <Text as="p">$1,300.92</Text>
                              </div>
                              <Text as="p" className="self-start">
                                $17,000.92
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-2 bg-gray-200_01 flex-1 rounded-[10px]">
                        <div className="flex md:flex-col items-center w-full ml-2.5 gap-2.5 md:ml-0">
                          <Img
                            src="images/img_image_2.png"
                            alt="imagetwo_one"
                            className="w-[6%] md:w-full object-cover"
                          />
                          <div className="md:self-stretch flex-1">
                            <div className="flex sm:flex-col justify-between items-start gap-5 z-[1]">
                              <Text size="lg" as="p" className="mt-0.5 !text-gray-600">
                                Samsung S21 256 GB
                              </Text>
                              <div className="flex justify-between w-[60%] sm:w-full gap-5 flex-wrap">
                                <Text size="xl" as="p" className="self-end !text-gray-600">
                                  Inventory
                                </Text>
                                <Text size="xl" as="p" className="self-start !text-gray-600">
                                  Sale
                                </Text>
                                <Text size="xl" as="p" className="self-start !text-gray-600">
                                  Price
                                </Text>
                                <Text size="xl" as="p" className="self-end !text-gray-600">
                                  Today
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col justify-between mt-[-1px] gap-5 relative">
                              <Text as="p" className="self-start !text-gray-600">
                                Black - 25 orders
                              </Text>
                              <div className="flex self-end justify-between w-[58%] sm:w-full gap-5">
                                <Text as="p">200</Text>
                                <div className="flex justify-between w-[43%] gap-5 flex-wrap">
                                  <Text as="p">$1,200.60</Text>
                                  <Text as="p">$1,500.92</Text>
                                </div>
                                <Text as="p">$12,000.82</Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-[28%] md:w-full p-[26px] sm:p-5 bg-white-A700 shadow-xs rounded-[25px]">
                    <div className="flex flex-col items-start w-full mt-[3px] mb-[26px]">
                      <div className="flex self-stretch justify-between items-center gap-5">
                        <Heading size="2xl" as="h3" className="!text-blue_gray-700">
                          Stats Overview
                        </Heading>
                        <Img
                          src="images/img_group_9.svg"
                          alt="image_two"
                          className="self-end h-[18px] w-[18px] mb-[7px]"
                        />
                      </div>
                      <Heading size="md" as="p" className="!text-gray-500">
                        Information about store visits
                      </Heading>
                      <Heading size="md" as="p" className="mt-[33px] !text-blue_gray-700">
                        Women
                      </Heading>
                      <div className="self-stretch h-[8px] mt-[7px] bg-gray-200_01 relative rounded">
                        <div style={{ width: "59%" }} className="h-full bg-yellow-700 absolute rounded" />
                      </div>
                      <Heading size="md" as="p" className="self-end mt-0.5 !text-blue_gray-700">
                        63%
                      </Heading>
                      <Heading size="md" as="p" className="mt-2 !text-blue_gray-700">
                        Men
                      </Heading>
                      <div className="self-stretch h-[8px] mt-[7px] bg-gray-200_01 relative rounded">
                        <div style={{ width: "89%" }} className="h-full bg-red-300 absolute rounded" />
                      </div>
                      <Heading size="md" as="p" className="self-end mt-0.5 !text-blue_gray-700">
                        88%
                      </Heading>
                      <Heading size="md" as="p" className="mt-[7px] !text-blue_gray-700">
                        Kids
                      </Heading>
                      <div className="self-stretch h-[8px] mt-[7px] bg-gray-200_01 relative rounded">
                        <div style={{ width: "33%" }} className="h-full bg-deep_purple-500 absolute rounded" />
                      </div>
                      <Heading size="md" as="p" className="self-end mt-0.5 !text-blue_gray-700">
                        38%
                      </Heading>
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
