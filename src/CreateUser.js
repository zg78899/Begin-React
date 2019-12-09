import React from 'react';

function CreateUser({username,email,onChange,onCreate}){//필요한 값들을 props로 받아옴
return (
  <div>
    <input 
    name="username"
     placeholder="계정명"
      onChange={onChange}
       value={username} />
       
    <input 
    name="email"
     placeholder="이메일"
      onChange={onChange}
       value={username} />
    
    <button onClick={onCreate}>등록</button>
  </div>
)
}
export default CreateUser;
