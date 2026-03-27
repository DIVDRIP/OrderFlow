import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getOrders = (params) =>
  API.get("/orders", { params });

export const createOrder = (data) =>
  API.post("/orders", data);

export const updateOrder = (id, data) =>
  API.put(`/orders/${id}`, data);

export const deleteOrder = (id) =>
  API.delete(`/orders/${id}`);