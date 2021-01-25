import React, { useState } from "react";
import {
  Card,
  CardText,
  CardSubtitle,
  CardBody,
  CardImg,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderCard({ mantis }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Card className="h-100 rounded-0">
        <CardImg
          src={mantis.image}
          className="mantis-image"
          alt={mantis.name}
          onClick={toggle}
        />
        <CardBody>
          <Link to={`mantises/${mantis.id}`}>
            <CardSubtitle className="mantis-name">{mantis.name}</CardSubtitle>
          </Link>
          <CardText className="mantis-price">${mantis.price}</CardText>
        </CardBody>
      </Card>

      <Modal centered isOpen={isOpen} toggle={toggle} aria-label="Cancel">
        <ModalHeader toggle={toggle} className="product-header pb-0">
          <h1>Product Preview</h1>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs={5} sm={4}>
              <CardImg
                className="img-thumbnail"
                src={mantis.image}
                alt={mantis.name}
              ></CardImg>
            </Col>
            <Col sm={7}>
              <Col>
                <Row className="product-name">{mantis.name}</Row>
                <Row className="product-price pb-2">${mantis.price}</Row>
                <Row className="product-description pb-2">
                  {mantis.description}
                </Row>
              </Col>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Link to={`mantises/${mantis.id}`}>
            <Button
              color="success"
              className="p-2 rounded-0 product-button"
              aria-label="View Product"
            >
              View Product
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
}

//react hooks with dropdown----------------------------
//logically:
//default state of dropdown: featured
//when click "nymphs" the data should show mantis nymphs (new state)

//code-wise:
//[DONE]filter the data by "nymph"
//[TO DO] check the state of the dropdown that is selected
//        ->turn below into class component
//        ->NOTE: this is an uncontrolled form
// https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs

function Mantises(props) {
  const nymphs = props.mantises.filter((mantis) => mantis.age === "Nymph");
  const adults = props.mantises.filter((mantis) => mantis.age === "Adult");
  const featured = props.mantises.filter((mantis) => mantis.featured === true);

  const mantis = featured.map((mantis) => {
    return (
      <div key={mantis.id}>
        <RenderCard mantis={mantis} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <Row className="mr-0 ml-0 the-top">
        <Col className="mt-2 ml-0 pl-0 title-container">
          <h1>Mantises</h1>
        </Col>
        <Col>
          {" "}
          {/*This will eventually be a react redux dropdown */}
          <form class="container-fluid mt-2">
            <div class="form-group row pr-1">
              <select class="form-control">
                <option value="select">Sort by Featured</option>
                <option value="1">Sort by Nymphs</option>
                <option value="2">Sort by Adults</option>
              </select>
            </div>
          </form>
        </Col>
      </Row>

      <Col>
        <Row xs={2} sm={3} md={4} className="d-flex flex-fill h-100 the-row">
          {mantis}
        </Row>
      </Col>
    </React.Fragment>
  );
}

export default Mantises;
