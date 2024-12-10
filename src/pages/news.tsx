import styles from "./news.less"; // 引入样式文件
import Menu from "./menu"; // 引入菜单组件
import NewsItemOne from "./newsContent/newsItemOne"; // 引入新闻项一组件
import NewsItemTwo from "./newsContent/newsItemTwo"; // 引入新闻项二组件
import img44 from "../img/44.png"; // 引入图片
import { useState } from "react"; // 引入useState钩子

import HotNewS from "./hotNews"; // 引入热门新闻组件

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
export default function News(props) {
  const [newsListUpdate, setNewsListUpdate] = useState(newsList); // 使用useState钩子，初始化newsListUpdate为newsList

  const removeItemFromArray = (id) => {
    const newArr = newsListUpdate?.filter((item, index) => item?.id !== id); // 过滤出id不等于传入id的元素，生成新数组
    // console.log("newArr:", newArr);
    setNewsListUpdate(newArr); // 更新newsListUpdate
  };
  return (
    <div className={styles.newsWraper}>
      <div className={styles.news}>
        <div>
          <Menu />
          <div className={styles.newsContents}>
            <div className={styles.newsContentsLeft}>
              {newsListUpdate?.map((item) => (
                <div key={item.id}>
                  {item?.imgSrc?.length > 1 ? (
                    <>
                      <NewsItemTwo
                        imgSrc={item?.imgSrc}
                        title={item?.title}
                        link={item?.link}
                        removeItemFromArray={() => removeItemFromArray(item.id)}
                      />
                    </>
                  ) : (
                    <>
                      <NewsItemOne
                        imgSrc={item?.imgSrc}
                        title={item?.title}
                        link={item?.link}
                        removeItemFromArray={() => removeItemFromArray(item.id)}
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
