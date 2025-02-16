import { FaWallet, FaPlus, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Wallet() {
  const transactions = [
    { id: 1, type: "Deposit", amount: "+$500", date: "Feb 12, 2025", icon: <FaArrowDown className='text-green-500' /> },
    { id: 2, type: "Withdrawal", amount: "-$200", date: "Feb 10, 2025", icon: <FaArrowUp className='text-red-500' /> },
    { id: 3, type: "Deposit", amount: "+$300", date: "Feb 8, 2025", icon: <FaArrowDown className='text-green-500' /> },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Wallet Balance Card */}
      <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Wallet Balance</h2>
          <p className="text-2xl font-bold mt-1">$1,500</p>
        </div>
        <FaWallet className="text-4xl" />
      </div>

      {/* Add Funds Button */}
      <button className="mt-4 w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600">
        <FaPlus className="mr-2" /> Add Funds
      </button>

      {/* Transaction History */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-3">Transaction History</h3>
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id} className="flex items-center justify-between py-2 border-b last:border-none">
              <div className="flex items-center">
                {tx.icon}
                <span className="ml-3 font-medium">{tx.type}</span>
              </div>
              <div className="text-right">
                <p className="font-bold">{tx.amount}</p>
                <p className="text-gray-500 text-sm">{tx.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
