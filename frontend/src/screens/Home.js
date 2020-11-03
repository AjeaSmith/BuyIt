import React, { Fragment } from "react";
import Product from "../components/Product";
import { products } from "../products";
import { Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <Fragment>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default Home;
