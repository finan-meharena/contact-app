import './App.css';
import React from 'react';
import Header from './components/Header'
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"



function App() {

  const contacts = [
    {
      id : "1",
      name : "Finan",
      email : "finan@gmail.com"
    },
    {
      id : "2",
      name : "Kidane",
      email : "kidane@gmail.com"
    },
    {
      id : "3",
      name : "Senait",
      email : "senait@gmail.com"
    }
  ]
  return (
     
    <div>
      <Header />
      <AddContact contacts = {contacts} />
      <ContactList  contacts = {contacts} />
  
    </div>
  );
}

export default App;
