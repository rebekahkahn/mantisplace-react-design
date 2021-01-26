import React, { Component, useState } from "react";
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

//dropdown with controlled form--------------------------------------
//logically:
//default state of dropdown: featured
//when click "nymphs" the data should show mantis nymphs (new state)

//code-wise:
//[DONE] filter the data by "nymph"
//[DONE] convert Mantises to a class component
//[DONE] create handleChange event handler to change state
//[DONE] bind the state of dropdown to the correct filtered mantises
//[TO DO] rewrite code so it is more efficient...
class Mantises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Featured",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const nymphs = this.props.mantises.filter(
      (mantis) => mantis.age === "Nymph"
    );
    const adults = this.props.mantises.filter(
      (mantis) => mantis.age === "Adult"
    );
    const featured = this.props.mantises.filter(
      (mantis) => mantis.featured === true
    );

    let mantis = featured.map((mantis) => {
      return (
        <div key={mantis.id}>
          <RenderCard mantis={mantis} />
        </div>
      );
    });

    if (this.state.value === "Nymphs") {
      let mantis = nymphs.map((mantis) => {
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
              <form class="container-fluid mt-2" onSubmit={this.handleSubmit}>
                <div class="form-group row pr-1">
                  <select
                    class="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="Featured">Sort by Featured</option>
                    <option value="Nymphs">Sort by Nymphs</option>
                    <option value="Adults">Sort by Adults</option>
                  </select>
                </div>
              </form>
            </Col>
          </Row>

          <Col>
            <Row
              xs={2}
              sm={3}
              md={4}
              className="d-flex flex-fill h-100 the-row"
            >
              {mantis}
            </Row>
          </Col>
        </React.Fragment>
      );
    }

    if (this.state.value === "Adults") {
      let mantis = adults.map((mantis) => {
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
              <form class="container-fluid mt-2" onSubmit={this.handleSubmit}>
                <div class="form-group row pr-1">
                  <select
                    class="form-control"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <option value="Featured">Sort by Featured</option>
                    <option value="Nymphs">Sort by Nymphs</option>
                    <option value="Adults">Sort by Adults</option>
                  </select>
                </div>
              </form>
            </Col>
          </Row>

          <Col>
            <Row
              xs={2}
              sm={3}
              md={4}
              className="d-flex flex-fill h-100 the-row"
            >
              {mantis}
            </Row>
          </Col>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Row className="mr-0 ml-0 the-top">
          <Col className="mt-2 ml-0 pl-0 title-container">
            <h1>Mantises</h1>
          </Col>
          <Col>
            <form class="container-fluid mt-2" onSubmit={this.handleSubmit}>
              <div class="form-group row pr-1">
                <select
                  class="form-control"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="Featured">Sort by Featured</option>
                  <option value="Nymphs">Sort by Nymphs</option>
                  <option value="Adults">Sort by Adults</option>
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
}

export default Mantises;
