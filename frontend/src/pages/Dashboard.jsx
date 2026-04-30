import React from "react";
import useFetchData from "../hooks/useFetchData";

const Dashboard = () => {
  const { data, loading } = useFetchData("/data/123");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;