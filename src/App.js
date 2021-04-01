import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: []
    };
  }
  addItem = () => {
    const id = Math.random();
    const currentValue = this.state.userInput;
    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id,
        content: currentValue
      };
      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput]
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: ""
          });
        }
      );
    }
  };
  onInputChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  deleteItem = (itemId, e) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== itemId);
    this.setState({
      todos: newTodos
    });
    e.stopPropagation();
  };
  toggleItem = (itemId) => {
    const newArr = this.state.todos.map((todo) => {
      if (itemId === todo.id) {
        let currentTodo = { ...todo };
        currentTodo.checked = !currentTodo.checked;
        return currentTodo;
      } else {
        return todo;
      }
    });
    this.setState({
      todos: newArr
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Form
          addItem={this.addItem}
          onInputChange={this.onInputChange}
          userInput={this.state.userInput}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList
              todos={this.state.todos}
              deleteItem={this.deleteItem}
              toggleItem={this.toggleItem}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
