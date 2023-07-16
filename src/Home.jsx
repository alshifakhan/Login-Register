
// import Table from './Table';

// function Home() {
//   return (
//     <div>
//      <Table />
//     </div>
//   )
// }

// export default Home;



import React from 'react'
import User from './User'
// import Table from './Table'
import A from './A';

export const UserContext = React.createContext();


function Home() {
  return (
    <div className="App" >

      
          <UserContext.Provider value={User} >
                <A/>
          </UserContext.Provider>
        
    </div>

);
}
export default Home;