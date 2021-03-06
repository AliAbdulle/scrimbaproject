import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import Nav from "./Nav";
import Footer from "./Footer";
// import ContactCard from './ContactCard';
import Joke from "./Joke";
import JokesData from "./JokesData";
import ContactCard from "./ContactCard";
import Product from "./Product";
import productsData from "./vschoolProducts";
//import './App.css';
//App function
class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }

  //render file
  render() {
    const todoItems = todosData.map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    const jokesComponents = JokesData.map(joke => (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />// log
    ));
    const productsComponents = productsData.map(item => (
      <Product key={item.id} product={item} />
    ));
    return (
      <div>
        <Nav />
        <div className="contacts">
          <ContactCard
            name="Mr. Whiskerson"
            imgUrl="http://placekitten.com/300/200"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
          />

          <ContactCard
            name="Fluffykins"
            imgUrl="http://placekitten.com/400/200"
            phone="(212) 555-2345"
            email="fluff@me.com"
          />

          <ContactCard
            name="Destroyer"
            imgUrl="http://placekitten.com/400/300"
            phone="(212) 555-3456"
            email="ofworlds@yahoo.com"
          />

          <ContactCard
            name="Felix"
            imgUrl="http://placekitten.com/200/100"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
          />
        </div>

        <div className="todo-list">{todoItems}</div>
        <div>{jokesComponents}</div>
        <div>{productsComponents}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
