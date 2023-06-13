import User from "./User";

const UserList = ({
  users,
  deleteUser,
  changeModalShowing,
  setIsUserToUpdate,
}) => {
  return (
    <section className="grid grid-cols-min-300-max-320 gap-4 justify-center">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeModalShowing={changeModalShowing}
          setIsUserToUpdate={setIsUserToUpdate}
        />
      ))}
    </section>
  );
};
export default UserList;
