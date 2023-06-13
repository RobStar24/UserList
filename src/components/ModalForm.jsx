import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalForm = ({
  isModalShowing,
  createUser,
  isUserToUpdate,
  updateUser,
  resetModalForm
}) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (!data.birthday) data.birthday = null;
    if (isUserToUpdate) {
        updateUser(data, reset)
    }else {
    createUser(data, reset);
    }
  };

  const handleCloseModal = () => {
    resetModalForm(reset);
  };

  useEffect(() => {
    if (isUserToUpdate) {
        reset(isUserToUpdate)
    }
  }, [isUserToUpdate])

  return (
    <section
      className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${
        isModalShowing ? "opacity-100 visible" : "invisible opacity-0"
      } transition-opacity`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white w-[280px] p-4 grid gap-6 relative"
      >
        <h3 className="font-bold text-3-xl">{isUserToUpdate ? "Editar usuario" : "Nuevo Usuario"}</h3>

        {/* //? Nombre */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="nombre">
            Nombre
          </label>
          <input
            placeholder="Ingresa tu nombre..."
            className="bg-gray-100 outline-none p-2"
            type="text"
            id="nombre"
            {...register("first_name")}
          />
        </div>

        {/* //? Apellidos */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="apellidos">
            Apellidos
          </label>
          <input
            placeholder="Ingresa tu apellido..."
            className="bg-gray-100 outline-none p-2"
            type="text"
            id="apellidos"
            {...register("last_name")}
          />
        </div>

        {/* //? Correo */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="correo">
            Correo
          </label>
          <input
            placeholder="Ingresa tu correo..."
            className="bg-gray-100 outline-none p-2"
            type="email"
            id="correo"
            {...register("email")}
          />
        </div>

        {/* //? Contraseña */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="password">
            Contraseña
          </label>
          <input
            placeholder="Ingresa tu contraseña..."
            className="bg-gray-100 outline-none p-2"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>

        {/* //? Cumpleaños */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            placeholder="Ingresa tu cumpleaños..."
            className="bg-gray-100 outline-none p-2"
            type="date"
            id="birthday"
            {...register("birthday")}
          />
        </div>
        <button
          onClick={handleCloseModal}
          type="button"
          className="absolute top-2 right-2 text-2xl hover:text-secondary"
        >
          <i className="bx bx-x"></i>
        </button>

        <button className="btn-primary">{isUserToUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}</button>
      </form>
    </section>
  );
};
export default ModalForm;
