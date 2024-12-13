import styles from './index.less';
import React, { useState } from 'react';
import { Form, Input, Button, Table } from 'antd';

export default function Layout() {
  const usersDate = [
    { id: 1, name: '张三', phone: '1234567890', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', phone: '0987654321', email: 'lisi@example.com' },
    { id: 3, name: '王五', phone: '1234567890', email: 'zhangsan@example.com' },
    { id: 4, name: '猪八戒', phone: '0987654321', email: 'lisi@example.com' },
    { id: 5, name: '沙和尚', phone: '0987654321', email: 'lisi@example.com' },
  ];
  const [users, setUsers] = useState(usersDate);
  const [columEditIdex, setColumEditIdex] = useState(-1); //-1表示没有编辑,没有一项被编辑，用于跟踪当前正在编辑的行索引。

  const [form] = Form.useForm(); // 创建 Form 实例

  const onFinish = (values) => {
    if (columEditIdex !== -1) {
      const editItem = users.find((item, index) => index === columEditIdex);
      const shuxing = `name_${editItem?.id}`;
      const newEditItem = {
        id: editItem?.id,
        name: values?.[`name_${editItem?.id}`],
        phone: values?.[`phone_${editItem?.id}`],
        email: values?.[`email_${editItem?.id}`],
      };
      const newUsers = [...users];
      newUsers[columEditIdex] = newEditItem;
      setUsers(newUsers);
      setColumEditIdex(-1);
    } else {
      const newUserItem = {
        id: users.length + 1,
        name: values?.name,
        phone: values['phone'],
        email: values?.email,
      };
      console.log('values: ', values);
      const newUsers = [...users];
      newUsers.push(newUserItem);
      setUsers(newUsers);
    }

    form?.resetFields();
  };
  const deleteUser = (id) => {
    const newUsers = users.filter((item) => item.id !== id);
    setUsers(newUsers);
  };
  return (
    <div className={styles.tableWrapper}>
      <Form
        onFinish={onFinish} // 表单提交时触发
        layout="vertical"
        form={form}
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
            {users.map((item, index) => (
              <tr key={item.id}>
                {columEditIdex === index ? (
                  <td>
                    <Form.Item
                      name={`name_${item?.id}`}
                      initialValue={item.name}
                    >
                      <Input />
                    </Form.Item>
                  </td>
                ) : (
                  <td>{item.name}</td>
                )}

                {columEditIdex === index ? (
                  <td>
                    <Form.Item
                      name={`phone_${item?.id}`}
                      initialValue={item.phone}
                    >
                      <Input />
                    </Form.Item>
                  </td>
                ) : (
                  <td>{item.phone}</td>
                )}
                {columEditIdex === index ? (
                  <td>
                    <Form.Item
                      name={`email_${item?.id}`}
                      initialValue={item.email}
                    >
                      <Input />
                    </Form.Item>
                  </td>
                ) : (
                  <td>{item.email}</td>
                )}

                <td>
                  <Button
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                  >
                    删除
                  </Button>

                  <Button
                    onClick={() =>
                      columEditIdex === index
                        ? form?.submit?.()
                        : setColumEditIdex(index)
                    }
                    style={{ marginLeft: '10px' }}
                  >
                    {columEditIdex === index ? '提交' : '修改'}
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <Form.Item name="name">
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
                    style={{ color: '#fff' }}
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
