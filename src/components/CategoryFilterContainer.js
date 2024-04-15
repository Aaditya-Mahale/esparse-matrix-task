import BrowseByCategoryContainer from "./BrowseByCategoryContainer";
import CategoryPhoneGamingHoverN from "./CategoryPhoneGamingHoverN";
import CategoryPhoneSmartWatchHov from "./CategoryPhoneSmartWatchHov";
import "./CategoryFilterContainer.css";

const CategoryFilterContainer = () => {
  return (
    <div className="frame-parent27">
      <BrowseByCategoryContainer
        sectionTitle="Categories"
        sectionSubtitle="Browse By Category"
        propGap="691px"
      />
      <div className="category-phone-parent">
        <CategoryPhoneGamingHoverN
          gaming="Phones"
          categoryGamepad=".categorycellphone.svg"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNBorder="1px solid var(--color-gray-300)"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 30px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneGamingHoverN
          gaming="Computers"
          categoryGamepad="/categorycomputer.svg"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNBorder="1px solid var(--color-gray-300)"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 45px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 27px)"
        />
        <CategoryPhoneSmartWatchHov categoryPhoneSmartWatchHoPosition="relative" />
        <CategoryPhoneGamingHoverN
          gaming="Camera"
          categoryGamepad="/categorycamera.svg"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNBorder="unset"
          categoryPhoneGamingHoverNBackgroundColor="#db4444"
          categoryPhoneGamingHoverNBoxShadow="0px 1px 13px rgba(0, 0, 0, 0.05)"
          gamingLeft="calc(50% - 34px)"
          gamingColor="#fafafa"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneGamingHoverN
          gaming="HeadPhones"
          categoryGamepad="/categoryheadphone.svg"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNBorder="1px solid var(--color-gray-300)"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 51px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
        <CategoryPhoneGamingHoverN
          gaming="Gaming"
          categoryGamepad="/categorygamepad.svg"
          categoryPhoneGamingHoverNPosition="relative"
          categoryPhoneGamingHoverNBorder="1px solid var(--color-gray-300)"
          categoryPhoneGamingHoverNBackgroundColor="unset"
          categoryPhoneGamingHoverNBoxShadow="unset"
          gamingLeft="calc(50% - 32px)"
          gamingColor="#000"
          categoryGamepadIconLeft="calc(50% - 28px)"
        />
      </div>
    </div>
  );
};

export default CategoryFilterContainer;
