import axios from "axios";

export default async function DeleteComment(id) {
  await axios.delete(
    "https://upload-json-server-vercel.vercel.app/comments/" + id
  );
}
