import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Col,
  Row,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

function MantisCart({ mantis, addItem, mantisId }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    return setIsOpen(!isOpen) && addItem(mantisId);
  };

  return (
    <>
      <Button
        color="success"
        className="p-2 rounded-0 product-button float-right mb-3"
        aria-label="Add to Cart"
        onClick={() => {
          toggle();
        }}
      >
        Add to Cart
      </Button>
      <Modal centered isOpen={isOpen} toggle={toggle} aria-label="Cancel">
        <ModalHeader toggle={toggle} className="product-header pb-0">
          <h1>Added to cart!</h1>
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
          <Link to={"/cart"}>
            <Button
              color="success"
              className="p-2 rounded-0 product-button"
              aria-label="View Cart"
            >
              View Cart
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    </>
  );
}

// 2) destructure addItem+deleteItem and mantisId props, now passed to RenderMantis
function RenderMantis({ mantis, addItem, deleteItem, mantisId }) {
  return (
    <React.Fragment>
      <div>
        <Row className="mt-3">
          <Col xs={5} sm={4}>
            <Card>
              <CardImg top src={mantis.image} alt={mantis.name} />
            </Card>
          </Col>

          <Col>
            <h1>{mantis.name}</h1>
            <Card>
              <CardText>
                <CardBody>{mantis.description}</CardBody>
                <CardBody>
                  <MantisCart
                    mantis={mantis}
                    mantisId={mantisId}
                    addItem={addItem}
                    deleteItem={deleteItem}
                  />
                </CardBody>
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3 title-container">
          <h1>Recommended Accessories</h1>
          <Card className="mb-4">
            <CardBody>
              <CardText>
                Eventually this will be mapped over an accessories js data file.
                Also, I am going to change the styling of this page. It's ugly
                right now.
              </CardText>
            </CardBody>
          </Card>
        </Row>
      </div>
    </React.Fragment>
  );
}

function MantisInfo(props) {
  if (props.mantis) {
    return (
      <div className="mr-3">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/mantises">Mantises</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.mantis.name}</BreadcrumbItem>
        </Breadcrumb>

        <Col>
          <RenderMantis
            mantis={props.mantis}
            mantisId={props.mantisId}
            addItem={props.addItem}
            deleteItem={props.deleteItem}
          />
          {/* 1) pass addItem+deleteitem and mantisId props to the RenderMantis component  */}
        </Col>
      </div>
    );
  }
  return <div />;
}

export default MantisInfo;
