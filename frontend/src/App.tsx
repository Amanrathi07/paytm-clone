
import axios from 'axios'

function App() {

  async function btnClick(){
    const responce =await axios.post("http://localhost:3001/auth/v1/signin",{
       "email": "aman@gmail.com",
       "password": "aman@gmail.com"
    },{withCredentials:true});

   
  }

  return (
    <div>
      <button onClick={btnClick}>
        clickme
      </button>
    </div>
  )
}

export default App
