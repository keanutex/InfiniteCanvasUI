import React, {useState, useEffect } from 'react';
import axios from 'axios';
import {AdminArea} from './Styled-Components/styled-components';
import User from './user';

function AdminButtonArea(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isLoading, setIsloading] = useState(true);
    let [allUserData, setAllUserData] = useState([{ userId: null, username: null, typeId: null, statusId: null }]);
    const [showErr, setshowErr] = useState(false);
    const [update, setUpdate] = useState("");

    useEffect(
        () => {
            
        }, [update]
    )

    function renderList() {
        setIsClicked(!isClicked)
        if (!isClicked) {
            setExpanded(true);
            setTimeout(() => {
                setIsHidden(false);
            }, 200)
        } else {
            setIsHidden(true);
            setExpanded(false);
        }
    }

    const getList = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:3000/account/getAllUsers',
            {
                userId: props.userData.userId
            },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            }).then(response => {
                setAllUserData(response.data);
                //console.log(allUserData)
                
                setIsloading(false)
                renderList();
            }).catch(error => {
                setshowErr(true);
            });
        
        
    };

    const useUpdate = (val, data) => {
        const newUserData = allUserData.map(l => Object.assign({}, l));

        newUserData[val] = data;

        setAllUserData(newUserData);

        console.log(newUserData);
        console.log(allUserData[val]);
    }

    return (
        <AdminArea isClicked={isClicked} isExpanded={isExpanded} isHidden={isHidden}>
            <button onClick={getList}>Admin</button>
            {/* {console.log(update)} */}
            {!isHidden && !isLoading && (allUserData[0].userId !== null) &&
                    <div>
                        {allUserData.map((item, index) => (
                            <User key={index} name={item} admin={props.userData.userId} useUpdate={useUpdate} update={index} setUser={renderList}/>
                        ))}
                    </div>
                }
        </AdminArea>
    );
}

export default AdminButtonArea;