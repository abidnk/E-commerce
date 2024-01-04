import React, { useState,useEffect } from "react";

const Newdiv = () => {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.postalpincode.in/pincode/673307')
    .then(response => response.json())
    .then(Data => setPosts(Data[0].PostOffice))
  },[])

  return (

    <div>
       <table>
        
        <tr>
        <th>Name</th>
        <th>Pincode</th>
        <th>Block</th>
        <th>Country</th>
        <th>State</th>
        </tr>
        
        <tbody>
          {posts.map((post,index) =>(
            <tr key={index}>
              <td>{post.Name}</td>
              <td>{post.Pincode}</td>
              <td>{post.Block}</td>
              <td>{post.Country}</td>
              <td>{post.State}</td>
            </tr>
          ))}
        </tbody>
       </table>
    </div>

  )
}

export default Newdiv