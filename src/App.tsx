import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState('a');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);
    console.log('effect fired')
  }, [monsters, searchField]);
  
  
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
