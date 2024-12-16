import styles from './index.less';

import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

export default function TablePage() {
  const usersDate = [
    { id: 1, name: '张三', phone: '1234567890', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', phone: '0987654321', email: 'lisi@example.com' },
    { id: 3, name: '王五', phone: '1234567890', email: 'zhangsan@example.com' },
    { id: 4, name: '猪八戒', phone: '0987654321', email: 'lisi@example.com' },
    { id: 5, name: '沙和尚', phone: '0987654321', email: 'lisi@example.com' },
  ];
  const [users, setUsers] = useState(usersDate);
  const [itemEditIndex, setItemEditIndex] = useState(-1);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // const values = form?.getFieldsValue(); // 获取表单数据
    console.log('Success:', values);
    const editItem = users?.find((item, index) => index === itemEditIndex);
    if (editItem) {
      const newEditItem = {
        id: editItem.id,
        name: values?.[`name_${editItem.id}`],
        phone: values?.[`phone_${editItem.id}`],
        email: values?.[`email_${editItem.id}`],
      };
      const newUsers = [...users];
      newUsers[itemEditIndex] = newEditItem;
      setUsers(newUsers);
      setItemEditIndex(-1);
    }
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
            {users?.map((item, index) => {
              return (
                <tr key={item.id}>
                  {itemEditIndex === index ? (
                    <td>
                      <Form.Item
                        name={`name_${item?.id}`}
                        initialValue={item.name}
                        rules={[{ required: true, message: '请输入' }]}
                      >
                        <Input />
                      </Form.Item>
                    </td>
                  ) : (
                    <td>{item.name}</td>
                  )}
                  {itemEditIndex === index ? (
                    <td>
                      <Form.Item
                        name={`phone_${item?.id}`}
                        initialValue={item.phone}
                        rules={[{ required: true, message: '请输入' }]}
                      >
                        <Input />
                      </Form.Item>
                    </td>
                  ) : (
                    <td>{item.phone}</td>
                  )}
                  {itemEditIndex === index ? (
                    <td>
                      <Form.Item
                        name={`email_${item?.id}`}
                        initialValue={item.email}
                        rules={[{ required: true, message: '请输入' }]}
                      >
                        <Input />
                      </Form.Item>
                    </td>
                  ) : (
                    <td>{item.email}</td>
                  )}

                  <td>
                    <Button
                      onClick={
                        itemEditIndex === index
                          ? () => form?.submit?.()
                          : () => setItemEditIndex(index)
                      }
                    >
                      {itemEditIndex === index ? '提交' : '编辑'}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Form>
    </div>
  );
}
