//import { CameraOutlined } from "@ant-design/icons";
import styles from "./side.less";
export default function Side() {
  return (
    <div className={styles.sideWraper}>
      <div className={styles.entryWraper}>
     
      </div>
      <div>
        <div className={styles.codeWraper}>
          <img src="https://pss.bdstatic.com/static/superman/img/side/qrcode@2x-daf987ad02.png" />
        </div>
      </div>
      <div className={styles.topWraper}>
        <img src="https://pss.bdstatic.com/static/superman/img/side/totop@2x-baa701cb1b.png" />
      </div>
    </div>
  );
}
