import React, {Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron,Modal,ModalBody,ModalFooter,ModalHeader,Form,FormGroup,Label,Input,Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event){
        this.toggleModal();
        const lol=this.username.value;
        console.log(lol);
        alert("Username: " + this.username.value + "\nPassword: " + this.password.value +"\nRemember me: " + this.remember.checked)

    }
    render(){
        return(
            <>
            <Navbar dark expand="md" className="change-font">
            <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" ><img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"></img></NavbarBrand>
            <Collapse navbar isOpen={this.state.isNavOpen}>
            <Nav navbar>
                <NavItem><NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg">Home</span></NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/about"><span className="fa fa-info fa-lg">About Us</span></NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/menu"><span className="fa fa-list fa-lg">Menu</span></NavLink></NavItem>
                <NavItem><NavLink className="nav-link" to="/contact"><span className="fa fa-address-card fa-lg">Contact Us</span></NavLink></NavItem>
            </Nav>
            <Nav className="ml-auto">
                <NavItem className="btn-group">
                <a className="btn btn-success" onClick={this.toggleModal}><span className="fa fa-sign-in"></span> Login</a>
                </NavItem>
            </Nav>
            </Collapse>
            </div>
            </Navbar>
            <Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Col md={2}>
                                <Label className="mt-2" htmlFor="username">Username: </Label>
                                </Col>
                                <Col md={10}>
                                <Input htmlFor="username" type="text" id="username" name="username" innerRef={(input)=>this.username=input}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                <Label className="mt-2" htmlFor="password">Password: </Label>
                                </Col>
                                <Col md={10}>
                                <Input htmlFor="password" type="password" id="password" name="password" innerRef={(input)=>this.password=input}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup check>
                                <Col md={{offset:2,size:10}}>
                                    <Label check>
                                        <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}></Input> Remember Me
                                    </Label>

                                </Col>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                    <Col md={{offset: 2,size: 10}}>
                        <a className="btn btn-primary" onClick={this.handleLogin}>Confirm</a>
                        <span>   </span>
                        <a className="btn btn-primary" onClick={this.toggleModal}>Cancel</a>
                    </Col>
                    </ModalFooter>
                </Modal>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        );
    }
}
export default Header;