import axios from "axios";

export default async function GetComments(id) {
  const response = await axios.get("http://localhost:3000/comments?idMovie="+id);
  return response.data;
}