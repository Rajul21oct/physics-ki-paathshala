import api from "./api";

export const getCourses = async () => {
  const res = await api.get("http://localhost:8080/api/courses");
  return res.data;
};