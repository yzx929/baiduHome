import styles from "./header.less";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <a href="http://news.baidu.com" target="_blank">
          新闻
        </a>
        <a href="https://www.hao123.com?src=from_pc_logon" target="_blank">
          hao123
        </a>
        <a href="http://map.baidu.com" target="_blank">
          地图
        </a>
        <a href="http://tieba.baidu.com/" target="_blank">
          贴吧
        </a>
        <a href="https://haokan.baidu.com/?sfrom=baidu-top" target="_blank">
          视频
        </a>
        <a href="http://image.baidu.com/" target="_blank">
          图片
        </a>
        <a href="https://pan.baidu.com?from=1026962h" target="_blank">
          网盘
        </a>
        <a href="https://wenku.baidu.com/?fr=bdpcindex" target="_blank">
          文库
        </a>
        <a
          href="https://chat.baidu.com/search?isShowHello=1&amp;pd=csaitab&amp;setype=csaitab&amp;extParamsJson=%7B%22enter_type%22%3A%22home_tab%22%7D"
          target="_blank"
        >
          AI助手
        </a>
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
