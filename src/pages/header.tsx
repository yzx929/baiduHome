import styles from "./header.less";
const titleDate = [
  { title: "新闻", href: "http://news.baidu.com", id: 1 },
  { title: "hao123", href: "https://www.hao123.com?src=from_pc_logon", id: 2 },
  { title: "地图", href: "http://map.baidu.com", id: 3 },
  { title: "贴吧", href: "http://tieba.baidu.com/", id: 4 },
  { title: "视频", href: "https://haokan.baidu.com/?sfrom=baidu-top", id: 5 },
  { title: "图片", href: "http://image.baidu.com/", id: 6 },
  { title: "网盘", href: "https://pan.baidu.com?from=1026962h", id: 7 },
  { title: "文库", href: "https://wenku.baidu.com/?fr=bdpcindex", id: 8 },
  { title: "AI助手", href: "https://fanyi.baidu.com/", id: 9 },
];

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        {titleDate.map((item) => {
          return (
            <a key={item.id} href={item.href} target="_blank">
              {item.title}
            </a>
          );
        })}

        <div className={styles.more}>
          <a href="http://www.baidu.com/more/" target="_blank">
            更多
          </a>
        </div>
      </div>

      <div className={styles.rightHeader}>
        <div className={styles.weatherWraper}>
          <a className={styles.linkWrap}>
            <span className={styles.city}>湖里</span>
            <img src="https://dss2.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons/a1.png" />
            <span>26℃</span>
          </a>
          <div className={styles.polutionWraper}>
            <span className={styles.polutionColor}>
              <span className={styles.polution}>优</span>
            </span>
          </div>
        </div>
        <span className={styles.setting}>设置</span>
        <a className={styles.userWraper}>
          <span className={styles.userImgWraper}>
            <img src="https://himg.bdimg.com/sys/portraitn/item/public.1.b0d1dc83.z6GbUFb3n8Mf7e87UjzwuQ" />
          </span>
          <span className={styles.userName}>赤魂go</span>
        </a>
      </div>
    </div>
  );
}
