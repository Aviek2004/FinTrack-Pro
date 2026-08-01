import { FiLogOut } from "react-icons/fi";

const Navbar = ({ user, darkMode, handleLogout }) => {
  return (
    <nav
      className={`flex items-center justify-end border-b px-8 py-4 transition-all ${
        darkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-5">
        <h2
          className={`font-medium ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          {user.name}
        </h2>

        <button
  onClick={handleLogout}
  className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition ${
    darkMode
      ? "border-gray-600 text-white hover:bg-red-600"
      : "border-gray-300 text-black hover:bg-red-500 hover:text-white"
  }`}
>
  <FiLogOut />
  Logout
</button>
      </div>
    </nav>
  );
};

export default Navbar;