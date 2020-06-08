import React,{Component} from 'react';
import { Form, FormGroup, Label, Input, Col, Button,FormFeedback } from 'reactstrap';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state ={
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'tel',
            message:'',
            touched:{
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleOnBlur=this.handleOnBlur.bind(this);
    }
    handleOnBlur=(field)=>(event)=>{
        this.setState({
            touched :{...this.state.touched, [field]: true}
        })
       
    }
    validate(firstname,lastname,telnum,email){
        const error={
            firstname:'',
            lastname:'',
            telnum:'',
            email:''
        }
        if(this.state.touched.firstname && firstname.length<3)
            error.firstname="First name should be more than 3 characters"
        if(this.state.touched.firstname && firstname.length>10)
            error.firstname="First name should be less than 10 characters"
        if(this.state.touched.lastname && lastname.length<3)
            error.lastname="Last name should be more than 3 characters"
        if(this.state.touched.lastname && lastname.length>10)
            error.lastname="Last name should be less than 10 characters"
        if(this.state.touched.telnum && telnum.length!==10)
            error.telnum="Invalid Phone Number"
        const regex=/^\d+$/;
        if(this.state.touched.telnum && !telnum.match(regex))
            error.telnum="Invalid Phone Number"
        if(this.state.touched.email && email.split('@').length !== 2)
            error.email="Invalid E-mail Address"
        if(this.state.touched.email && email.split('@').length === 2)
            if(email.split('@')[1].length <= 2)
                error.email="Invalid E-mail Address"
        return error;
    }
    handleInputChange(event){
        const target=event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name= target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        const error=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
        return(
            <div className="container">
                <div className=" ">
                    <h2>Location Information</h2>
                </div>
                <div className="row">
                    <div className="offset-sm-1 col-12 col-sm-4">
                        <h5>Our Addresss</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                        </address>
                        <i className="fa fa-phone">+852 1234 5678</i><br />
                        <i className="fa fa-fax">+852 1234 5678</i><br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a><br />
                        <div className="btn-group mb-2">
                            <a href="tel:+85212345678" className="btn btn-primary"><i className="fa fa-phone"></i> Call</a>
                            <a href="#" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a href="mailto:gge@gmail.com" className="btn btn-success"><i className="fa fa-envelope"></i> Email</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2} >First Name</Label>
                                <Col md={10} >
                                <Input onChange={this.handleInputChange} type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname} onFocus={this.handleOnBlur('firstname')} valid={this.state.touched.firstname && error.firstname === ''} invalid={this.state.touched.firstname && error.firstname!==''} />
                                <FormFeedback>{error.firstname}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2} >Last Name</Label>
                                <Col md={10} >
                                <Input onChange={this.handleInputChange} type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} onFocus={this.handleOnBlur('lastname')} valid={this.state.touched.lastname && error.lastname === ''} invalid={this.state.touched.lastname && error.lastname!==''} />
                                <FormFeedback>{error.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2} >Contact No.</Label>
                                <Col md={10} >
                                <Input onChange={this.handleInputChange} type="tel" id="telnum" name="telnum" placeholder="Contact number" value={this.state.telnum} onFocus={this.handleOnBlur('telnum')} valid={this.state.touched.telnum && error.telnum === ''} invalid={this.state.touched.telnum && error.telnum!==''} />
                                <FormFeedback>{error.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2} >E-mail</Label>
                                <Col md={10} >
                                <Input onChange={this.handleInputChange} type="email" id="email" name="email" placeholder="E-mail" value={this.state.email} onFocus={this.handleOnBlur('email')} valid={this.state.touched.email && error.email === ''} invalid={this.state.touched.email && error.email!==''}/>
                                <FormFeedback>{error.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                <Form check>
                                    <Label check htmlFor="contact" > {' '}<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Input onChange={this.handleInputChange} type="checkbox" name="agree" checked={this.state.agree} /> <strong>Should we contact you?</strong></Label>
                                </Form>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input onChange={this.handleInputChange} type="select" name="contactType" value={this.state.contactType}>
                                        <option>Tel</option>
                                        <option>Email</option>
                                    </Input >
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="feedback">Your Feedabck</Label>
                                <Col md={10}>
                                <Input onChange={this.handleInputChange} type="textarea" id="message" name="message" placeholder="Feedback" rows="12" value={this.state.message} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{offset: 2,size: 10}}>
                                    <Button type="submit" color="primary">Submit Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
};
export default Contact;