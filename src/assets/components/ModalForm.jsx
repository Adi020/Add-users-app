import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalForm = ({
  isShowModal,
  createUser,
  isUserToUpdate,
  updateUser,
  resetModalForm,
  isDarkMode,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (!data.birthday) data.birthday = null;
    if (isUserToUpdate) {
      updateUser(data, reset);
    } else {
      createUser(data, reset);
    }
  };

  const handleCloseModal = () => {
    resetModalForm(reset);
  };

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate);
    }
  }, [isUserToUpdate]);

  return (
    <section
      className={`z-50 fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${
        isShowModal ? "opacity-100 visible" : "invisible"
      } transition-opacity`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className={`${isDarkMode ? "whiteMode bg-white" : "darkMode bg-neutral-800"} w-[280px] p-4 grid gap-6 relative`}
      >
        <h3 className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-100"}  font-bold text text-3xl`}>
          {isUserToUpdate ? "Editar Usuario" : "Nuevo Usuario"}
        </h3>

        {/*//? Nombre */}
        <div className="grid gap-2">
          <label className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-200"} font-bold text-sm`} htmlFor="">
            Nombre
          </label>
          <input
            required
            placeholder="Ingresa tu nombre"
            className={`${isDarkMode ? "whiteMode bg-gray-100" : "darkMode bg-neutral-700 text-slate-200"} outline-none p-2`}
            type="text"
            {...register("first_name")}
          />
        </div>

        {/*//? Apellido */}
        <div className="grid gap-2">
          <label className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-200"} font-bold text-sm`} htmlFor="">
            Apellido
          </label>
          <input
            required
            placeholder="Ingresa tu apellido"
            className={`${isDarkMode ? "whiteMode bg-gray-100" : "darkMode bg-neutral-700 text-slate-200"} outline-none p-2`}
            type="text"
            {...register("last_name")}
          />
        </div>

        {/*//? Correo */}
        <div className="grid gap-2">
          <label className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-200"} font-bold text-sm`} htmlFor="">
            Correo
          </label>
          <input
            required
            placeholder="Ingresa tu correo"
            className={`${isDarkMode ? "whiteMode bg-gray-100" : "darkMode bg-neutral-700 text-slate-200"} outline-none p-2`}
            type="email"
            {...register("email")}
          />
        </div>

        {/*//? Contraseña */}
        <div className="grid gap-2">
          <label className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-200"} font-bold text-sm`} htmlFor="">
            Contraseña
          </label>
          <input
            required
            placeholder="Ingresa tu contraseña"
            className={`${isDarkMode ? "whiteMode bg-gray-100" : "darkMode bg-neutral-700 text-slate-200"} outline-none p-2`}
            type="password"
            {...register("password")}
          />
        </div>

        {/*//? Cumpleaños */}
        <div className="grid gap-2">
          <label className={`${isDarkMode ? "whiteMode" : "darkMode text-slate-200"} font-bold text-sm`} htmlFor="">
            Cumpleaños
          </label>
          <input
            className={`${isDarkMode ? "whiteMode bg-gray-100" : "darkMode bg-neutral-700 text-slate-200"} outline-none p-2`}
            type="date"
            {...register("birthday")}
          />
        </div>

        <button
          onClick={handleCloseModal}
          type="button"
          className="absolute text-2xl hover:text-secondary right-2 top-2"
        >
          <i className="bx bx-x"></i>
        </button>

        <button className="btn-primary">
          {isUserToUpdate ? "Guardar Cambios" : "Agregar Nuevo Usuario"}
        </button>
      </form>
    </section>
  );
};

export default ModalForm;
