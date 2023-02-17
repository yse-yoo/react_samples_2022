import React, { useState } from 'react'

function ItemList(props) {

    const [users, setUsers] = useState(props.users)
    console.log(users)

    function onDeleteUser(index) {
        console.log('delete!')
        users[index] = null
        setUsers(users)
    }

    return (
        <div>
            <h2>ユーザ一覧</h2>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        {user.name}
                        <button onClick={() => onDeleteUser(index)}>削除</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;