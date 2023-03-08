import './App.css';
import React , {useEffect, useState} from 'react';
import Header from './components/Header'
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"



function App() {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("data"))
    )
  
  const [formData, setFormData] = useState({
    name : "",
    email : ""
})

function add(event){
    event.preventDefault()
    const property = event.target.name
    setFormData(prevData => {
        return {...prevData, [property] : event.target.value }
    })

}

function pushContact(event){
  event.preventDefault()

  setContacts(old => [...old, {name : formData.name, email : formData.email}])

  setFormData({name : "", email : ""})
  event.target.name.value = ""
  event.target.email.value = ""
  
}

useEffect(()=>{
  localStorage.setItem("data", JSON.stringify(contacts))
}, [contacts])

function deleteCard(event, email){
  const newArray = []
  for (const item of contacts){
    if (item.email !== email){
      newArray.push(item)
    }
  }

  setContacts(newArray)
}


  return (
     
    <div>
      <Header />
      <AddContact contacts = {contacts}  formHandler ={add} pushContact= {pushContact}/>
      <ContactList  contacts = {contacts} deleteCard={deleteCard} />
    </div>
  );
}

export default App
