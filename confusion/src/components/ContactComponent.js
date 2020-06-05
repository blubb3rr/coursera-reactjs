import React,{Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div className="container">
                <div className="row ">
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

            </div>
        );
    }
};
export default Contact;