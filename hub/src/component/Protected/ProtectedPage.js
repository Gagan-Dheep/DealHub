import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/auth"; // Import the token utility

const ProtectedPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();

      if (!token) {
        alert("You must be logged in!");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const result = await res.json();
          setData(result);
        } else {
          alert("Unauthorized access");
        }
      } catch (error) {
        console.error("Error fetching protected data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default ProtectedPage;
