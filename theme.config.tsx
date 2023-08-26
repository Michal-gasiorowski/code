import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import React from "react";
import styles from "#styles/sidebar.module.css";

const config: DocsThemeConfig = {
  logo: <span>Frontend concepts</span>,
  project: {
    link: "https://github.com/Michal-gasiorowski/code",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: "https://github.com/Michal-gasiorowski/code/tree/main",
  footer: {
    text: "Frontend concepts by Michał Gąsiorowski (c) 2023. Template under the MIT license, https://nextra.site/",
  },

  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
        );
      }
      if (title === "JavaScript") {
        return (
          <div className={styles.iconTitle}>
            <Image src={"/icons/js.png"} alt="jsIcon" width={32} height={32} />{" "}
            {title}
          </div>
        );
      }
      if (title === "React.js") {
        return (
          <div className={styles.iconTitle}>
            <Image
              src={"/icons/react.png"}
              alt="jsIcon"
              width={32}
              height={32}
            />{" "}
            {title}
          </div>
        );
      }
      if (title === "TypeScript") {
        return (
          <div className={styles.iconTitle}>
            <Image src={"/icons/ts.png"} alt="jsIcon" width={32} height={32} />{" "}
            {title}
          </div>
        );
      }
      return <>{title}</>;
    },
  },
  toc: {
    title: "Na tej stronie:",
  },
  editLink: {
    text: "Edytuj tę stronę na GitHub",
  },
  feedback: {
    content: null,
  },
  search: {
    placeholder: "Szukaj...",
  },
};

export default config;
