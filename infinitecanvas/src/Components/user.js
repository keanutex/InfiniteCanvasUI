import React, {useState} from 'react';
import BanLine from './banline';
import ConfirmLine from './confirmline';

function User(props) {
    const [showConfirm, setShowConfirm] = useState(false);

    function banUser() {
        console.log(props.name + " has been banned");
    }

    if (showConfirm) {
        return <ConfirmLine name={props.name} banUser={banUser} showConfirm={setShowConfirm}/>
    } else {
        return <BanLine name={props.name} showConfirm={setShowConfirm}/>
    }
}

export default User;