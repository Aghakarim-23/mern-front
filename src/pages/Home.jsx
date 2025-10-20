import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
          const response = await axios.get("http://localhost:5001/")
          setUsers(response.data)
          console.log(response.data);

    }

    getData()
  },[])
  return (
    <div>
      {users.map((user,index) => (
        <div>
          <span>{user.username}</span>
          <span>{user.email}</span>
        </div>
      ))}
    </div>
  )
}

export default Home