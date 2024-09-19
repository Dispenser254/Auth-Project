import axios from "axios";

const BASE_URL = "https://auth-project-35eh.onrender.com/api"; // Backend URL

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response.data);
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signin`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error.response.data);
    throw error;
  }
};

// Fetch user details by ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/${userId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error.response.data);
    throw error;
  }
};

// Sign out user
export const signOutUser = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/signout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        // eslint-disable-next-line prettier/prettier
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error signing out user:", error.response.data);
    throw error;
  }
};
