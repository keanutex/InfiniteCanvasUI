import React from 'react';
import {UserLine} from './Styled-Components/styled-components';

function User(props) {

    function banUser() {
        console.log(props.name + " has been banned");
    }

    return (
        <UserLine>
            <p>{props.name}</p>
            <button onClick={() => {
                if (window.confirm("Ban " + props.name + "?")) {
                    banUser()
                }
                }}>Ban</button>
        </UserLine>
    )
}

export default User;