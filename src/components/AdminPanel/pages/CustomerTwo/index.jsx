import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Input, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";

export default function CustomerTwoPage() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[26px] sm:pb-5 bg-yellow-900_9e shadow-xs">
        <div className="flex md:flex-col items-start mb-[26px] gap-[47px]">
          <Sidebar1 className="flex flex-col w-[317px] h-screen gap-[108px] top-0 py-[55px] md:gap-[81px] md:p-5 md:py-5 sm:gap-[54px] bg-white-A700 !sticky overflow-auto md:hidden" />
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
                <div className="flex w-[97%] h-max pl-[58px] pr-14 left-0 bottom-0 right-0 top-0 py-[58px] m-auto md:p-5 bg-white-A700 absolute rounded-[5px]">
                  <div className="flex flex-col items-start w-[86%] md:w-full mt-3 mb-[446px] gap-[25px]">
                    <Text size="3xl" as="p">
                      Sr No Category status Actions{" "}
                    </Text>
                    <div className="flex flex-col self-stretch items-start ml-[21px] gap-[133px] md:gap-[99px] md:ml-0 sm:gap-[66px]">
                      <div className="flex flex-col self-stretch gap-4">
                        <div className="flex md:flex-col justify-between items-center gap-5 flex-1">
                          <Text size="3xl" as="p" className="self-end mb-[7px]">
                            01 Repairs Active{" "}
                          </Text>
                          <div className="flex justify-end items-center w-[18%] md:w-full p-[5px] border-black-900 border border-solid bg-white-A700 rounded">
                            <Text size="3xl" as="p" className="self-start mt-1">
                              Edit{" "}
                            </Text>
                            <div className="h-[39px] w-px ml-[35px] bg-black-900" />
                            <Img
                              src="images/img_vector_black_900.svg"
                              alt="edit_two"
                              className="h-[19px] ml-[5px] mr-2.5"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-between items-center ml-1 gap-5 md:ml-0 flex-1">
                          <Text size="3xl" as="p">
                            01 Ad Active{" "}
                          </Text>
                          <div className="flex justify-end items-center w-[18%] md:w-full p-[5px] border-black-900 border border-solid bg-white-A700 rounded">
                            <Text size="3xl" as="p" className="self-start mt-1">
                              Edit{" "}
                            </Text>
                            <div className="h-[39px] w-px ml-[35px] bg-black-900" />
                            <Img
                              src="images/img_vector_black_900.svg"
                              alt="vector_one"
                              className="h-[19px] ml-[5px] mr-2.5"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-between items-center ml-2.5 gap-5 md:ml-0 flex-1">
                          <Text size="3xl" as="p" className="self-end mb-[7px]">
                            01 Repairs Active{" "}
                          </Text>
                          <div className="flex justify-end items-center w-[18%] md:w-full p-[5px] border-black-900 border border-solid bg-white-A700 rounded">
                            <Text size="3xl" as="p" className="self-start mt-1">
                              Edit{" "}
                            </Text>
                            <div className="h-[39px] w-px ml-[35px] bg-black-900" />
                            <Img
                              src="images/img_vector_black_900.svg"
                              alt="vector_one"
                              className="h-[19px] ml-[5px] mr-2.5"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col justify-between items-center ml-2.5 gap-5 md:ml-0 flex-1">
                          <Text size="3xl" as="p" className="self-end mb-2">
                            01 Repairs Add Active{" "}
                          </Text>
                          <div className="flex justify-end items-center w-[18%] md:w-full p-[5px] border-black-900 border border-solid bg-white-A700 rounded">
                            <Text size="3xl" as="p" className="self-start mt-1">
                              Edit{" "}
                            </Text>
                            <div className="h-[39px] w-px ml-[35px] bg-black-900" />
                            <Img
                              src="images/img_vector_black_900.svg"
                              alt="vector_one"
                              className="h-[19px] ml-[5px] mr-2.5"
                            />
                          </div>
                        </div>
                      </div>
                      <Text size="3xl" as="p" className="ml-[451px] md:ml-0">
                        A
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end w-[96%] top-[7%] right-0 left-0 m-auto absolute">
                  <div className="flex mr-[7px] p-[11px] md:mr-0 border-white-A700 border border-solid bg-blue_gray-100 shadow-xs rounded-[5px]">
                    <Heading size="3xl" as="h1" className="mt-[5px] ml-[3px] md:ml-0 !text-black-900">
                      Add Category
                    </Heading>
                  </div>
                  <div className="flex self-stretch justify-end mt-[-66px] p-5 relative border-gray-500 border border-solid bg-white-A700 rounded-[10px]">
                    <div className="flex flex-col items-start w-[94%] md:w-full mb-[143px] mr-[11px] md:mr-0">
                      <div className="flex self-stretch justify-between items-start ml-[404px] gap-5 md:ml-0">
                        <Heading size="5xl" as="h2" className="!text-black-900">
                          ADD CATEGORY
                        </Heading>
                        <Button
                          color="deep_orange_600"
                          size="lg"
                          className="mb-5 sm:px-5 font-semibold border-deep_orange-600 border border-solid min-w-[212px] rounded-[10px]"
                        >
                          View{" "}
                        </Button>
                      </div>
                      <div className="flex sm:flex-col items-center w-[48%] md:w-full mt-[82px] gap-[7px]">
                        <Text size="3xl" as="p" className="self-end mb-[5px]">
                          CATEGORY:
                        </Text>
                        <Input
                          size="xs"
                          name="add_category"
                          placeholder={`Add Category Here `}
                          className="sm:px-5 text-black-900 border-gray-500 border border-solid shadow-xs flex-grow rounded-[5px]"
                        />
                      </div>
                      <div className="flex sm:flex-col items-start w-[46%] md:w-full mt-11 ml-10 gap-[18px] md:ml-0">
                        <Text size="3xl" as="p" className="mt-[9px]">
                          Status:
                        </Text>
                        <div className="sm:self-stretch h-[52px] sm:w-full flex-1 relative sm:flex-none">
                          <div className="flex w-full top-[1.00px] right-0 left-0 p-[9px] m-auto border-gray-500 border border-solid bg-white-A700 shadow-xs absolute rounded-[5px]">
                            <Text size="2xl" as="p" className="self-start ml-[113px] md:ml-0">
                              Select Status
                            </Text>
                          </div>
                          <Img
                            src="images/img_keyboard_arrow_down.svg"
                            alt="keyboardarrow"
                            className="h-[52px] right-[8.00px] bottom-0 top-0 my-auto absolute"
                          />
                        </div>
                      </div>
                      <Button
                        color="yellow_900_01"
                        shape="round"
                        className="mt-[71px] ml-[318px] md:ml-0 sm:px-5 border-blue_gray-100_01 border border-solid min-w-[392px]"
                      >
                        ADD{" "}
                      </Button>
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
