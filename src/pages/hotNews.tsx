import styles from "./hotNew.less";
import {
  SyncOutlined,
  FileSearchOutlined,
  RightOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { Form, Input, Button } from "antd";

import { useEffect, useState } from "react";
import axios from "axios";

import Mock from "mockjs";

const dataArray = [
  {
    title: "习近平会见老挝国主席通论",
    id: "1",
  },
  {
    title: "00后女警被审讯对象气到捶墙",
    id: "2",
  },

  {
    title: "公司在新加坡毛广岛的陆上输油管发生溢漏",
    id: "3",
  },
];
Mock.mock("/api/news/list", "get", {
  code: 200,
  message: "success",
  data: dataArray,
});

export default function HotNews() {
  const [list, setList] = useState([]);
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");

  const ListData = () => {
    axios
      .get("/api/news/list")
      .then((response) => {
        setList(response?.data.data);
        console.log("返回来的全部内容:", response);
        console.log("返回的list:", response?.data?.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // const changeHandler = (e) => {
  //   const name = setName(e.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   return <div>名字：{name}</div>;
  // };

  useEffect(() => {
    ListData();
  }, []);



  const onFinish = (values) => {
    // 这里的 `values` 就是表单中所有控件的值
    //console.log("表单提交的值:", values);
  const arr=  dataArray.push({ ...values, title: values?.title, id: Math.random() });
    console.log("data11111", arr);
    ListData();
  };
  return (
    <div>
      <div className={styles.hotTitle}>
        <a
          className={styles.hotTitleLeft}
          href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry"
        >
          <div>
            <span className={styles.hotTitleIconO}>
              <FileSearchOutlined />
            </span>
            <span className={styles.hotTitleIconT}>
              <RightOutlined />
            </span>
          </div>
        </a>
        <div className={styles.hotTitleRight}>
          <SyncOutlined />
          <span className={styles.refresh}> 换一换</span>
        </div>
      </div>

      <Form
        onFinish={onFinish} // 表单提交时触发
        layout="vertical"
      >
        <Form.Item
          label="新闻标题"
          name="title"
          rules={[{ required: true, message: "请输入名字!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="新闻描述" name="desc">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <ul className={styles.hotContent}>
        {list?.map((item, index) => {
          return (
            <li key={item?.id}>
              <a>
                <div>
                  {index + 1}.{item?.title}
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {/* <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>张三</td>
            <td>13812345678</td>
            <td>zhangsan@example.com</td>
            <td>查看</td>
          </tr>
          <tr>
            <td>2</td>
            <td>李四</td>
            <td>13987654321</td>
            <td>lisi@example.com</td>
            <td>编辑</td>
          </tr>
          <tr>
            <td>3</td>
            <td>王五</td>
            <td>13612345678</td>
            <td>wangwu@example.com</td>
            <td>删除</td>
          </tr>
          <tr>
            <td>4</td>
            <td>赵六</td>
            <td>13712345678</td>
            <td>zhaoliu@example.com</td>
            <td>查看</td>
          </tr>
          <tr>
            <td>5</td>
            <td>孙七</td>
            <td>13512345678</td>
            <td>sunqi@example.com</td>
            <td>编辑</td>
          </tr>
        </tbody>
      </table> */}
      {/* <button>名字：{name}</button> */}

      {/* <form onSubmit={handleSubmit}>
        <label for="name">名字:</label>
        <input onChange={changeHandler} type="text" id="name" name="name" />
        <br />
        <label for="phone">电话:</label>
        <input type="tel" id="phone" name="phone" />
        <br />
        <label for="email">邮箱:</label>
        <input type="email" id="email" name="email" />
        <br />
        <input type="submit" value="提交" />
      </form> */}
    </div>
  );
}
