import axios from "axios";

export default async function DeleteComment(id) {
  await axios.delete("http://localhost:3000/comments/" + id);
}