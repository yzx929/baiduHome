import styles from "./index.less";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

export default function Layout() {
  const usersDate = [
    { id: 1, name: "张三", phone: "1234567890", email: "zhangsan@example.com" },
    { id: 2, name: "李四", phone: "0987654321", email: "lisi@example.com" },
    { id: 3, name: "王五", phone: "1234567890", email: "zhangsan@example.com" },
    { id: 4, name: "猪八戒", phone: "0987654321", email: "lisi@example.com" },
    { id: 5, name: "沙和尚", phone: "0987654321", email: "lisi@example.com" },
  ];
  const [users, setUsers] = useState(usersDate);
  const onFinish = (values) => {
    const newUserItem = {
      id: users.length + 1,
      name: values?.name,
      phone: values?.phone,
      email: values?.email,
    };

    // const pushUsers = [...users]
    // pushUsers.push(newUserItem)
    const newUsers = [...users];
    console.log("newUsers:",newUsers);
    newUsers.push(newUserItem);
    setUsers(newUsers);
  };
  return (
    <div className={styles.tableWrapper}>
      <Form
        onFinish={onFinish} // 表单提交时触发
        layout="vertical"
      >
        <table>
          <thead>
            <tr>
              <th>姓名</th>
              <th>电话</th>
              <th>邮箱</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>
                  <button>删除</button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <Form.Item
                  name="name"
                  //rules={[{ required: true, message: "请输入名字!" }]}
                >
                  <Input />
                </Form.Item>
              </td>
              <td>
                <Form.Item name="phone">
                  <Input />
                </Form.Item>
              </td>
              <td>
                <Form.Item name="email">
                  <Input />
                </Form.Item>
              </td>
              <td>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ color: "#fff" }}
                  >
                    添加
                  </Button>
                </Form.Item>
              </td>
            </tr>
          </tbody>
        </table>
      </Form>
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
