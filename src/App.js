import React, { Component } from "react";
import "./App.css";
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

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
    const monsters = await this.fetchData()
    this.setState({ monsters })
  }

  fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const monsters = await res.json()
      return monsters
    } catch (error) {
      console.error(error)
    }
  }

  filteredMonsters = () => {
    const { monsters, searchFeild } = this.state;
    
    return monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
  }

  handleChangeInput = (e) => {
    this.setState({ searchFeild: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Monster Rolodex</h1>
        <SearchBox
          placeholder="Search monster"
          handleChangeInput={this.handleChangeInput}
        />
        <CardList monsters={this.filteredMonsters()} />
      </div>
    );
  }
}

export default App;
