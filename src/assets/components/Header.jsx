const Header = ({ changeShowModal, isDarkMode }) => {
  return (
    <section className="flex justify-between p-10 px-9 max-w-[1200px] mx-auto">
      <h1 className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-100"} left-0 font-bold text-3xl `}>Usuarios</h1>

      <button className="btn-primary" onClick={changeShowModal}>
        <i className="bx bx-plus"></i>Crear nuevo usuario
      </button>
    </section>
  );
};

export default Header;
