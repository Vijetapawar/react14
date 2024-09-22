function App() {
  let users = [{
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id:2,
    name:"jected",
    age: 24,
  },
  {
    id: 3,
    name: "joe",
    age: 33,
  }
];
 let users1 = [{
    id: 1,
    name: "John",
    age: 30,
  },
  {
    id:2,
    name:"jected",
    age: 24,
  },
  {
    id: 3,
    name: "joe",
    age: 33,
  }
];

  const r = users.map((u)=> <h1 key= {u.id}>{u.name} - {u.age}</h1>);
  const r1 = users1.map((u)=> <h1 key= {u.id}>{u.name} - {u.age}</h1>);



  return (
      <div>
        <h1>{r}</h1>
        <h2>{r1}</h2>      
      </div>  
)}

export default App;
