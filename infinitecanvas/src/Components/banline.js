import React from 'react';
import {UserLine, ConfirmButtons} from './Styled-Components/styled-components';

function BanLine(props) {
    return (
        <UserLine>
            <p>{props.name}</p>
            <ConfirmButtons>
                {(props.isBanned===1) &&
                <button onClick={() => {props.showConfirm(true); props.state("ban")}}>Ban</button>}
                {(props.isBanned===2) &&
                <button onClick={() => {props.showConfirm(true); props.state("unban")}}>Unban</button>}
                {(props.admin===1) &&
                <button onClick={() => {props.showConfirm(true); props.state("promote")}}>Promote</button>}
                {(props.admin===2) &&
                <button onClick={() => {props.showConfirm(true); props.state("demote")}}>Demote</button>}
            </ConfirmButtons>
        </UserLine>
    );
}

export default BanLine;