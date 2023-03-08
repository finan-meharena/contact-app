import React from "react";  
import ContactCard from "./ContactCard"


const ContactList = (props) => {

    // const {id, name, email} = props.contact

    const contactElements = props.contacts.map( contact => {
        return <ContactCard contact = {contact}/>
    })
    
    return (
        <div className="ui celled list">
           {contactElements}
        </div>
    )

    
}

export default ContactList

