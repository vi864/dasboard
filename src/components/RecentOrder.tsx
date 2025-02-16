import { RecentOrders } from "../data/data";


const RecentOrder = () => {
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Recent Orders
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            <th className="px-4 py-2 text-left">Customer</th>
                            <th className="px-4 py-2 text-left">Order Number</th>
                            <th className="px-4 py-2 text-left">Amount</th>
                            <th className="px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RecentOrders?.map((order: any, i: number) => (
                            <tr
                                key={i}
                                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td className="px-4 py-2 flex flex-row items-center">
                                    <img
                                        src={order.profile}
                                        alt={order.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <p className="px-4 py-2 text-gray-800 dark:text-gray-300">
                                        {order.name}
                                    </p>
                                </td>

                                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">
                                    {order.orderNumber}
                                </td>
                                <td className="px-4 py-2 text-gray-800 dark:text-gray-300">
                                    {order.amount}
                                </td>
                                <td className="px-4 py-2">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded ${order.status === 'Delivered'
                                                ? 'bg-green-100 text-green-700 rounded-xl'
                                                : order.status === 'Cancelled'
                                                    ? 'bg-red-100 text-red-700 rounded-xl'
                                                    : 'bg-yellow-100 text-yellow-700 rounded-xl'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrder;
