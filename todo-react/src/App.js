import { useRef, useState } from 'react';
import './App.css';
import TotoList from './Components/TodoList';
import CreateTodo from './Components/CreateTodo';

function App() {
  //to do list
  const [todos, setTodos] = useState([
    {
      id:1,
      content: '테스트1',
      active: false
    },
    {
      id:2,
      content: '테스트2',
      active: false
    },
    {
      id:3,
      content: '테스트3',
      active: false
    }
  ]);
  //인풋 입력값을 state로
  const [inputs, setInputs] = useState({
    content: ""
  });
  const {content} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const nextId = useRef(4);
  const onCreate = () => {
    setTodos([
      ...todos,
      { id:nextId.current, content: content, active: false}
    ])
    setInputs({
      content: "",
    })
    nextId.current += 1;
  }
  const onRemove = (id) => {
    setTodos(todos.filter(todo=> todo.id !==id))
  }
  const onToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id ?
      {...todo, active: !todo.active } : todo ))
  }
  return (
    <div className="App">
      <CreateTodo onChange={onChange} content={content} onCreate={onCreate} />
      <TotoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
