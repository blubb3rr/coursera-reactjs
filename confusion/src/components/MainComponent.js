import React,{Component} from 'react';
//import logo from './logo.svg';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
//import './App.css';
import {DISHES} from '../shared/dishes';
import DishdetailComponent from '../components/DishDetailComponent'

class Main extends Component{
  constructor(props){
  super(props);
  this.state={
    dishes: DISHES,
    selectedDish: null
  };
}

onDishSelect(dish) {
    if(dish.name === this.state.selectedDish)
    {
      this.setState({selectedDish: null})
    }
    else
    {
    this.setState({selectedDish: dish.name});
    }
}

render(){
  return (
    <div>
      <Header />
      <Menu dishes={this.state.dishes} onClick={(dish)=>this.onDishSelect(dish)} />
      <div className="container">
      <DishdetailComponent dish={this.state.dishes.filter((dish)=>dish.name === this.state.selectedDish)[0]} />
      </div>
      <Footer />
      </div>
  );
}
}
export default Main;
