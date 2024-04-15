import BrowseByCategoryContainer from "./BrowseByCategoryContainer";
import ProductLaptopNoDiscount from "./ProductLaptopNoDiscount";
import ProductDslrCameraNoDiscoun from "./ProductDslrCameraNoDiscoun";
import FormWithAutocompleteAndRadios from "./FormWithAutocompleteAndRadios";
import ProductGamingControlColorC from "./ProductGamingControlColorC";
import ProductSoccerBoatColorChoo from "./ProductSoccerBoatColorChoo";
import ProductManJacketColorChoos from "./ProductManJacketColorChoos";
import ButtonPrimaryHoverNo from "./ButtonPrimaryHoverNo";
import "./ExploreOurProductsContainer.css";

const ExploreOurProductsContainer = () => {
  return (
    <div className="frame-parent31">
      <div className="frame-parent32">
        <BrowseByCategoryContainer
          sectionTitle="Our Products"
          sectionSubtitle="Explore Our Products"
          propGap="672px"
        />
        <div className="frame-parent33">
          <div className="cart-group">
            <ProductLaptopNoDiscount
              ideapadGaming3i01500x5001="/71rdoexxtrl-1@2x.png"
              aSUSFHDGamingLaptop="Breed Dry Dog Food"
              prop="$100"
              vector="/vector.svg"
              vector1="/vector.svg"
              prop1="(35)"
              ideapadGaming3i01500x5001Left="38px"
              ideapadGaming3i01500x5001Width="115px"
              vectorIconOpacity="0.25"
              vectorIconOpacity1="0.25"
              divWidth="32px"
            />
            <ProductDslrCameraNoDiscoun />
            <ProductLaptopNoDiscount
              ideapadGaming3i01500x5001="/ideapadgaming3i01500x500-1@2x.png"
              aSUSFHDGamingLaptop="ASUS FHD Gaming Laptop"
              prop="$700"
              vector="/vector.svg"
              vector1="/vector.svg"
              prop1="(325)"
              ideapadGaming3i01500x5001Left="9px"
              ideapadGaming3i01500x5001Width="172px"
              vectorIconOpacity="unset"
              vectorIconOpacity1="unset"
              divWidth="40px"
            />
            <FormWithAutocompleteAndRadios />
          </div>
          <div className="cart-group">
            <ProductGamingControlColorC
              gP11PRD31="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
              gP11ShooterUSBGamepad="Kids Electric Car"
              prop="$960"
              starHalfFilled="/vector.svg"
              prop1="(65)"
              group1000005935="/group-1000005935.svg"
              gP11PRD31IconTop="calc(50% - 66px)"
              gP11PRD31IconLeft="calc(50% - 90px)"
              gP11PRD31IconHeight="133px"
              starHalfFilledIconOverflow="unset"
              starHalfFilledIconBorderRadius="1.4px"
            />
            <ProductSoccerBoatColorChoo />
            <ProductGamingControlColorC
              gP11PRD31="/gp11-prd3-1@2x.png"
              gP11ShooterUSBGamepad="GP11 Shooter USB Gamepad"
              prop="$660"
              starHalfFilled="/starhalffilled.svg"
              prop1="(55)"
              group1000005935="/group-1000005935.svg"
              gP11PRD31IconTop="15px"
              gP11PRD31IconLeft="6px"
              gP11PRD31IconHeight="150px"
              starHalfFilledIconOverflow="hidden"
              starHalfFilledIconBorderRadius="unset"
            />
            <ProductManJacketColorChoos />
          </div>
        </div>
      </div>
      <ButtonPrimaryHoverNo
        viewAllProducts="View All Products"
        buttonPrimaryHoverNoPosition="unset"
        buttonPrimaryHoverNoTop="unset"
        buttonPrimaryHoverNoLeft="unset"
        buttonPrimaryHoverNoBackgroundColor="#db4444"
        buttonPrimaryHoverNoPadding="var(--padding-base) var(--padding-29xl)"
      />
    </div>
  );
};

export default ExploreOurProductsContainer;
