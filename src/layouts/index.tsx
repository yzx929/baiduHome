import styles from "./index.less";
import Header from "../pages/header";
import Title from "../pages/title";
import Bword from "../pages/bword";
import News from "../pages/news";
import Side from "../pages/side";
// import { getUser } from "../service/index";
// import { useEffect, useState } from "react";
// import axios from "axios";

// import Mock from "mockjs";
// Mock.mock("/api/user/info", "get", {
//   code: 200,
//   message: "success",
//   data: {
//     name: "@name",
//     age: "@integer(18, 60)",
//     email: "@email",
//     address: "@county(true)",
//   },
// });
// Mock.mock("/api/user/phone", "get", {
//   code: 200,
//   message: "success",
//   data: 15678990988,
// });

// Mock.mock("/api/user/num", "get", {
//   code: 200,
//   message: "success",
//   data: 20,
// });
// // 配置 POST 请求模拟接口
// Mock.mock("/api/user/login", "post", (options) => {
//   // 你可以在这里处理请求的 options 参数（例如获取请求体中的数据）

//   console.log("接收到前端的参数：", options); // 打印请求的 body（如果有）

//   // 返回模拟数据
//   return Mock.mock({
//     status: 200,
//     message: "请求成功",
//     data: {
//       userId: "@id", // 使用 Mock.js 的数据模板生成 ID
//       userName: "@name", // 使用 Mock.js 的数据模板生成名称
//       "age|18-60": 25, // 随机年龄，范围在 18 到 60 之间
//       email: "@email", // 随机生成邮箱
//     },
//   });
// });

export default function Layout() {
  // const [pageData, setPageData] = useState({});
  // const [phoneNumber, setPhoneNumber] = useState(0); //
  // const [quanNum, setQuanNum] = useState(0); //
  // const [login, setLogin] = useState(0); //

  // const getPgageData = () => {
  //   axios
  //     .get("/api/user/info")
  //     .then((response) => {
  //       setPageData(response?.data);
  //       console.log("对象:", response);
  //     })

  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   axios
  //     .get("/api/user/phone")
  //     .then((response) => {
  //       setPhoneNumber(response?.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   axios
  //     .get("/api/user/num")
  //     .then((response) => {
  //       setQuanNum(response?.data.data);
  //       //console.log("券:", response);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
  // const postDate = () => {
  //   axios
  //     .post("/api/user/login", {
  //       username: "John Doe",
  //       password: "password123",
  //     })
  //     .then((response) => {
  //       console.log("/api/user/login 后端返回:", response.data); // 打印响应数据
  //       setLogin(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error); // 错误处理
  //     });
  // };

  // useEffect(() => {
  //   getPgageData();
  //   postDate();
  // }, []);
  //console.log("pageData:", pageData);
  //console.log("phoneNumber:", phoneNumber);
  //console.log("quanNum:", quanNum);

  return (
    <div>
      <div>
        <Header />
        <Title />
      </div>
      {/* <div>姓名：{pageData?.data?.name}</div>
      <div>手机号：{phoneNumber?.data}</div>
      <div>优惠券：{quanNum}</div>

      <div>邮箱：{login?.data?.email}</div>
      <div>年龄：{login?.data?.age}</div> */}
      <div className={styles.bottonPart}>
        <News />
        <Bword />
        <Side />
      </div>
    </div>
  );
}
