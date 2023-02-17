import './App.css';
import './Message';
import Message from './Message';
import ItemList from './ItemList';
import React, {useState} from 'react';


var message = "親コンポーネントからデータを受け渡し";

function App() {
    // TODO: APIからユーザデータを取得
    var defaultUsers = [
        { id: 1, name: 'Alice', email: 'alice@test.com', password: '1111' },
        { id: 2, name: 'Bob', email: 'bob@test.com', password: '1111' },
        { id: 3, name: 'Chris', email: 'chris@test.com', password: '1111' },
    ];

    const [users, setUsers] = useState(defaultUsers)

    return (
        <div className="app">
            <h2>React App</h2>
            <p>こんにちは</p>

            <Message message={message} />

            <ItemList users={users} />
        </div>
    );
}

export default App;