import React, { useState } from 'react'

function ItemList(props) {

    const [users, setUsers] = useState(props.users)

    function onDeleteUser(id) {
        // TODO: APIでユーザ削除

        setUsers((current) => {
            return current.filter((user) => user.id !== id)
        })
    }

    return (
        <div>
            <h2>ユーザ一覧</h2>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        {user.name}
                        <button onClick={() => onDeleteUser(user.id)}>削除</button>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;