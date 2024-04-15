import React from "react";
import { Helmet } from "react-helmet";
import { SelectBox, Img, Text, Button } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SubcaregoryPage() {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[26px] sm:pb-5 bg-yellow-900_aa shadow-xs">
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
                <div className="flex flex-col items-end w-[97%] gap-[26px] top-[7%] right-0 left-0 m-auto absolute">
                  <Button
                    shape="round"
                    className="sm:pr-5 font-semibold border-white-A700 border border-solid min-w-[235px]"
                  >
                    Add Category
                  </Button>
                  <div className="flex flex-col self-stretch items-start pl-[58px] pr-14 gap-[25px] py-[58px] md:p-5 border-black-900_3f border border-solid bg-white-A700 rounded-[5px]">
                    <Text size="3xl" as="p" className="mt-3">
                      Sr No Category status Actions{" "}
                    </Text>
                    <div className="w-[86%] md:w-full mb-[609px] ml-[21px] md:ml-0">
                      <div className="flex md:flex-col justify-between items-center gap-5">
                        <Text size="3xl" as="p" className="self-end mb-[7px]">
                          01 Repairs Active{" "}
                        </Text>
                        <SelectBox
                          shape="round"
                          indicator={<Img src="images/img_vector_black_900.svg" alt="Vector" />}
                          name="edit"
                          placeholder={`Edit `}
                          options={dropDownOptions}
                          className="w-[18%] md:w-full gap-px sm:px-5 font-medium border-black-900 border border-solid"
                        />
                      </div>
                      <div className="flex md:flex-col justify-between items-center mt-4 gap-5">
                        <Text size="3xl" as="p" className="self-end mb-[7px]">
                          01 Repairs Active{" "}
                        </Text>
                        <SelectBox
                          shape="round"
                          indicator={<Img src="images/img_vector_black_900.svg" alt="Vector" />}
                          name="edit_one"
                          placeholder={`Edit `}
                          options={dropDownOptions}
                          className="w-[18%] md:w-full gap-px sm:px-5 font-medium border-black-900 border border-solid"
                        />
                      </div>
                      <div className="flex md:flex-col justify-between items-center mt-4 gap-5">
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
                            alt="vector_three"
                            className="h-[19px] ml-[5px] mr-2.5"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col justify-between items-center mt-[26px] gap-5">
                        <Text size="3xl" as="p" className="self-end mb-[7px]">
                          01 Repairs Active{" "}
                        </Text>
                        <SelectBox
                          shape="round"
                          indicator={<Img src="images/img_vector_black_900.svg" alt="Vector" />}
                          name="edit_three"
                          placeholder={`Edit `}
                          options={dropDownOptions}
                          className="w-[18%] md:w-full gap-px sm:px-5 font-medium border-black-900 border border-solid"
                        />
                      </div>
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
