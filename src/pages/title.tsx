import styles from "./title.less";
import { CameraOutlined } from "@ant-design/icons";
export default function Title() {
  return (
    <div className={styles.titleWraper}>
      <div className={styles.titlePicture}>
        <img src="//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" />
      </div>

      <form className={styles.form}>
        <span className={styles.inputWraper}>
          <input />
          <span className={styles.camara}>
            <CameraOutlined className={styles.icon} />
          </span>
        </span>

        <span>
          <button className={styles.serch}>百度一下</button>
        </span>
      </form>

      {/* <div className={styles.titleInputWraper}>
        <div className={styles.input}>
          <input type="text" />
          <div>相册图标</div>
        </div>
        <button>百度一下</button>
      </div> */}
    </div>
  );
}
