import { useEffect, useRef, useState } from 'react';
import './App.css';
import UserList from './Components/UserList';
import CreateUser from './Components/CreateUser';

function App() {
  //유저 항목을 나타내는 앱
  const [users, setUsers] = useState([
    {
      id:1,
      username: 'green',
      email: 'green@naver.com',
      active: false
    },
    {
      id:2,
      username: 'blue',
      email: 'blue@naver.com',
      active: false
    },
    {
      id:3,
      username: 'yellow',
      email: 'yellow@naver.com',
      active: false
    }
  ]);
  //인풋 입력값을 상태로 관리
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const nextId = useRef(4);
  const onCreate = () => {
    //users배열에 객체를 추가하기
    setUsers([
      ...users,
      { id:nextId.current, username: username, email: email, active: false }
    ])
    setInputs({
      username: "",
      email: ""
    })
    nextId.current +=1
  }
  const onRemove = (id) => {
    setUsers(users.filter(user=> user.id !== id))
  }
  const onToggle = (id) => {
    setUsers(users.map(user => user.id === id ? 
      {...user, active: !user.active } : user))
  }
  useEffect(()=>{
    console.log("렌더링 되었습니다.");
  },[])
  return (
    <div className="App">
      {/* {users: []} props.users 
      const { users, age}
      */}
      <CreateUser onChange={onChange} username={username} email={email} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default App;
