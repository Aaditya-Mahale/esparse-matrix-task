import React from 'react';

const JustFor = () => {
  const images = [
    require('./images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png'),
    require('./images/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png'),
    require('./images/Frame 608 (1).png'),
    require('./images/gammaxx-l240-argb-1-500x500 1.png'),
  ];

  const descriptions = [
    "Gucci Duffle Bag\n\n $650",
    "RGB liquid CPU Cooler\n\n$1190",
    "GP11 Shooter USB Gamepad\n\n550",
    "Quilted Satin Jacket\n\n750",
  ];

  return (
    <div className="wishpro-container" style={{ width: '100%', height: '100%' }}>
      <div className="wishpro-row" style={{ display: 'none', gap: '30px' }}>
        {images.map((image, index) => (
          <JustForItem key={index} image={image} description={descriptions[index]} index={index} />
        ))}
      </div>
    </div>
  );
};

const JustForItem = ({ image, description, index }) => {
  const descriptionLines = description.split('\n');
  const priceIndex = descriptionLines.findIndex(line => line.trim() === '$650' || line.trim() === '$1190' || line.trim() === '$550' || line.trim() === '$750');
  const productDescription = descriptionLines[0].trim();
  const price = descriptionLines[priceIndex];

  return (
    <div className="wishpro-item" style={{ background: '#F5F5F5', width: '270px', height: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <img src={image} alt="Product" style={{ width: '178px', height: '129px', top: '26px', left: '6px', alignSelf: 'center' }} />
      <button className="add-to-cart-button" style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: 'black', color: '#fff', fontSize: '14px', cursor: 'pointer' }}>Add to Cart</button>
      <p className="product-description" style={{ fontSize: '14px', lineHeight: '1.5', margin: 0, width: '203px', height: '20px', overflow: 'hidden' }}>
        {productDescription}
      </p>
      <p className="product-price" style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
        {price}
      </p>
    </div>
  );
};

export default JustFor;