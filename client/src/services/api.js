import axios from "axios";

const API = axios.create({
  baseURL: "https://orderflow-2dfi.onrender.com/api",
});

export const getOrders = (params) =>
  API.get("/orders", { params });

export const createOrder = (data) =>
  API.post("/orders", data);

export const updateOrder = (id, data) =>
  API.put(`/orders/${id}`, data);

export const deleteOrder = (id) =>
  API.delete(`/orders/${id}`);
