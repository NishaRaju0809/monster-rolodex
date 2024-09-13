import { Component } from "react";

import "./App.css";
import ListCard from "./components/ListCard";
import SearchInput from "./components/SearchInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchedField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          monsters: users,
        });
      });
  }
  onSearchChange = (event) => {
    const searchedField = event.target.value.toLowerCase();
    console.log("searchedField:", searchedField);
    this.setState({
      searchedField: searchedField,
    });
  };

  render() {
    const { onSearchChange } = this;
    const { searchedField, monsters } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchedField)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchInput onSearchChange={onSearchChange} />
        <ListCard monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
