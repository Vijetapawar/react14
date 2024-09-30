// import React from 'react'

// const App = () => {
//   const submittHandler = (e) => {
//     e.preventDefault();
//     const user = {
//       username : e.target.username.value,
//       email : e.target.email.value,
//     }
    
//     console.log(user);
//   };
//   return (
//     <div>
//       <form onSubmit={submittHandler}>
//         <input type="username" placeholder="username" name="username" />
//         <input type="email" placeholder="email" name="email" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
   
//   const [gender, setGender] = useState("others");

//   return (
//     <div>
//       <input type="radio" defaultValue="others" />
//       <input type="radio" 
//       name="gender"
//       checked={gender === "female" ? true:false}
//       defaultChecked="female"
//       onChange={(e)= ()=>{setGender(e.target.value)}}
//       />
//       Female
//       <select>
//         <option value="city">
          
//         </option>
//       </select>              
//     </div>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState("");
  const submitHandler = (e) =>{
   e.preventDefault();
  //  console.log(e.targer.username.value);
  console.log({username});
  
   
  }
  console.log(username);
  
  return (
    <div>
     <h1>React Forms</h1>    
     <form onSubmit={submitHandler}>
      <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="username" name="username"/>
      <button>Sbumit</button>
     </form>
    </div>
  )
}

export default App





