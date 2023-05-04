import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col, Carousel } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";
import "./HomeScreen.css"
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image" // Add the custom CSS class
            src="https://www.cloudtalk.io/wp-content/uploads/2021/12/Article-202104-eCommerceCC-2x-1024x538.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image" // Add the custom CSS class
            src="https://www.toogit.com/uploads/ServicesAttachments/2021/01250416557792.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image" // Add the custom CSS class
            src="https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
