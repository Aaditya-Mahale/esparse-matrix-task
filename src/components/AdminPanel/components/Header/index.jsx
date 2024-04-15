import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input, Heading } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <Heading size="6xl" as="h1" className="!text-blue_gray-700">
        Overview
      </Heading>
      <div className="flex md:flex-col justify-between items-start w-[67%] md:w-full gap-5">
        <Input
          shape="round"
          name="search"
          placeholder={`Search...`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e)}
          prefix={<Img src="images/img_search.svg" alt="search" className="cursor-pointer" />}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG onClick={() => setSearchBarValue("")} height={24} width={24} fillColor="#7b7777ff" />
            ) : null
          }
          className="w-[64%] md:w-full mt-[3px] gap-[5px] sm:px-5 text-gray-600_01"
        />
        <div className="flex justify-center items-start w-[21%] md:w-full">
          <Img src="images/img_user_interface_gray_600_01.svg" alt="userinterface" className="h-[24px] w-[24px] mb-4" />
          <Img src="images/img_group_2_gray_600_01.svg" alt="image" className="h-[22px] mt-2 ml-[33px]" />
          <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[65px] w-[65px] ml-[47px] rounded-[50%]" />
        </div>
      </div>
    </header>
  );
}
