import axios from "axios";

export default async function PostLike(movie) {
  await axios.patch(
    "https://upload-json-server-vercel.vercel.app/movies/" + movie.id,
    movie
  );
}
