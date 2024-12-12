import styles from "./index.less";
import React, { useState } from "react";

export default function Layout() {
  const usersDate = [
    { id: 1, name: "张三", phone: "1234567890", email: "zhangsan@example.com" },
    { id: 2, name: "李四", phone: "0987654321", email: "lisi@example.com" },
    { id: 3, name: "王五", phone: "1234567890", email: "zhangsan@example.com" },
    { id: 4, name: "猪八戒", phone: "0987654321", email: "lisi@example.com" },
    { id: 1, name: "张三", phone: "1234567890", email: "zhangsan@example.com" },
    { id: 5, name: "沙和尚", phone: "0987654321", email: "lisi@example.com" },
  ];
  const [users, setUsers] = useState(usersDate);
  return (
    <div className={styles.tableWrapper}>
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
              <input type="text" />
            </td>
            <td>
              <input type="tel" />
            </td>
            <td>
              <input type="email" />
            </td>
            <td>
              <button>添加</button>
            </td>
          </tr>
        </tbody>
      </table>

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
