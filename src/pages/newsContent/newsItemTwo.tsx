import styles from "./newsItemTwo.less";

import { SoundOutlined } from "@ant-design/icons";
export default function NewsItemTwo(props) {
  console.log("props", props);
  const { title, imgSrc, link, removeItemFromArray } = props;
  return (
    <div className={styles.itemTwo}>
      <a className={styles.itemTwoTitle} href={link}>
        {title}
      </a>
      <ul className={styles.itemImg}>
        {imgSrc?.map((item, index) => (
          <li key={index}>
            <a>
              <img src={item} alt="" />
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.itemBottomTitleTwo}></div>
      <div className={styles.itemOneBottomTitle}>
        <div className={styles.itemBottomTitleL}>
          <a href="https://author.baidu.com/home?app_id=1730164099260935&from=homepage_nickname">
            东部战区
          </a>
          <span className={styles.itemTime}>日期</span>
        </div>
        <div className={styles.itemPlay}>
          <span onClick={removeItemFromArray}>X</span>
          <span className={styles.smallIcon}>
            <SoundOutlined className={styles.icon} />
          </span>

          <span>播报</span>
        </div>
      </div>
      <div />
    </div>
  );
}
