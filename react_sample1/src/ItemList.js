import React from 'react'

function ItemList(props) {

    var users = props.users;
    console.log(users)

    return (
        <div>
            <h2>ユーザ一覧</h2>
            {users.map((user, index) => {
                return (
                    <div>{user.name}</div>
                )
            })}
        </div>
    )
}

export default ItemList;