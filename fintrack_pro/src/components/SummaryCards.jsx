import bank from "../assets/bank.png";
import increase from "../assets/increase.png";
import downtrend from "../assets/downtrend.png";
import piggyBank from "../assets/piggy-bank.png";


const SummaryCards = ({
  balance,
  income,
  expense,
  transactions,
  currency,
  darkMode,
}) => {
  const cards = [
  {
    title: "Current Balance",
    value: `${currency}${balance.toFixed(2)}`,
    image: bank,
    text: "text-black",
  },
  {
    title: "Total Income",
    value: `${currency}${income.toFixed(2)}`,
    image: increase,
    text: "text-green-600",
  },
  {
    title: "Total Expense",
    value: `${currency}${expense.toFixed(2)}`,
    image: downtrend,
    text: "text-red-600",
  },
  {
    title: "Transactions",
    value: transactions,
    image: piggyBank,
    text: "text-black",
  },
];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`rounded-xl border p-6 shadow-sm transition-all
${
  darkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white"
}`}
        >
            <img 
  src={card.image}
  alt={card.title}
  className="mb-4 h-14 w-14 object-contain"
/>
          <h3 className="text-gray-500">
            {card.title}
          </h3>

          <h1 className={`mt-2 text-3xl font-bold ${card.text}`}>
            {card.value}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;