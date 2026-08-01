import { MdDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = ({ page, setPage, setOpen, darkMode, }) => {

  return (

    <aside
  className={`fixed left-0 top-0 flex h-screen w-64 flex-col border-r transition-all
  ${
    darkMode
      ? "bg-gray-900 text-white border-gray-700"
      : "bg-white text-black"
  }`}
>

      <div className="border-b p-6">

        <h1 className="text-2xl font-bold">

          FinTrack Pro

        </h1>

        <p
  className={`text-sm ${
    darkMode ? "text-gray-400" : "text-gray-500"
  }`}
>

          Enterprise Finance

        </p>

      </div>

      <div className="mt-8 flex flex-col gap-5 px-5">
  {/* Dashboard Button */}
  <button
    onClick={() => setPage("dashboard")}
    className={`flex items-center gap-3 rounded-xl border px-5 py-3 transition
      ${
        page === "dashboard"
  ? "border-blue-300 bg-blue-100 text-blue-600"
  : darkMode
  ? "border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
  : "border-gray-300 bg-white text-black hover:bg-gray-100"
      }`}
  >
    <MdDashboard size={22} />
    <span className="text-lg font-medium">Dashboard</span>
  </button>

  {/* Settings Button */}
  <button
    onClick={() => setPage("settings")}
    className={`flex items-center gap-3 rounded-xl border px-5 py-3 transition
      ${
        page === "settings"
  ? "border-blue-300 bg-blue-100 text-blue-600"
  : darkMode
  ? "border-gray-700 bg-gray-800 text-white hover:bg-gray-700"
  : "border-gray-300 bg-white text-black hover:bg-gray-100"
      }`}
  >
    <IoSettingsSharp size={22} />
    <span className="text-lg font-medium">Settings</span>
  </button>
</div>
      <div className="mt-auto p-6">

        <button
  onClick={() => setOpen(true)}
  className={`w-full rounded-xl py-3 transition
    ${
      darkMode
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-black text-white hover:bg-gray-800"
    }`}
>
  + Add Transaction
</button>

      </div>

    </aside>

  );

};

export default Sidebar;