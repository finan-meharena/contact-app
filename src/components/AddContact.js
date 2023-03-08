import React, {useState} from "react";


const AddContact = (props) => {

    const add = props.formHandler
    
    return (
        <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={(event)=> props.pushContact(event)}>
            <div className="field">
                <label> Name</label>
                <input  
                    onChange={(event)=> add(event)} 
                    type="text" 
                    name="name"
                    value={props.contacts.name} 
                    required
                    laceholder=" Name ...">
                </input>
            </div>
            <div className="field">
                <label> Email </label>
                <input  
                    onChange={(event)=> add(event)} 
                    type="email" 
                    name="email" 
                    value={props.contacts.value}
                    placeholder=" Email ..."
                    required
                    ></input>
            </div>
            <button className="ui button blue"> Add</button>

            {/* <h2>{props.formData.name}</h2> */}
        </form>
    </div>
    )
}

export default AddContact