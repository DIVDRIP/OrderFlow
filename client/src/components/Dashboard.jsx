const Dashboard = ({ orders }) => {
  const total = orders.length;

  const pending = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const delivered = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      
      <div className="bg-slate-800 p-4 rounded-xl shadow-md">
        <h3 className="text-gray-400 text-sm">Total Orders</h3>
        <p className="text-white text-2xl font-bold">{total}</p>
      </div>

      <div className="bg-yellow-500 p-4 rounded-xl shadow-md">
        <h3 className="text-black text-sm">Pending</h3>
        <p className="text-black text-2xl font-bold">{pending}</p>
      </div>

      <div className="bg-green-500 p-4 rounded-xl shadow-md">
        <h3 className="text-black text-sm">Delivered</h3>
        <p className="text-black text-2xl font-bold">{delivered}</p>
      </div>

    </div>
  );
};

export default Dashboard;