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

import React from 'react'
import { useState } from 'react';

const App = () => {
  // const time = new Date().toLocaleTimeString();
  const [time, settime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    settime((new Date().toLocaleTimeString()));
  },1000);
  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}

export default App

