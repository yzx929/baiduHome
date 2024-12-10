import styles from "./newsItemOne.less";
import { SoundOutlined } from "@ant-design/icons";
import React, { useState } from "react";
export default function NewsItemOne({
  title,
  imgSrc,
  link,
  removeItemFromArray,
}) {
 

  return (
    <div className={styles.itemOneWraper}>
      <div className={styles.imgWraper}>
        {imgSrc?.map((item, index) => (
          <img key={index} src={item} alt="新闻图片" />
        ))}
      </div>
      <div className={styles.itemOneRight}>
        <a className={styles.contentTitle} href={link}>
          {title}
        </a>
        <div className={styles.itemOneBottomTitle}>
          <div className={styles.itemBottomTitleL}>
            <a href="https://author.baidu.com/home?app_id=1730164099260935&from=homepage_nickname">
              东部战区88888888888888
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
      </div>
    </div>
  );
}
