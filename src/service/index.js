import axios from "axios";

import Mock from "mockjs";
Mock.mock("/api/user", "get", {
  code: 200,
  message: "success",
  data: {
    name: "@name",
    age: "@integer(18, 60)",
    email: "@email",
    address: "@county(true)",
  },
});
export const getUser = async () => {
  return axios
    .get("/api/user")
    .then((response) => {
      console.log("response.data:", response.data);
      return response?.data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
