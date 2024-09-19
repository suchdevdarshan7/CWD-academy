import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";

const Admin = () => {
  const [admin, setAdmin] = useState(false);

  let { slug } = useParams();

  useEffect(() => {
    if (slug === "true") {
      setAdmin(true);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {admin ? (
        <p>This is admin page welcome</p>
      ) : (
        <p>This page doesn't exists</p>
      )}
    </div>
  );
};

export default Admin;
