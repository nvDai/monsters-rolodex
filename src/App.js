import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchFeild: ""
    };
    this.showProps = props
  }
  async componentDidMount() {
    console.log("Did mount", this.showProps);
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
        <h1 className="title">Monster Rolodex</h1>
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
