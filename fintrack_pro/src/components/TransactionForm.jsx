import { useEffect, useState } from "react";

const TransactionForm = ({
  open,
  setOpen,
  addTransaction,
  editingTransaction,
  updateTransaction,
  darkMode,
}) => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    amount: "",
    date: "",
    category: "",
  });

  useEffect(() => {
    if (editingTransaction) {
      setFormData(editingTransaction);
    }
  }, [editingTransaction]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted");
  console.log(formData);

  if (
    !formData.type ||
    !formData.description ||
    !formData.amount ||
    !formData.date ||
    !formData.category
  ) {
    alert("Please fill all fields");
    return;
  }

  if (editingTransaction) {
    updateTransaction({
      ...formData,
      amount: Number(formData.amount),
    });
  } else {
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
      id: Date.now(),
    });
  }

  setFormData({
    type: "",
    description: "",
    amount: "",
    date: "",
    category: "",
  });

  setOpen(false);
};

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <form
        onSubmit={handleSubmit}
        className={`w-500px rounded-xl p-8 shadow-xl ${
  darkMode
    ? "bg-gray-800 text-white"
    : "bg-white text-black"
}`}
      >

        <div className="mb-6 flex items-center justify-between">

          <h1 className="text-2xl font-bold">
            {editingTransaction ? "Edit Transaction" : "Add Transaction"}
            </h1>

          <button
            type="button"
            onClick={() => 
                {setOpen(false)}
            }
            className={`text-2xl ${
  darkMode ? "text-white" : "text-black"
}`}
          >
            ✕
          </button>

        </div>

        <div className="space-y-5">

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={`w-full rounded-lg border p-3 ${
  darkMode
    ? "bg-gray-700 border-gray-600 text-white"
    : "bg-white border-gray-300 text-black"
}`}
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className={`w-full rounded-lg border p-3 ${
  darkMode
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
    : "bg-white border-gray-300 text-black"
}`}
          />

          <div className="flex gap-4">

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount"
              className={`w-1/2 rounded-lg border p-3 ${
  darkMode
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
    : "bg-white border-gray-300 text-black"
}`}
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-1/2 rounded-lg border p-3 ${
  darkMode
    ? "bg-gray-700 border-gray-600 text-white"
    : "bg-white border-gray-300 text-black"
}`}
            />

          </div>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full rounded-lg border p-3 ${
  darkMode
    ? "bg-gray-700 border-gray-600 text-white"
    : "bg-white border-gray-300 text-black"
}`}
          >
            <option value="">Category</option>
            <option>Food & Dining</option>
            <option>Shopping</option>
            <option>Recharge & Bills</option>
            <option>Petrol & Auto</option>
            <option>Utilities</option>
            <option>Salary</option>
            <option>Entertainment</option>
            <option>Others</option>
          </select>

          <button
          type="submit"
            className="w-full rounded-lg bg-black py-3 text-white">
            {editingTransaction ? "Update Transaction" : "Save Transaction"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default TransactionForm;