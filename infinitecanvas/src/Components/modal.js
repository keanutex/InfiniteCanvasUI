import React from 'react'
import {LoginModal} from './Styled-Components/styled-components';
import Login from './login';

function Modal(props) {

    if (props.user === null) {
        return (
            <LoginModal>
                <h3>Welcome to DotArt</h3>
                <Login setUser={props.setUser} setUserData={props.setUserData}/>
                <p>Only one click allowed per second</p>
                <p>Created by some poor souls</p>
            </LoginModal>
        )
    } else {
        return null;
    }
}

export default Modal