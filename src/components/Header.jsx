const Header = ({ changeModalShowing }) => {
  const handleModalShowing = () => {
    changeModalShowing();
  };

  return (
    <section className="flex justify-between items-center p-4">
      <h1 className="font-bold text-3xl">Usuarios</h1>

      <button onClick={handleModalShowing} className="btn-primary">
        <i className="bx bx-plus"></i> Crear nuevo usuario
      </button>
    </section>
  );
};
export default Header;
