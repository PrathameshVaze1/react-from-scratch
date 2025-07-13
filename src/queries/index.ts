import { Puppy } from "../types";

export async function getPuppies() {
  try {
    const response = await fetch("http://localhost:8000/api/puppies", {
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function toggleLikedByStatus(id: number){
  try {
    const response = await fetch(`http://localhost:8000/api/puppies/${id}/like`, {
      method: "PATCH",
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}