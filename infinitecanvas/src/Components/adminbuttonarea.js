import React, {useState} from 'react';
import {AdminArea} from './Styled-Components/styled-components';
import User from './user';

function AdminButtonArea() {
    const [isClicked, setIsClicked] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const allUsers = 
        ["bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",
        "bob", "mike", "john", "kevin",]

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

    return (
        <AdminArea isClicked={isClicked} isExpanded={isExpanded} isHidden={isHidden}>
            <button onClick={() => renderList()}>Admin</button>
            {!isHidden &&
                <div>
                    {allUsers.map(item => (
                        <User name={item}/>
                    ))}
                </div>
            }
        </AdminArea>
    );
}

export default AdminButtonArea;