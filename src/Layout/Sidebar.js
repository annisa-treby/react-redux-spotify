import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {NavLink} from "react-router-dom";
import FaIcon from "../Icons/FaIcon";

function Sidebar() {

        return(
            <ListGroup>
                <ListGroupItem>
                    <NavLink to="/home" activeStyle={{ color: "green" }}>
                        <FaIcon icon="fas home" /> HOME
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/songs" activeStyle={{ color: "green" }}>
                        <FaIcon icon="fas music" /> Songs
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/artists" activeStyle={{ color: "green" }}>
                        <FaIcon icon="fas microphone" /> Artist
                    </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink to="/albums" activeStyle={{ color: "green" }}>
                        <FaIcon icon="fas tape" /> Album
                    </NavLink>
                </ListGroupItem>
            </ListGroup>
        )
}

export default Sidebar;