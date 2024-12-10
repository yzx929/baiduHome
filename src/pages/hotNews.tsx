import styles from "./hotNew.less";
import {
  SyncOutlined,
  FileSearchOutlined,
  RightOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";

import { useEffect, useState } from "react";
import axios from "axios";

import Mock from "mockjs";

Mock.mock("/api/news/list", "get", {
  code: 200,
  message: "success",
  data: [
    {
      title: "习近平会见老挝国主席通论",
      id: "1",
    },
    {
      title: "00后女警被审讯对象气到捶墙",
      id: "2",
    },

    {
      title: "公司在新加坡毛广岛的陆上输油管发生溢漏",
      id: "3",
    },
    {
      title: "华为研发中心搬迁致小镇房租大涨",
      id: "4",
    },
    {
      title: "医院回应双胞胎儿在生产时死亡",
      id: "5",
    },
    {
      title: "徐志胜总决赛第六",
      id: "6",
    },
    {
      title: "更好释放汽车以旧换新政策效应",
      id: "7",
    },
  ],
});

export default function HotNews() {
  const [list, setList] = useState([]);

  const ListData = () => {
    axios
      .get("/api/news/list")
      .then((response) => {
        setList(response?.data.data);
        console.log("返回来的全部内容:", response);
        console.log("返回的list:", response?.data?.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    ListData();
  }, []);
  return (
    <div>
      <div className={styles.hotTitle}>
        <a
          className={styles.hotTitleLeft}
          href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry"
        >
          <div>
            <span className={styles.hotTitleIconO}>
              <FileSearchOutlined />
            </span>
            <span className={styles.hotTitleIconT}>
              <RightOutlined />
            </span>
          </div>
        </a>
        <div className={styles.hotTitleRight}>
          <SyncOutlined />
          <span className={styles.refresh}> 换一换</span>
        </div>
      </div>
      <ul className={styles.hotContent}>
        {list?.map((item, index) => {
          return (
            <li key={item?.id}>
              <a>
                <div>
                  {index + 1}.{item?.title}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
