const User = ({
  user,
  deleteUser,
  changeShowModal,
  setIsUserToUpdate,
  isDarkMode,
}) => {
  const handleUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleClickDelete = () => {
    deleteUser(user.id);
  };

  const handleClickUpdate = () => {
    changeShowModal();
    setIsUserToUpdate(user);
  };

  return (
    <article className={`${isDarkMode ? "border-neutral-200" : "border-neutral-500"} relative shadow-lg w-80 h-56 px-3 border overflow-auto`}>
      <h4
        className={`text-2xl py-3 font-bold ${isDarkMode ? "whiteMode" : "darkMode text-slate-100"}`}
      >
        {handleUpperCase(user.first_name)} {handleUpperCase(user.last_name)}
      </h4>
      <div>
        <h5 className=" text-neutral-300">Correo:</h5>
        <span className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-100"}`}>{user.email}</span>
      </div>

      <div>
        <h5 className="text-neutral-300">Cumpleaños:</h5>
        <span className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-100"}`}>
          <i className="bx bxs-gift"></i>
          {user.birthday || "Sin fecha"}
        </span>
      </div>
      <div className="absolute right-3 bottom-5">
        <div className="flex gap-2">
          <button
            className="bg-red-500 flex justify-center items-center text-2xl text-gray-700 hover:bg-red-600 rounded-md w-8 h-8 border border-zinc-400"
            onClick={handleClickDelete}
          >
            <i className="bx bxs-trash-alt"></i>
          </button>

          <button
            className="bg-gray-200 flex justify-center items-center text-2xl text-gray-700 hover:bg-gray-300 rounded-md w-8 h-8 border border-zinc-400"
            onClick={handleClickUpdate}
          >
            <i className="bx bxs-edit-alt"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default User;
