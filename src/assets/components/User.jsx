const User = ({user, deleteUser, changeShowModal, setIsUserToUpdate}) => {

  const handleClickDelete = () => {
    deleteUser(user.id)
  }
  
  const handleClickUpdate = () => {
    changeShowModal()
    setIsUserToUpdate(user)
  }

  return (
    <article className="relative shadow-lg w-80 h-56 px-3 border border-neutral-200 overflow-auto	">

      <h4 className=" text-2xl py-3 font-bold	">{user.first_name} {user.last_name} </h4>
      <div>
        <h5 className=" text-neutral-200">Correo</h5>
        <span>{user.email}</span>
      </div>

      <div>
        <h5 className=" text-neutral-200">Cumpleaños</h5>
        <span><i className='bx bxs-gift'></i>{user.birthday || "Sin fecha"}</span>   
      </div>

      <button className="absolute bg-red-500 rounded-md h-8 w-8 right-12 bottom-5 text-gray-50 " onClick={handleClickDelete}><i className='bx bxs-trash-alt'></i></button>
      
      <button className="h-8 w-8 absolute right-2 bottom-5 rounded-md bg-gray-200 text-gray-100 border-zinc-500" onClick={handleClickUpdate}><i className='bx bxs-edit-alt' ></i></button>
    </article>
  )
}

export default User