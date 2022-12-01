import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState('a');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => setMonsters(users)
    )
    // dependency array is empty because we do not want to trigger this useEffect again, We only want to trigger it on mount
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);
    console.log('effect fired')
  }, [monsters, searchField]);
  
  
  const onSearchChange = (event) => {
  // Lowercase search input
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
  };

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='Search Monster'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
