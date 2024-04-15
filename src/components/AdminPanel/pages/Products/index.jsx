import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, SelectBox, Input, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[26px] sm:pb-5 bg-yellow-900_aa shadow-xs">
        <div className="flex md:flex-col items-start mb-[26px] gap-[47px]">
          <Sidebar2 className="flex flex-col w-[317px] h-screen gap-[108px] top-0 p-[55px] md:gap-[81px] md:p-5 sm:gap-[54px] bg-white-A700 !sticky overflow-auto md:hidden" />
          <div className="flex flex-col md:self-stretch mt-[52px] gap-6 md:p-5 flex-1">
            <Header className="flex md:flex-col justify-between items-center gap-5" />
            <div className="h-[1491px] relative">
              <div className="flex flex-col items-end w-full gap-5 top-[0.00px] right-0 left-0 m-auto absolute">
                <div className="h-[585px] w-[28%] bg-white-A700 shadow-xs rounded-[30px]" />
                <div className="flex md:flex-col self-stretch justify-end items-center gap-5">
                  <div className="flex flex-col items-start md:self-stretch mb-[3px] gap-4 p-[21px] sm:p-5 bg-white-A700 shadow-xs flex-1 rounded-[25px]">
                    <Text size="3xl" as="p" className="mt-[111px] ml-[31px] md:ml-0 !text-blue_gray-700">
                      Top Products
                    </Text>
                    <div className="flex flex-col self-stretch ml-[31px] gap-2 md:ml-0">
                      <div className="flex p-3 bg-gray-200_01 flex-1 rounded-[10px]">
                        <div className="flex md:flex-col items-center w-full ml-1.5 gap-2.5 md:ml-0">
                          <Img src="images/img_image_1.png" alt="samsung_s20_128" className="md:w-full object-cover" />
                          <div className="md:self-stretch flex-1">
                            <div className="flex sm:flex-col justify-between items-center gap-5 z-[1]">
                              <Text size="lg" as="p" className="!text-gray-600">
                                Samsung S20 128 GB
                              </Text>
                              <div className="flex justify-between w-[61%] sm:w-full gap-5 flex-wrap">
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
                            </div>
                            <div className="flex sm:flex-col justify-between mt-[-1px] gap-5 relative">
                              <Text as="p" className="self-start !text-gray-600">
                                Pink - 50 orders
                              </Text>
                              <div className="flex justify-between w-[58%] sm:w-full gap-5">
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
                  <div className="h-[341px] w-[28%] bg-white-A700 shadow-xs rounded-[25px]" />
                </div>
              </div>
              <div className="h-[1491px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img
                  src="images/img_group_1000005941.svg"
                  alt="image_one"
                  className="h-[1491px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                />
                <Heading size="3xl" as="h1" className="w-max top-[6%] right-0 left-0 m-auto !text-black-900 absolute">
                  Add New Products
                </Heading>
                <div className="h-[583px] w-[97%] top-[12%] right-0 left-0 m-auto border-black-900_3f border border-solid bg-white-A700 absolute rounded-[5px]" />
                <div className="flex justify-end w-[97%] top-[12%] right-0 left-0 p-[17px] m-auto border-black-900_3f border border-solid bg-white-A700 absolute rounded-[5px]">
                  <div className="flex flex-col items-start w-full mt-[68px] mb-[15px] gap-[25px]">
                    <div className="flex flex-col self-stretch items-start gap-[7px]">
                      <div className="flex flex-col self-stretch items-start ml-[7px] md:ml-0">
                        <div className="self-stretch h-px bg-black-900_7f" />
                        <div className="flex flex-col self-stretch items-start mt-[45px] gap-[13px]">
                          <Text size="3xl" as="p">
                            Product Name:
                          </Text>
                          <div className="self-stretch h-[68px] border-black-900_3f border border-solid bg-white-A700 rounded-[5px]" />
                        </div>
                        <div className="flex justify-between w-[82%] md:w-full mt-[18px] gap-5 flex-wrap">
                          <Text size="3xl" as="p">
                            Product Category:
                          </Text>
                          <Text size="3xl" as="p" className="self-start">
                            Product Sub Category:
                          </Text>
                        </div>
                        <div className="flex md:flex-col self-stretch justify-between mt-[9px] ml-1 gap-5 md:ml-0">
                          <SelectBox
                            size="md"
                            name="selectproduct"
                            placeholder={`Select Product Category`}
                            options={dropDownOptions}
                            className="w-[40%] md:w-full sm:px-5 font-medium border-black-900_3f border border-solid rounded-[5px]"
                          />
                          <SelectBox
                            size="md"
                            name="selectproduct"
                            placeholder={`Select Product Subcategory`}
                            options={dropDownOptions}
                            className="w-[38%] md:w-full sm:px-5 font-medium border-black-900_3f border border-solid rounded-[5px]"
                          />
                        </div>
                        <div className="flex md:flex-col self-stretch justify-between items-start mt-[88px] ml-1 gap-5 md:ml-0">
                          <Input
                            size="md"
                            name="edittext"
                            className="w-[40%] md:w-full mb-2.5 sm:px-5 border-black-900_3f border border-solid rounded-[5px]"
                          />
                          <SelectBox
                            size="md"
                            name="selectproduct"
                            placeholder={`Select  Product Stock Availability `}
                            options={dropDownOptions}
                            className="w-[38%] md:w-full sm:px-5 font-medium border-black-900_3f border border-solid rounded-[5px]"
                          />
                        </div>
                        <Text size="3xl" as="p" className="mt-[23px] ml-2.5 md:ml-0">
                          Product Description (Optional)
                        </Text>
                        <div className="self-stretch h-[162px] mt-5 ml-[11px] md:ml-0 border-black-900_3f border border-solid bg-white-A700 rounded-[5px]" />
                      </div>
                      <Text size="3xl" as="p">
                        Product Images:
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[23%] md:w-full ml-[26px] gap-2 p-[23px] md:ml-0 sm:p-5 border-gray-400 border border-solid bg-gray-200_02 rounded-lg">
                      <Img
                        src="images/img_camera_alt.svg"
                        alt="cameraalt_one"
                        className="h-[96px] w-[96px] mt-1 ml-[52px] md:ml-0"
                      />
                      <Text size="xl" as="p" className="ml-[37px] md:ml-0 !text-gray-900 !font-nunito text-center">
                        Upload Photos
                      </Text>
                    </div>
                  </div>
                </div>
                <Button
                  color="orange_A200_01"
                  size="xl"
                  shape="round"
                  className="bottom-[8%] left-[23%] m-auto sm:px-5 font-medium min-w-[549px] absolute"
                >
                  Save{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
