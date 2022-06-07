import ProductForm from "../components/product/ProductForm";
import React from "react";
import axios from "axios";

const AddProduct = () => {
  const onSubmit = (values) => {
    axios.post("http://localhost:8000/products", values).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="card">
      <div className="card-header">افزودن محصول</div>
      <div className="card-body">
        <ProductForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddProduct;
