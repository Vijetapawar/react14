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
  const [title, settitle] = useState("hello ji");
  const changeInfo = () => {
    settitle("it's changed");    
    console.log(title);
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeInfo}> click me!</button>

    </div>
  )
}

export default App
