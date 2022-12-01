import axios from "axios";

export async function fetchBreeds() {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/breeds`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function filterBreeds(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?page=1&limit=10&breed_id=${breedId}`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchBreedProfile(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/${breedId}`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadMore(breedId, page) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?page=${page}&limit=10&breed_id=${breedId}`
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
