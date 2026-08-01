import { useState, useEffect } from "react";

const Settings = ({
  user,
  setUser,
  currency,
  setCurrency,
  darkMode,
  setDarkMode,
  resetAllData,
}) => {
  const [name, setName] = useState(user?.name || "");


  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  const handleSubmit = (e) => {
  e.preventDefault();

  const updatedUser = {
    ...user,
    name,
  };

  // Save user
  localStorage.setItem("user", JSON.stringify(updatedUser));

  // Save currency
  localStorage.setItem("currency", currency);

  // Update React state
  setUser(updatedUser);

  // Show alert
  alert("Changes saved successfully!");

  // Nothing else needed—React will re-render automatically
};

  return (
    <div
  className={`rounded-xl p-8 shadow transition-all ${
    darkMode
      ? "bg-gray-800 text-white"
      : "bg-white text-black"
  }`}
>

      <h1 className="text-3xl font-bold">
        Settings
      </h1>

      <p
  className={`mt-2 ${
    darkMode ? "text-gray-300" : "text-gray-500"
  }`}
>
        Manage your account preferences.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >

        <div>

          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full rounded-lg border p-3 ${
  darkMode
    ? "bg-gray-700 border-gray-600 text-white"
    : "bg-white border-gray-300 text-black"
}`} 
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Currency
          </label>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            <option value="₹">INR (₹)</option>
            <option value="$">USD ($)</option>
            <option value="€">EUR (€)</option>
            <option value="£">GBP (£)</option>
          </select>

        </div>
        <div>

  <label className="mb-2 block font-medium">
    Dark Mode
  </label>

  <label className="flex items-center gap-3">

    <input
      type="checkbox"
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      className="h-5 w-5"
    />

    <span>Enable Dark Mode</span>

  </label>

</div>

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={resetAllData}
          className="ml-4 rounded-lg bg-red-600 px-6 py-3 text-white"
        >
          Reset All Data
        </button>

      </form>

    </div>
  );
};

export default Settings;