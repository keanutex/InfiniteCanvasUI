import React from 'react';
import {ConfirmButtons, UserLine} from './Styled-Components/styled-components';

function ConfirmLine(props) {
    return (
        <UserLine>
            <p>Ban {props.name}?</p>
            <ConfirmButtons>
                <button onClick={() => {props.banUser()}}>Yes</button>
                <button onClick={() => props.showConfirm(false)}>No</button>
            </ConfirmButtons>
        </UserLine>
    )
}

export default ConfirmLine;