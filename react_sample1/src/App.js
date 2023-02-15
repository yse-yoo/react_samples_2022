import './App.css';
import './Message';
import Message from './Message';


function App() {
  return (
    <div classname="app">
        <h2>React App</h2>
        <p>こんにちは</p>

        <Message message="親コンポーネントからデータを受け渡し" />
    </div>
  );
}

export default App;