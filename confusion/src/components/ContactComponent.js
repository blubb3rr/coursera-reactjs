import React,{Component} from 'react';
import {Label, Col,Row, Button } from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
const required=(val)=> val && val.length;
const maxlength=(len)=>(val) => !(val)||(val.length<=len);
const minlength=(len)=>(val) => (val)&&(val.length>=len);
const isVaildNumber=(val) => !isNaN(Number(val))&&(val.length===10);
const validEmail=(val)=>/^[A-Za-z0-9][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+[.][A-Za-z]{2,4}$/i.test(val);


class Contact extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        alert(JSON.stringify(values));
        /*event.preventDefault();*/
    }
    render(){
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
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2} >First Name</Label>
                                <Col md={10} >
                                <Control.text model=".firstname" className="form-control" id="firstname" name="firstname" placeholder="First Name" validators={{required,minlength: minlength(3),maxlength:maxlength(10)}}  />
                                <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                    required: "Required ",
                                    minlength: "Must be Greater than 3 characters ",
                                    maxlength: "Must be less than 10 characters"
                                }} />
                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2} >Last Name</Label>
                                <Col md={10} >
                                <Control.text model=".lastname" className="form-control" id="lastname" name="lastname" placeholder="Last Name" validators={{required,minlength: minlength(3),maxlength:maxlength(10)}} />
                                <Errors className="text-danger" model=".lastname" show="touched" messages={{
                                    required: "Required ",
                                    minlength: "Must be Greater than 3 characters ",
                                    maxlength: "Must be less than 10 characters"
                                }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2} >Contact No.</Label>
                                <Col md={10} >
                                <Control.text model=".telnum" id="telnum" className="form-control" name="telnum" placeholder="Contact number" validators={{required,isVaildNumber}}  />
                                <Errors className="text-danger" model=".telnum" show="touched" messages={{
                                    required: "Required ",
                                    isVaildNumber: "Not a Valid Number "
                                }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2} >E-mail</Label>
                                <Col md={10} >
                                <Control.text model=".email" id="email" className="form-control" name="email" placeholder="E-mail" validators={{required,validEmail}} />
                                <Errors className="text-danger" model=".email" show="touched" messages={{
                                required: "Required ",
                                validEmail: "Not a Valid E-mail address"
                                }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                <div className="form-check">
                                    <Label check htmlFor="contact" > {' '}<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Control.checkbox model=".agree" className="form-check-input" name="agree" /> <strong>Should we contact you?</strong></Label>
                                </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contactType" className="form-control" className="form-control" name="contactType" >
                                        <option>Tel</option>
                                        <option>Email</option>
                                    </Control.select >
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label md={2} htmlFor="feedback">Your Feedabck</Label>
                                <Col md={10}>
                                <Control.textarea model=".message" className="form-control" id="message" name="message" placeholder="Feedback" rows="12"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{offset: 2,size: 10}}>
                                    <Button type="submit" color="primary">Submit Feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>

                </div>
            </div>
        );
    }
};
export default Contact;