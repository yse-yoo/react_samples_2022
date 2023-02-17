import './App.css';
import './Message';
import Message from './Message';
import ItemList from './ItemList';


var message= "親コンポーネントからデータを受け渡し";

function App() {

  return (
    <div classname="app">
        <h2>React App</h2>
        <p>こんにちは</p>

        <Message message={message} />

        <ItemList />
    </div>
  );
}

export default App;