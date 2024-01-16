import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hometable from '../components/Hometable'
import LoadingSpinner from '../components/LoadingSpinner'
import { registerContext } from '../components/Contextshare'
import Alert from 'react-bootstrap/Alert';
import {  deleteUser, getUsers } from '../services/allApi'





function Home() {

  const [alluserData,setalluserData]=useState([])

  const { registerData, setregisterData } = useContext(registerContext)



  const [showSpin, setShowSpin] = useState(true)

  const [search,setSearch]=useState("")

  console.log(search);

  useEffect(() => {

    getAllEmployees()

    setTimeout(() => {
      setShowSpin(false)
    }, 2000);
  }, [search])

  const getAllEmployees=async()=>{
    const response=await getUsers(search)
    console.log(response);

    if(response.status==200){
      setalluserData(response.data)
    }
    else{
      alert("can not fetch data")
    }
  }
  console.log(alluserData);

  // delete employee

  const removeUser=async(id)=>{
    const response=await deleteUser(id)

    if(response.status===200){
      getAllEmployees()
    }
    else{
      alert("Operation failed ")
    }
  }


  return (
    <>

    {
      registerData&& <Alert variant='success' onClose={()=>setregisterData("")} dismissible >

      {registerData.fname.toUpperCase()} registered Succesfully

      </Alert>
    }
      {
        showSpin ?
          <LoadingSpinner /> :



          <div className='container'>

            <div className='search d-flex  align-items-center mt-3 '>
              <span>Search:</span>
              <input onChange={e=>setSearch(e.target.value)} type="text" placeholder='Search By Employee Name'  className='form-control ms-3 w-50' />
              <Link to={'/add'} className='btn btn-success m-auto'><i class="fa-solid fa-user-plus"></i>Add</Link>
            </div>

            <div className="table mt-5">
              <h2 className='fw-bolder'>List Of All Employees</h2>
              <Hometable displayData={alluserData}  removeUser={removeUser}  />
              {/* */}
            </div>

          </div>

      }


    </>
  )
}

export default Home