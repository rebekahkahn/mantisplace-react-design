import React, { Component } from "react";
import { Col, Row } from "reactstrap";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Mantises from "./MantisesComponent";
import Sidebar from "./SidebarComponent";
import Home from "./HomeComponent";
import Videos from "./VideosComponent";
import NewArrivals from "./NewArrivalsComponent";
import Accessories from "./AccessoriesComponent";
import MantisInfo from "./MantisInfoComponent";
import Cart from "./CartComponent";

import { addItem, deleteItem } from "../redux/ActionCreators"; //import the actions
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    mantises: state.mantises,
    headers: state.headers,
  };
};

const mapDispatchToProps = {
  //helps component fire an event
  addItem: (mantisId) => addItem(mantisId),
  deleteItem: (mantisId) => deleteItem(mantisId),
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };
    const VideosPage = () => {
      return <Videos />;
    };
    const NewArrivalsPage = () => {
      return <NewArrivals />;
    };
    const AccessoriesPage = () => {
      return <Accessories />;
    };
    const CartPage = () => {
      return <Cart />;
    };

    const MantisWithId = ({ match }) => {
      return (
        <MantisInfo
          mantis={
            this.props.mantises.filter(
              (mantis) => mantis.id === +match.params.mantisId
            )[0]
          }
          addItem={this.props.addItem} //pass action as a prop to mantisinfo component
          deleteItem={this.props.deleteItem} //pass action as a propr to mantisinfo component
        />
      );
    };

    return (
      <React.Fragment>
        <Header />

        <Row>
          <Col xs={4} className="d-none d-lg-block">
            <Sidebar headers={this.props.headers} />
          </Col>
          <Col>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/mantises"
                render={() => <Mantises mantises={this.props.mantises} />}
              />

              <Route path="/mantises/:mantisId" component={MantisWithId} />

              <Route path="/cart" component={CartPage} />
              <Route path="/videos" component={VideosPage} />
              <Route path="/newarrivals" component={NewArrivalsPage} />
              <Route path="/accessories" component={AccessoriesPage} />

              <Redirect to="/home" />
            </Switch>
          </Col>
        </Row>

        <Footer />
      </React.Fragment>
    );
  }
}

//mapDispathToProps makes addItem action creator function available inside the Main Component as a prop
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
