import React,{Component} from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem, Modal, Button,ModalHeader,Label, ModalBody,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';
const maxlength=(len)=>(val) => !(val)||(val.length<=len);
const minlength=(len)=>(val) => (val)&&(val.length>=len);
const happiness=true;
    


const hello="nice";
    class CommentForm extends Component{
        constructor(props){
            super(props);
            this.state={
                isModalOpen: false
            }
            this.toggleModal=this.toggleModal.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }
        handleSubmit(values){
            console.log(JSON.stringify(values));
            alert(JSON.stringify(values));
        }
        toggleModal(){
            this.setState(
                {
                    isModalOpen: !(this.state.isModalOpen)
                }
            )
        }
        render(){
            return(
                <> 
                <a className="btn btn-outline-secondary" onClick={this.toggleModal}><span className="fa fa-pencil"></span>Submit Comment</a>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                        <Col className="form-group row">
                        <Col sm={2}>
                        <Label className="mt-1" htmlFor="rating">Ratings:</Label>
                        </Col>
                        <Col sm={10}>
                        <Control.select model=".rating" name="rating" className="form-control">
                            <option>--Select Stars</option>
                            <option>⭐</option>
                            <option>⭐⭐</option>
                            <option>⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐</option>
                            <option>⭐⭐⭐⭐⭐</option>
                        </Control.select>
                        </Col>
                        </Col>                        <Col className="form-group row">
                        <Col sm={2}>
                        <Label className="mt-1" htmlFor="rating">Name:</Label>
                        </Col>
                        <Col sm={10}>
                        <Control.text model=".name" id="name" name="name" className="form-control" placeholder="Your Name" validators={{minlength:minlength(3),maxlength: maxlength(15)}} />
                        <Errors className="text-danger" model=".name" show="touched" messages={{
                            minlength: "Minimum 3 Characters Requrired",
                            maxlength: "Maximum 15 Characters Allowed"
                        }} />
                        </Col>
                        </Col>

                        <Col className="form-group row">
                        <Col sm={2}>
                        <Label className="mt-1" htmlFor="rating">Name:</Label>
                        </Col>
                        <Col sm={10}>
                        <Control.textarea model=".comment" rows="6" name="comment" className="form-control" placeholder="Comments" />
                        </Col>
                        </Col>
                        <Col sm={{size:10,offset:2}}>
                        <Button type="Submit" color="primary">Submit</Button><span> </span>
                        </Col>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                
                </>
            );
        }
    }
    function RenderComments({comments}){
        const commentlist=comments.map(item=>(
            <li>
                {item.comment}<br/>
                {'--'}{item.author} - {new Intl.DateTimeFormat('en-US',{year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(item.date)))}
            </li>
        )
        );
        return  (
            <div>
                <ul className="list-unstyled">
                    {commentlist}
                </ul>
            </div>
        )
    }
    function RenderDish({dish}){
        console.log(dish);
        return (
            <div>
            <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle><h4>{dish.name}</h4></CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
          </div>
        )
    }
    const DishdetailComponent=(props)=> {
        if(props.dish==null){
            return(
                <div>
                </div>
            )
        }
        else{
        return(
            <div className="container">
            <div className="">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="">
                        <h3>{props.dish.name}</h3>
                </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
            </div>
            <div className="col-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={props.comments} />
            <CommentForm />
        </div>
        </div>
        </div>
        );
        }
    }    

export default DishdetailComponent;