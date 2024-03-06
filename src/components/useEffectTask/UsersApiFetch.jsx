import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UsersApiFetch = () => {
    const API = "https://jsonplaceholder.typicode.com/users";
    const [userData, setUserData] = useState([]);
    
    

    const fetchAPILink=async(url)=>{
        try {
           await axios.get(url)
           .then((res)=>{
             console.log(res.data)
             setUserData(res.data);
            })
            .catch(error=> console.log(error))
            // const data= await response.json();
         
                // setUserData([...userData, data]);
            
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
    console.log("object")
       

        fetchAPILink(API)
    },[]);

    console.log("user data: ",userData);

    const handleSearchUser=(e)=>{
        const data= e.target.value;
        console.log(data);
        if(data){
            const filterUser=userData?.map(item=>item).filter((item)=>item.name.toLowerCase().includes(data.toLowerCase()));
            console.log("filterUser", filterUser);
            setUserData(filterUser);
        }
        else{
            fetchAPILink(API);
        }
    }


  return (
    <div className=''>
        <input className='w-[70%] border-2 ml-[15vw] p-1 rounded-md mt-10' type='text' placeholder='Search data here' onChange={handleSearchUser}/>
       <table className="table border-collapse border w-[90%] border-slate-400 mx-auto mt-7">
  <thead>
    <tr>
      <th className='border border-slate-300 p-4'>Name</th>
      <th className='border border-slate-300 p-4'>Email</th>
      <th className='border border-slate-300 p-4'>Address</th>
      <th className='border border-slate-300 p-4'>Company</th>
      <th className='border border-slate-300 p-4'>Phone</th>
      <th className='border border-slate-300 p-4'>Website</th>

    </tr>
  </thead>
   <tbody>
      {userData.length>0 && userData?.map((user)=>(
        <tr className='text-center'>
            
        <td className='border border-slate-300 p-4'>{user.name}</td>
        <td className='border border-slate-300'>{user.email}</td>
        <td className='border border-slate-300'>{user.address.suite}, {user.address.street}, {user.address.city}</td>
        <td className='border border-slate-300 p-6'>{user.company.name}</td>
        <td className='border border-slate-300 p-2'>{user.phone}</td>
        <td className='border border-slate-300 p-2'>{user.website}</td>
      </tr>
      
        ))}
     

      </tbody>
</table>
        {userData?.length == 0 && <h2 className='text-center'>Result Not found</h2>}
    </div>
  )
}

export default UsersApiFetch
