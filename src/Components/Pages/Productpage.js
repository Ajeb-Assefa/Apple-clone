import React, { useEffect, useState, Component } from "react";
import Four04 from "../Pages/Four04/Four04";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Productpage() {
  const [product, setproduct] = useState([]);
  // console.log(useParams);
  const { pid } = useParams();
  // console.log(pid);
  let flip = true;
  useEffect(() => {
    fetch("http://localhost:3001/iphones")
      .then((res) => res.json())
      .then((data) => {
        const ProductList = data.products;
        const singleProduct = ProductList.filter(
          (product) => product.product_url === pid
        );

        setproduct(singleProduct);
      })
      .catch(() => console.log("Error:unable to fetch!!"));
  }, []);
  console.log(product);
if(product.length){
  return (
    <div>
      <div>
        <div className="Internal-page-wrapper ">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 mt-5 pt-5">
                <h1 className="font-weight-bold">Iphones</h1>
                <div className="brief-description mb-5">
                  The best for the brightest.
                </div>
              </div>
            </div>
            {product?.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              let ProductPage = "/iphone/" + id;
              let order1 = 1;
              let order2 = 2;
              if (flip) {
                order1 = 2;
                order2 = 1;
                flip = !flip;
              } else {
                flip = !flip;
              }

              let productDiv = (
                <div
                  key={id}
                  className="row justify-content-center text-center product-holder h-100"
                >
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                    <div className="product-title">{title}</div>
                    <div className="product-brief">{Brief}</div>
                    <div className="starting_price">{`Starting at ${StartPrice}`}</div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={ProductPage}>Learn more</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6 order-${order2}`}>
                    <div className="product-image">
                      <img src={img} alt="product" />
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </div>
      </div>
    </div>
  );
} else {
  return <Four04/>
}
}
export default Productpage;
