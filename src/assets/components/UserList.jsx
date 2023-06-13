import React from 'react'
import User from './User'

const UserList = ({users, deleteUser, changeShowModal, setIsUserToUpdate}) => {
  console.log(users)
  return (
    <section className=" grid gap-x-16 gap-y-9 grid-cols-[repeat(auto-fill,_290px)] justify-center max-w-[1024px] mx-auto place-items-center pt-5 pb-10">
        
    {users.map((user) => (
     <User 
     key={user.id} 
     user={user} 
     deleteUser={deleteUser} 
     changeShowModal={changeShowModal} 
     setIsUserToUpdate={setIsUserToUpdate}
        
     />))}

    </section>
  )
}

export default UserList