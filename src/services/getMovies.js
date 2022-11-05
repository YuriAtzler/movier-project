import axios from "axios";

export default async function GetMovies() {
  const response = await axios.get("http://localhost:3000/movies");
  return response.data;
}