import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfirmEmail = ({ userId }) => {
  const [userInfo, setUserInfo] = useState({
    id: localStorage.getItem("id"),
  });
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`users/${userInfo.id}`);
        setUserInfo(response.data);
        setLoading(false);
      } catch (error) {
        // setError("Error fetching user information");
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [userInfo.id]);

  const handleContinue = () => {
    // Perform any desired actions (e.g., navigate to the home page)
    navigate("/shop");
    return;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!userInfo) {
    return null; // Handle case when user information is not available
  }

  if (userInfo.emailConfirmed) {
    return (
      <div className="flex justify-center w-full h-screen ">
        <div className="bg-white h-1/3 rounded p-8 shadow">
          <p className="text-2xl font-bold mb-4">Email Confirmed!</p>
          <p>
            Your email address ({userInfo.email}) has been confirmed
            successfully.
          </p>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleContinue}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-full h-screen ">
      <div className="bg-orange-200 h-1/3 rounded p-8 shadow">
        <p className="text-2xl font-bold mb-4">Confirm Email Address</p>
        <p>Please confirm your email address to continue.</p>
      </div>
    </div>
  );
};

export default ConfirmEmail;
