import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          Şenay Akagündüz shows that sometimes simple is best when building a
          layout for your portfolio. It can be easy — especially as creatives —
          to get carried away, create too much on your site, and end up with a
          messy and confusing layout. Mariela keeps it streamlined by having an
          easy-to-use navigation bar, a clear and concise “about” page and a
          well curated portfolio of work. Everything is focused on what she can
          offer to the client and what skills she brings to the table.
        </p>
      </div>
      <div className="pl-list">
        {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
        {products.map((item) => {
          const { id, img, link } = item;
          return <Product key={id} img={img} link={link} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
