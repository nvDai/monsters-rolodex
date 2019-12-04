import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFeild: ""
    };
  }
  async componentDidMount() {
    console.log("Did mount");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const monsters = await res.json();
    this.setState({ monsters });
  }
  componentDidUpdate() {
    console.log("updated");
  }
  updateMonterName() {
    console.log("Click", this.state);
    let monsters = [...this.state.monsters];
    monsters[0].name = "Michael";
    this.setState({ monsters });
  }

  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search monster"
          handleChangeInput={(e) => this.setState({ searchFeild: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
