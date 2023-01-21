import axios from "axios";

export default async function PostComment(comment) {
  await axios.post(
    "https://upload-json-server-vercel.vercel.app/comments",
    comment
  );
}
