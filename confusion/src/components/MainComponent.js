import React,{Component} from 'react';
//import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from '../components/MenuComponent'
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
    this.setState({selectedDish: dish.name});
}

render(){
  return (
    <div>
      <Navbar dark color='primary'>
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dish)=>this.onDishSelect(dish)} />
      <div className="container">
      <DishdetailComponent dish={this.state.dishes.filter((dish)=>dish.name == this.state.selectedDish)[0]} />
      </div>
      </div>
  );
}
}
export default Main;
