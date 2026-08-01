import { FiEdit, FiTrash2 } from "react-icons/fi";

const TransactionTable = ({
  transactions,
  deleteTransaction,
  setEditingTransaction,
  setOpen,
  search,
  setSearch,
  filter,
  setFilter,
  darkMode,
}) => {


const filteredTransactions = transactions.filter((transaction) => {
  const matchesSearch = transaction.description
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesFilter =
    filter === "All" || transaction.type === filter.toLowerCase();

  return matchesSearch && matchesFilter;
});
  return (
    <div
className={`mt-8 rounded-xl border p-6 shadow-sm transition-all
${
darkMode
? "bg-gray-800 text-white border-gray-700"
: "bg-white"
}`}
>

      <h2 className="mb-5 text-2xl font-bold">
        All Transactions
      </h2>

      <div className="mb-6 flex gap-4">

  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search transactions..."
    className="w-full rounded-lg border p-3"
  />

  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="rounded-lg border p-3"
  >
    <option>All</option>
    <option>Income</option>
    <option>Expense</option>
  </select>

</div>

      {filteredTransactions.length === 0 ? (
        <p className="text-gray-500">
          No transactions added yet.
        </p>
      ) : (
        <table className="w-full">

          <thead className="border-b">

            <tr>

              <th className="py-3 text-left">
                Date
              </th>

              <th className="text-left">
                Description
              </th>

              <th className="text-left">
                Category
              </th>

              <th className="text-left">
                Amount
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredTransactions.map((item) => (

              <tr
                key={item.id}
                className="border-b"
              >

                <td className="py-4">
                  {item.date}
                </td>

                <td>
                  {item.description}
                </td>

                <td>
                  {item.category}
                </td>

                <td
                  className={
                    item.type === "income"
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {item.type === "income" ? "+" : "-"}
                    {localStorage.getItem("currency") || "₹"}
                    {item.amount}
                </td>

                <td>

                  <div className="flex justify-center gap-4">

                    <button
  onClick={() => {
    setEditingTransaction(item);
    setOpen(true);
  }}
>
  <FiEdit />
</button>

                    <button
                      onClick={() =>
                        deleteTransaction(item.id)
                      }
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      )}
    </div>
  );
};

export default TransactionTable;