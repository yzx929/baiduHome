import styles from "./news.less";
import Menu from "./menu";
import NewsItemOne from "./newsContent/newsItemOne";
import NewsItemTwo from "./newsContent/newsItemTwo";
import img44 from "../img/44.png";
//import { useState } from "react";

import HotNewS from "./hotNews";
export default function News(props) {
  const newsList = [
    {
      id: 1,
      title: "测试北京新闻11111111111111",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44],
    },
    {
      id: 2,
      title: "测试国际新闻222222222222222222",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44, img44, img44],
    },
    {
      id: 3,
      title: "测试大卫新闻333333333",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44],
    },
    {
      id: 4,
      title: "厦门新闻4444444",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44, img44, img44],
    },
    {
      id: 5,
      title: "测试北京新闻55555555555",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44],
    },
    {
      id: 6,
      title: "厦门新闻66666666",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44, img44, img44],
    },
    {
      id: 7,
      title: "测试北京新闻77777777777",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44],
    },
    {
      id: 8,
      title: "厦门新闻888888888888",
      link: "https://gushitong.baidu.com/stock/hk-09888",
      imgSrc: [img44, img44, img44],
    },
  ];

  return (
    <div className={styles.newsWraper}>
      <div className={styles.news}>
        <div>
          <Menu />
          <div className={styles.newsContents}>
            <div className={styles.newsContentsLeft}>
              {newsList?.map((item) => (
                <div key={item.id}>
                  {item?.imgSrc?.length > 1 ? (
                    <>
                      <NewsItemTwo
                        imgSrc={item?.imgSrc}
                        title={item?.title}
                        link={item?.link}
                      />
                    </>
                  ) : (
                    <>
                      <NewsItemOne
                        imgSrc={item?.imgSrc}
                        title={item?.title}
                        link={item?.link}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.hotNewsWraper}>
          <HotNewS />
        </div>
      </div>
    </div>
  );
}
