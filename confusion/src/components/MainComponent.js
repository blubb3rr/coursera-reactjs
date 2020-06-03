import React,{Component} from 'react';
//import logo from './logo.svg';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
//import './App.css';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from '../components/DishDetailComponent'
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component{
  constructor(props){
  super(props);
  this.state={
    dishes: DISHES,
    selectedDish: null
  };
}
render(){
  const HomePage=() => {
    return <Home />
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
        <Redirect to="/home" />
      </Switch>
      <div className="container">
      <DishdetailComponent dish={this.state.dishes.filter((dish)=>dish.name === this.state.selectedDish)[0]} />
      </div>
      <Footer />
      </div>
  );
}
}
export default Main;
