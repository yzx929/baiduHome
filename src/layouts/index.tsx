import styles from "./index.less";


export default function Layout() {
  

  return (
    <div>
      <table>
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
      </table>
      <button>名字：{name}</button>

      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
