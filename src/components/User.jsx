import { useState } from "react"
import ConfirmModal from "./ConfirmModal"

const User = ({user, deleteUser, changeModalShowing, setIsUserToUpdate}) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false)
  
    const handleClickDelete = () => {
        setShowConfirmModal(true)
    }

    const handleConfirmDelete = () => {
        deleteUser(user.id)
        setShowConfirmModal(false)
    }

    const handleCancelDelete = () => {
        setShowConfirmModal(false);
    }

    const handleClickUpdate = () => {
        changeModalShowing()
        setIsUserToUpdate(user)
    }

    return (
    <article className="inline-block border border-gray-700 p-2">
        <h3 className="text-center text-lg font-bold">{user.first_name} {user.last_name}</h3>
        <div className="border border-gray-100 w-[90%] mx-auto"></div>
        <div>
            <h4 className="text-gray-400 text-xs font-roboto">CORREO</h4>
            <span>{user.email}</span>
        </div>
        <div>
            <h5 className="text-gray-400 text-xs font-roboto">CUMPLEAÑOS</h5>
            <span><i className='bx bx-gift'></i>{user.birthday || 'No registrado'}</span>
        </div>
        <div className="border border-gray-100 w-[90%] mx-auto my-2"></div>
        <div className="flex justify-end space-x-2">
        <button onClick={handleClickDelete} className="bg-secondary px-1 rounded-sm text-white"><i className='bx bx-trash '></i></button>
        <button onClick={handleClickUpdate} className="border border-gray-400 text-gray-400 px-1 rounded-sm"><i className='bx bx-pencil'></i></button>
        </div>

        <ConfirmModal
        isOpen={showConfirmModal}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />

    </article>
  )
}
export default User