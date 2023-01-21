import axios from "axios";

export default async function GetMovies() {
  const response = await axios.get(
    "https://upload-json-server-vercel.vercel.app/movies"
  );
  return response.data;
}
