// ProductScreen.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import "./ProductScreen.css"; // Import the CSS file

const ProductScreen = ({ product }) => {
  return (

    <Card className="m-3 p-3 rounded product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="product-card-image" />
      </Link>
      <Card.Body className="product-card-body">
        <Link to={`/product/${product._id}`} className="product-card-title">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div" className="product-card-rating">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="div" className="product-card-price">
          $ {product.price}
        </Card.Text>
        <Link to={`/cart/${product._id}?qty=1`}>
          <Button className="btn-block btn-add-to-cart" type="button">
            Add to cart
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductScreen;
