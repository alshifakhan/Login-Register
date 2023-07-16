// import  {useEffect} from 'react'

// function Table() {
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(res => console.log(res))
//         .catch(er => console.log(er))
//     }, [])
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Table

import { useContext } from 'react'
import { UserContext} from './Home';
import './App.css'

function Table() {
    const User = useContext(UserContext);
  return (
    <div className='container'> 

                <table>
                    <thead>
                        <tr>
                            <th>Id_No</th>
                            <th>Name_Employees</th>
                            <th>Phone</th>
                            <th>Work_in_restaurent</th>
                            {/* <th>Image</th> */}
                        </tr>
                        <tbody>
                            {
                                User.map((item) => {
                                    return(
                                        <>
                            <td>{item.Id_No}</td>
                            <td>{item.Name_Employees}</td>
                            <td>{item.Phone}</td>
                            <td>{item.Work_in_restaurent}</td>
                            {/* <td><img src={item.Image} style={{height:'150px',width:'150px',margin:'20px'}}/></td> */}
                           
                                        </>
                                    )
                                })
                            }
                                    
                            </tbody>
                    </thead>
                </table>     
  </div>
  )
}
export default Table

