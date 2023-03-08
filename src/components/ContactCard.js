import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

const ContactCard = (props) => {

    const styleTrash = {
        color : "red",
    }

    const {id, name, email} = props.contact

    return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {name}
                    </div>
                    <div>{email}</div>
                </div>
                <i  style={styleTrash} className="trash alternate outline icon"></i>
            </div>
    )
}

export default ContactCard