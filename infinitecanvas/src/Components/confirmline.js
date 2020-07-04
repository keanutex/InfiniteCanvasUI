import React from 'react';
import {ConfirmButtons, UserLine} from './Styled-Components/styled-components';

function ConfirmLine(props) {
    return (
        <UserLine>
            {props.state==="ban" &&
            <p>Ban {props.name}?</p>}
            {props.state==="unban" &&
            <p>Unban {props.name}?</p>}
            {props.state==="promote" &&
            <p>Promote {props.name} to Admin?</p>}
            {props.state==="demote" &&
            <p>Demote {props.name}?</p>}
            <ConfirmButtons>
                {props.state==="ban" &&
                    <button onClick={props.banUser}>Yes</button>}
                {props.state==="unban" &&
                    <button onClick={props.unban}>Yes</button>}
                {props.state==="promote" &&
                    <button onClick={props.promote}>Yes</button>}
                {props.state==="demote" &&
                    <button onClick={props.demote}>Yes</button>}
                <button onClick={() => props.showConfirm(false)}>No</button>
            </ConfirmButtons>
        </UserLine>
    )
}

export default ConfirmLine;