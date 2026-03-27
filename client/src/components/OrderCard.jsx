import { Trash2, CheckCircle } from "lucide-react";

const OrderCard = ({ order, updateStatus, deleteOrder }) => {
  const getStatusColor = () => {
    if (order.status === "Pending") return "bg-yellow-500 text-black";
    if (order.status === "Delivered") return "bg-green-500 text-black";
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-md flex justify-between items-center hover:scale-[1.02] transition">
      <div>
        <h2 className="text-lg font-semibold text-white">
          {order.customerName}
        </h2>
        <p className="text-sm text-gray-400">
          {order.item} x{order.quantity}
        </p>
        <p className="text-xs text-gray-500">{order.phone}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor()}`}>
          {order.status}
        </span>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => updateStatus(order._id)}
            disabled={order.status === "Delivered"}
            className={`px-3 py-1 rounded ${
              order.status === "Delivered"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-500 text-black"
            }`}
          >
            <CheckCircle size={16} />
          </button>

          <button
            onClick={() => deleteOrder(order._id)}
            className="bg-red-500 px-3 py-1 rounded text-white"
          >
            <Trash2 size={16} />
          </button>
          <button
            onClick={() =>
              window.open(
                `https://wa.me/91${order.phone}?text=Your order for ${order.item} is ${order.status}`,
                "_blank",
              )
            }
            className="bg-green-600 px-3 py-1 rounded text-white"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
