import { API_URL } from "../constants/api";

export const fetchButtons = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const updateButton = async (payload) => {
  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteButton = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    return response;
  } catch (err) {
    throw err;
  }
};
