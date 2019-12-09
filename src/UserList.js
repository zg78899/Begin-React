import React from 'react';
//처음에 이런 방식을 사용하면 계속해서 배열이 늘어나거나 하는 경우에 사용할수없다.
//따라서 배열의 내장 함수인 map,forEach등을 사용한다.객체 상태의 배열 컴포넌트 형태의 배열로 변형을 해준다.

function User({user,onRemove,onToggle}){
  const {username,email,id,active}=user;
  return(
    <div>
        <b
       
         style={{
          color:active?'green':'black',
          cursor:'pointer'
        }}
        onClick={()=>onToggle(id)}
        >
        {username}</b>&nbsp;<span>({email})</span>
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
  )
}

function UserList({users,onRemove,onToggle}) {
 
  return (
    <div>
      {
        users.map(
          (user)=>(
          <User user={user}
             key={user.id}
             onRemove={onRemove}
             onToggle={onToggle}
             />
             )
        )
      }
    
    </div>
  )
}
export default UserList;
