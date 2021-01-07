import React, { Component } from 'react';
import Logo from '../shared/mantis_full.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
        Modal, ModalHeader, ModalBody, ModalFooter, Button, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';                         

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModelOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render () {
        return (
            <React.Fragment>
                <Navbar className="header-nav" expand="lg" dark>
                    <div className="container-fluid">
                        <NavLink className="nav-link m-0 p-0" to="/home">
                            <span className="logo d-none d-lg-block">
                                <a href="/"><img src={Logo} height="100" width="105" alt="Logo"/></a>
                            </span>
                        </NavLink>
                        <NavLink className="nav-link" to="/home">
                            <NavbarBrand href="/" className="website-name"><h1>Mantis Place</h1></NavbarBrand>
                        </NavLink>
                        <span className="btn shopping-bag" onClick={this.toggleModal}>
                            <i className="fa fa-shopping-bag fa-lg" href="/"></i>
                        </span>
                        <NavbarToggler className="toggler order-first align-items-center" onClick={this.toggleNav} />
                        <Collapse onClick={this.toggleNav} isOpen={this.state.isNavOpen} navbar> {/*must write so isOpen applies only to smaller breakpoint */}
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/videos">Videos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/newarrivals">New Arrivals</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Care Sheets</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/mantises">Mantises</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link " to="/home">Spiders</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Feeder Insects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Starter Kits</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/accessories">Accessories</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Gift Shop</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Shipping Supplies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Contact Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="d-lg-none nav-link" to="/home">Shopping and Site Policy</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal centered isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} className="product-header pb-0"><h1>Shopping Cart</h1></ModalHeader>
                    <ModalBody>More text here later.</ModalBody>
                    <ModalFooter>
                        <Col className="p-0 text-left">
                            <Button color="success" className="p-2 rounded-0 product-button text-left" aria-label="Checkout">Checkout</Button>
                        </Col>
                         <Col className="p-0 text-right">
                            <Button active onClick={this.toggleModal} color="success" className="p-2 rounded-0 product-button" aria-label="Shopping">Continue Shopping</Button>
                         </Col>
                    </ModalFooter>

                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;

//NOTE: I chose to write this without useState for practice.