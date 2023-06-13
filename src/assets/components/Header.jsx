const Header = ({changeShowModal}) => {

  return (
    <section className='flex justify-between p-10 px-9 max-w-[1200px] mx-auto'>
       

          <h1 className=' left-0 font-bold text-3xl '>Usuarios</h1>

          <button onClick={changeShowModal} className='btn-primary right-0'><i className='bx bx-plus'></i>Crear nuevo usuario</button>

        
      </section>
  )
}

export default Header