import { useState } from "react";

const OrderForm = ({ addOrder }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    item: "",
    quantity: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addOrder(formData);

    setFormData({
      customerName: "",
      phone: "",
      item: "",
      quantity: "",
      address: "",
    });
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-md w-full">
      <h2 className="text-white text-xl font-semibold mb-4">Add New Order</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-900 text-white outline-none"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-900 text-white outline-none"
          required
        />

        <input
          type="text"
          name="item"
          placeholder="Item"
          value={formData.item}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-900 text-white outline-none"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-900 text-white outline-none"
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-900 text-white outline-none"
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded transition duration-200"
        >
          Add Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
