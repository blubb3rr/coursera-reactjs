import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
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
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="row">
                        <h3>{props.dish.name}</h3>
                </div>
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
            </div>
            <div className="col-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={props.comments} />
        </div>
        </div>
        </div>
        );
        }
    }    

export default DishdetailComponent;