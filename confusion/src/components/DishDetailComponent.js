import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
class DishdetailComponent extends Component{
    constructor(props){
        super(props);
        console.log(this.props.dish);
    }
    renderComments(comments){
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
    renderDish(dish){
        return (
            <div>
            <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle><h4>{this.props.dish.name}</h4></CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
          </div>
        )
    }
    render() {
        if(this.props.dish==null){
            return(
                <div>
                </div>
            )
        }
        else{
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
}

export default DishdetailComponent;