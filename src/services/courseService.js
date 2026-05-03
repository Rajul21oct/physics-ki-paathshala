import api from "./api";

export const getCourses = async () => {
  const res = await api.get("http://localhost:8082/api/courses");
  return res.data;
};