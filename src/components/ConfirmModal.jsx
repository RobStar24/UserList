const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${
        isOpen ? "opacity-100 visible" : "invisible opacity-0"
      } transition-opacity`}>
    <article className="bg-white w-[350px] p-4 grid gap-6 relative">
        <h2 className="font-bold text-3-xl text-center">¿Estás seguro de borrar este usuario?</h2>
        <button onClick={onConfirm} className="btn-secondary rounded-md">Sí, borrar</button>
        <button onClick={onClose} className="btn-primary rounded-md">Cancelar</button>
    </article>
    </section>
  );
};
export default ConfirmModal;
