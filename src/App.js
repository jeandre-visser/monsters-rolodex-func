import './App.css';
import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [first, setfirst] = useState(second)

  const onSearchChange = (event) => {
  // Lowercase search input
  const searchField = event.target.value.toLocaleLowerCase();

  this.setState(() => {
    return { searchField };
  })
}

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='Search Monster'
      />
      {/**
  <CardList monsters={filteredMonsters} />*/}
    </div>
  )
}

export default App;
