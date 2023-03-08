import React from "react";  
import ContactCard from "./ContactCard"


const ContactList = (props) => {


    const contactElements = props.contacts.map( contact => {
        return <ContactCard contact = {contact} contacts={props.contacts} deleteCard ={props.deleteCard} />
    })
    
    return (
        <div className="ui celled list">
           {contactElements}
        </div>
    )

    
}

export default ContactList

