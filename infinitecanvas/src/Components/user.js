import React, {useState} from 'react';
import axios from 'axios';
import BanLine from './banline';
import ConfirmLine from './confirmline';

function User(props) {
    const [showConfirm, setShowConfirm] = useState(false);
    const [showState, setState] = useState("");

    const banUser = async (e) => {
        e.preventDefault();
        await axios.post('http://52.151.114.80:3000/account/banUser',
            {
                userId: props.name.userId,
                adminId: props.admin
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                setShowConfirm(false);
                props.useUpdate(props.update, {userId: props.name.userId, username: props.name.username, typeId: props.name.typeId, statusId: 2});
            }).catch(error => {
                setshowErr(true);
            });
    };

    const unBanUser = async (e) => {
        e.preventDefault()
        await axios.post('http://52.151.114.80:3000/account/unbanUser',
            {
                userId: props.name.userId,
                adminId: props.admin
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                setShowConfirm(false)
                props.useUpdate(props.update, {userId: props.name.userId, username: props.name.username, typeId: props.name.typeId, statusId: 1});
            }).catch(error => {
                setshowErr(true);
            });
    };

    const promoteUser = async (e) => {
        e.preventDefault();
        await axios.post('http://52.151.114.80:3000/account/setUserAdmin',
            {
                userId: props.name.userId,
                adminId: props.admin
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                setShowConfirm(false)
                props.useUpdate(props.update, {userId: props.name.userId, username: props.name.username, typeId: 2, statusId: props.name.statusId});
            }).catch(error => {
                setshowErr(true);
            });
    };

    const demoteUser = async (e) => {
        e.preventDefault();
        await axios.post('http://52.151.114.80:3000/account/removeUserAdmin',
            {
                userId: props.name.userId,
                adminId: props.admin
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                setShowConfirm(false)
                props.useUpdate(props.update, {userId: props.name.userId, username: props.name.username, typeId: 1, statusId: props.name.statusId});
            }).catch(error => {
                setshowErr(true);
            });
    };

    function onUpdate(value) {
        props.useUpdate(value);
    }

    if (showConfirm) {
        return <ConfirmLine name={props.name.username} banUser={banUser} unban={unBanUser} promote={promoteUser} 
        demote={demoteUser} showConfirm={setShowConfirm} state={showState} />
    } else{
        return <BanLine name={props.name.username} showConfirm={setShowConfirm} 
        admin={props.name.typeId} isBanned={props.name.statusId} state={setState}/>
    }
}

export default User;
