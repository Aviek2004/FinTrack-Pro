import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import CashChart from "../components/CashChart";
import Settings from "../components/Settings";



const Home = ({ user, setUser }) => {
    
    const [page, setPage] = useState("dashboard");
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState(0);
    const [open, setOpen] = useState(false);
    const [transactionList, setTransactionList] = useState([]);
const [editingTransaction, setEditingTransaction] = useState(null);
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");

const [currency, setCurrency] = useState(
  localStorage.getItem("currency") || "₹"
);

const [darkMode, setDarkMode] = useState(
  localStorage.getItem("darkMode") === "true"
);

// Save Transactions
useEffect(() => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactionList)
  );
}, [transactionList]);

// Load Transactions
useEffect(() => {
  const savedTransactions = localStorage.getItem("transactions");

  if (savedTransactions) {
    const data = JSON.parse(savedTransactions);

    setTransactionList(data);

    let totalIncome = 0;
    let totalExpense = 0;

    data.forEach((item) => {
      if (item.type === "income") {
        totalIncome += item.amount;
      } else {
        totalExpense += item.amount;
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
    setTransactions(data.length);
  }
}, []);

// Save Dark Mode
useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
}, [darkMode]);


const addTransaction = (transaction) => {
  setTransactionList((prev) => [...prev, transaction]);

  if (transaction.type === "income") {
    setIncome((prev) => prev + transaction.amount);
    setBalance((prev) => prev + transaction.amount);
  } else {
    setExpense((prev) => prev + transaction.amount);
    setBalance((prev) => prev - transaction.amount);
  }

  setTransactions((prev) => prev + 1);
};

// 👇 Add this here
useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
}, [darkMode]);

const deleteTransaction = (id) => {

  const item = transactionList.find(
    (transaction) => transaction.id === id
  );

  if (!item) return;

  if (item.type === "income") {

    setIncome((prev) => prev - item.amount);

    setBalance((prev) => prev - item.amount);

  } else {

    setExpense((prev) => prev - item.amount);

    setBalance((prev) => prev + item.amount);

  }

  setTransactions((prev) => prev - 1);

  setTransactionList((prev) =>
    prev.filter((transaction) => transaction.id !== id)
  );
};

const updateTransaction = (updatedTransaction) => {

  const oldTransaction = transactionList.find(
    (item) => item.id === updatedTransaction.id
  );

  if (!oldTransaction) return;

  // Remove old values
  if (oldTransaction.type === "income") {
    setIncome((prev) => prev - oldTransaction.amount);
    setBalance((prev) => prev - oldTransaction.amount);
  } else {
    setExpense((prev) => prev - oldTransaction.amount);
    setBalance((prev) => prev + oldTransaction.amount);
  }

  // Add new values
  if (updatedTransaction.type === "income") {
    setIncome((prev) => prev + updatedTransaction.amount);
    setBalance((prev) => prev + updatedTransaction.amount);
  } else {
    setExpense((prev) => prev + updatedTransaction.amount);
    setBalance((prev) => prev - updatedTransaction.amount);
  }

  setTransactionList((prev) =>
    prev.map((item) =>
      item.id === updatedTransaction.id ? updatedTransaction : item
    )
  );

  setEditingTransaction(null);

};


const resetAllData = () => {

  const confirmReset = window.confirm(
    "Delete all transactions?"
  );

  if (!confirmReset) return;

  setTransactionList([]);
  setBalance(0);
  setIncome(0);
  setExpense(0);
  setTransactions(0);

  localStorage.removeItem("transactions");
};

function handleLogout() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("isLoggedIn");

  setUser(null);
}
return(
    <div
  className={`min-h-screen transition-all duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-100 text-black"
  }`}

>

    <Sidebar
        page={page}
        setPage={setPage}
        setOpen={setOpen}
        darkMode={darkMode}
    />

      <div className="ml-64">

        <Navbar
          user={user}
          setUser={setUser}
          darkMode={darkMode}
           handleLogout={handleLogout}
        />

        <main className="p-8">

          {page === "dashboard" && (
  <>
    <Dashboard />

    <SummaryCards
      balance={balance}
        income={income}
  expense={expense}
  transactions={transactions}
  currency={currency}
  darkMode={darkMode}
    />

    <CashChart
    income={income}
    expense={expense}
    darkMode={darkMode}
  />

    <TransactionTable
  transactions={transactionList}
  deleteTransaction={deleteTransaction}
  setEditingTransaction={setEditingTransaction}
  setOpen={setOpen}
  search={search}
  setSearch={setSearch}
  filter={filter}
  setFilter={setFilter}
  darkMode={darkMode}
/>
  </>
)}

          {page === "settings" && (
  <Settings
  user={user}
  setUser={setUser}
  currency={currency}
  setCurrency={setCurrency}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  resetAllData={resetAllData}
/>
)}

        </main>
        <TransactionForm
  open={open}
  setOpen={setOpen}
  addTransaction={addTransaction}
  editingTransaction={editingTransaction}
  updateTransaction={updateTransaction}
  darkMode={darkMode}
/>

      </div>
    </div>
)};

export default Home;