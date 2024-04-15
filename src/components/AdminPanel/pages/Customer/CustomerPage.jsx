import React from "react";
import { Helmet } from "react-helmet";
import { Text, SelectBox, Img, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CustomerPage() {
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
              <div className="h-[1491px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Img src="images/img_group_1000005941.svg" alt="image_one" className="h-[1491px]" />
                <div className="flex flex-col items-start w-[97%] gap-[68px] top-[6%] right-0 left-0 m-auto sm:gap-[34px] absolute">
                  <Heading
                    size="3xl"
                    as="h1"
                    className="flex justify-center items-center h-[45px] ml-[195px] pl-[23px] pr-[34px] py-[3px] md:ml-0 sm:px-5 !text-black-900 border-gray-600 border border-solid bg-blue_gray-100 rounded-[5px]"
                  >
                    150
                  </Heading>
                  <div className="self-stretch p-[9px] border-black-900_3f border border-solid bg-white-A700 rounded-[5px]">
                    <div className="flex flex-col items-start mt-[58px] mb-[604px]">
                      <Text size="3xl" as="p" className="ml-[7px] md:ml-0">
                        Sr No Customer Id Customer Name Mobile No Email Id Status Actions{" "}
                      </Text>
                      <div className="flex md:flex-col self-stretch justify-between items-start mt-[33px] ml-[7px] gap-5 md:ml-0">
                        <Text size="3xl" as="p" className="mt-2">
                          01 CI123 Vishal Rajput 8459694413 vishal@gmail.com Active{" "}
                        </Text>
                        <SelectBox
                          shape="round"
                          indicator={<Img src="images/img_vector_black_900.svg" alt="Vector" />}
                          name="edit"
                          placeholder={`Edit `}
                          options={dropDownOptions}
                          className="w-[14%] md:w-full gap-px sm:px-5 font-medium border-black-900 border border-solid"
                        />
                      </div>
                      <Text size="3xl" as="p" className="mt-[57px]">
                        01 CI123 Vishal Rajput 8459694413 vishal@gmail.com Active{" "}
                      </Text>
                      <Text size="3xl" as="p" className="mt-[55px]">
                        01 CI123 Vishal Rajput 8459694413 vishal@gmail.com Active{" "}
                      </Text>
                      <Text size="3xl" as="p" className="mt-[57px]">
                        01 CI123 Vishal Rajput 8459694413 vishal@gmail.com Active{" "}
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
