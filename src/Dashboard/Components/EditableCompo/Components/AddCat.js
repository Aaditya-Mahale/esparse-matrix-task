import React, { useState } from 'react';
import "./AddCat.css"
const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [price, setPrice] = useState('');
  const [productSubCategory, setProductSubCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [stockAvailability, setStockAvailability] = useState('');
  const [productImages, setProductImages] = useState([]);

  const handleImageChange = (e) => {
    setProductImages(e.target.files.length > 0 ? [...productImages, e.target.files[0]] : []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <select value={productCategory} onChange={(e) => setProductCategory(e.target.value)}>
        <option value="">Select Product Category</option>
        {/* Add your product categories here */}
      </select>
      <input
        type="number"
        placeholder="Price (INR)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select value={productSubCategory} onChange={(e) => setProductSubCategory(e.target.value)}>
        <option value="">Select Product Subcategory</option>
        {/* Add your product subcategories here */}
      </select>
      <textarea
        placeholder="Product Description (Optional)"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />
      <select value={stockAvailability} onChange={(e) => setStockAvailability(e.target.value)}>
        <option value="">Select Product Stock Availability</option>
        {/* Add your stock availability options here */}
      </select>
      <input type="file" onChange={handleImageChange} multiple />
      <button className='addtocatbutton' type="submit">Save Product Information</button>
    </form>
  );
};

export default ProductForm;