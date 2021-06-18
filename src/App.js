import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick= {() => {console.log("I am clicked!")}} />
//     </React.Fragment>
//   );
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 20 },
    { name: "Hanako", age: 10 },
    { name: "Tanaka" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={ profile.name } age={ profile.age } key={ index } />
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, {props.name} and {props.age} years old!</div>
}

User.defaultProps = {
  age: "None"
}

export default App;
