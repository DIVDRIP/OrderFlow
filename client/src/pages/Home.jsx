import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import OrderList from "../components/OrderList";
import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";
import {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../services/api";

const Home = () => {
  const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
  fetchOrders();
}, [search, filterStatus]);

  const fetchOrders = async () => {
  try {
    const res = await getOrders({
      search,
      status: filterStatus,
    });
    setOrders(res.data);
  } catch (error) {
    console.error(error);
  }
};



  // Add Order
  const addOrder = async (newOrder) => {
    try {
      await createOrder(newOrder);
      fetchOrders(); // refresh
    } catch (error) {
      console.error(error);
    }
  };

  // Update Status
  const updateStatus = async (id) => {
    try {
      await updateOrder(id, { status: "Delivered" });
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Order
  const deleteOrderHandler = async (id) => {
    try {
      await deleteOrder(id);
      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };



  const filteredOrders = orders.filter((order) => {
    const matchSearch = order.customerName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus = filterStatus ? order.status === filterStatus : true;

    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="p-6">
        <h2 className="text-white text-2xl font-semibold mb-4">Dashboard</h2>

        <Dashboard orders={orders} />
        <SearchBar
          search={search}
          setSearch={setSearch}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <OrderForm addOrder={addOrder} />
          <OrderList
            orders={orders}
            updateStatus={updateStatus}
            deleteOrder={deleteOrderHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
