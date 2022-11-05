import axios from "axios";

export default async function PostComment(comment) {
  await axios.post("http://localhost:3000/comments", comment);
}