import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value /**여기서 name은 username와 email이다. */ 
    });
};
const [users,setUsers] =useState([
  {
    id: 1,
    username: 'kim',
    email: 'abx@naver.com',
    active:true,
  },
  {
    id: 2,
    username: 'park',
    email: 'zxc@gmail.com',
    active:true,
  },
  {
    id: 3,
    username: 'lee',
    email: 'zxczc@gmail.com',
    active:false,
  }
]);

/**push splice sort등은 원본 배열을 바꾸기 때문에 사용하지 않는것이 좋다. */
/**spread 연산자를 사용하여 원본 배열을 복사한 후 사용한다. */


const nextId = useRef(4); 
/** 이 값이 바뀔때 만다 굳이 rerender할 필요가 없기 때문에 useRef을 사용하여 변수로 관리를 함*/
/**useRef는 특정 dom을 선택하고 싶을 때 사용할수있지만, 어떤한 변수를 기억하고 싶을때 ,rerendering되어도 계속 기억된다. */
/**component가 rerender되어도 useRef(4)는 4 이다.*/
const onCreate = () => {
  const user={
    id:nextId.current,
    username,
    email,

  };
  // setUsers([...users,user]);
  setUsers(users.concat(user));/** concat함수를 사용한다. */
  setInputs({
    username:'',
    email:''
  });
  console.log(nextId.current)//4
  nextId.current += 1; /** useRef의 값을 조회하여 바꾸게 되면 이값도 바뀌게 된다. 이 값이 바뀐다고 component가 rerender되지 않는다.*/
};
const onRemove = id => {
  setUsers(users.filter(user=>user.id !== id));
}

const onToggle= id =>{
  setUsers(users.map(
    user => user.id===id? {...user,active:!user.active}:user
    ))
}
return (
  <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
  </>
)

  /** return (
  //   // <Counter />
  // ) 
 
  // return (
  //   <Wrapper>
  //     <Hello name='react' color='red' isSpecial={true}/>// 기본값은 true이다.
  //     <Hello color='pink' />
  //   </Wrapper>


  // )*/
}

export default App;
