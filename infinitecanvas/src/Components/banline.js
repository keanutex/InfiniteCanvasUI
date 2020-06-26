import React from 'react';
import {UserLine} from './Styled-Components/styled-components';

function BanLine(props) {
    return (
        <UserLine>
            <p>{props.name}</p>
            <button onClick={() => props.showConfirm(true)}>Ban</button>
        </UserLine>
    );
}

export default BanLine;