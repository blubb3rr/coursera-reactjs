import React,{Component} from 'react';
//import logo from './logo.svg';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
//import './App.css';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import DishdetailComponent from '../components/DishDetailComponent'
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import Contact from "./ContactComponent"
import About from './AboutComponent'
class Main extends Component{
  constructor(props){
  super(props);
  this.state={
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
  };
}
render(){
  const HomePage=() => {
    return <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} 
    promotion={this.state.promotions.filter((promo)=>promo.featured)[0]} 
    leader={this.state.leaders.filter((leaderr)=>leaderr.featured)[0]} />
  }

const DishWithID=({match})=>{
  console.log(match.params)
  return (
    <DishdetailComponent dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}  
            comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))} />
  );
}




  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
        <Route path="/menu/:dishId" component={DishWithID} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={()=><About leaders={this.state.leaders} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
      </div>
  );
}
}
export default Main;
