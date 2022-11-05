import axios from "axios";

export default async function PostLike(movie) {
  await axios.patch("http://localhost:3000/movies/" + movie.id, movie)
}