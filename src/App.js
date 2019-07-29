import React,{Component} from 'react';
import Cardlist from './components/Cards';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monster : [],
      searchField :''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster:users}))
  }
  render(){
    const{monster, searchField} = this.state;
    const filteredMonster = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div>
        <h1 className='text-center'>Monsters Color</h1>
        <input type='search' placeholder='search monster' className='offset-5' onChange={e =>this.setState({searchField: e.target.value})}/>
        <Cardlist monster={filteredMonster}/>
      </div>
    )
  }
}

export default App;