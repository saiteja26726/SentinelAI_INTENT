 import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

// Trigger Service Bus Flow
export const triggerOutbound = async (payload) => {
  const res = await api.post("/gibraltar/pull-outbound", payload);
  return res.data;
};

// Fetch Data (no Redis score)
export const fetchData = async (id) => {
  const res = await api.get('/data/${id}');
  return res.data;
};
