import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";

const ContactCard = (props) => {

    const styleTrash = {
        color : "red",
    }

    const detail = props.contact


    return (
        <div className="item">
            <div className="content">
                <div className="header">
                    {detail.name}
                    </div>
                    <div>{detail.email}</div>
                </div>
                <i  style={styleTrash} className="trash alternate outline icon" onClick={(event) => props.deleteCard(event, detail.email)}></i>
            </div>
    )
}

export default ContactCard