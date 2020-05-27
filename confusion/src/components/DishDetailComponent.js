import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
class DishdetailComponent extends Component{
    renderComments(comments){
        const commentlist=comments.map(item=>(
            <li>
                {item.comment}<br/>
                {'--'}{item.author},{item.date} 
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
    renderDish(dish){
        return (
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        )
    }
    render() {
        
        return(
        <div className="row">
        <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
        </div>
        <div className="col-5 m-1">
            <h4>Comments</h4>
            {this.renderComments(this.props.dish.comments)}
        </div>
        </div>
        );
    }    
}

export default DishdetailComponent;