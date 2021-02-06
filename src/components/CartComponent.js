import React from "react";
import { Col, Row } from "reactstrap";
import { addItem, deleteItem } from "../redux/ActionCreators"; //import the actions
import { connect } from "react-redux"; //import from react redux

function Cart(props) {
  return (
    <React.Fragment>
      <Row className="mr-0 ml-0 the-top">
        <Col className="mt-2 ml-0 pl-0 title-container">
          <h1>Your Cart!</h1>
        </Col>
      </Row>

      <Row>
        <Col sm={6} className="d-flex flex-fill h-100 title-container">
          {props.mantisId}
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Cart;

//need a component that will display the cart items we have added to the redux store
