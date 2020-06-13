import React,{Component} from 'react';
//import logo from './logo.svg';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
//import './App.css';
import DishdetailComponent from '../components/DishDetailComponent'
import Home from './HomeComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Contact from "./ContactComponent"
import About from './AboutComponent';
import {connect} from 'react-redux';
import { addComment } from '../redux/ActionCreators';


function mapStateToProps(state){
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders:state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});



class Main extends Component{
  constructor(props){
  super(props);
}
render(){
  const HomePage=() => {
    return <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]} 
    promotion={this.props.promotions.filter((promo)=>promo.featured)[0]} 
    leader={this.props.leaders.filter((leaderr)=>leaderr.featured)[0]} />
  }

const DishWithID=({match})=>{
  console.log(match.params)
  return (
    <DishdetailComponent dish={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}  
            comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment}
            />
  );
}




  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} />
        <Route path="/menu/:dishId" component={DishWithID} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={()=><About leaders={this.props.leaders} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
  );
}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
