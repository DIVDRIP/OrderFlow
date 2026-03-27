import OrderCard from "./OrderCard";

const OrderList = ({ orders, updateStatus, deleteOrder }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-md w-full">
      <h2 className="text-white text-xl font-semibold mb-4">Orders</h2>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <div className="text-center py-6 bg-slate-900 rounded-lg text-gray-400">
            No orders found 📦
          </div>
        ) : (
          orders.map((order) => (
            <OrderCard
              key={order._id}
              order={order}
              updateStatus={updateStatus}
              deleteOrder={deleteOrder}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OrderList;
