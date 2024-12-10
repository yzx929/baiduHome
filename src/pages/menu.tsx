// 导入样式文件
import styles from "./menu.less";
// 导出默认的Menu函数
export default function Menu() {
  // 定义一个Handler函数，点击时弹出"123"
  const Handler = () => {
    alert("123");
  };

  // 返回一个div，包含两个span，一个用于显示"我的关注"，另一个用于显示"推荐"，并绑定点击事件
  return (
    <div className={styles.menu}>
      <span className={styles.attention}>我的关注</span>
      <span onClick={Handler} className={styles.recommend}>
        推荐
      </span>
    </div>
  );
}
