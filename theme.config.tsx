import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import React from "react";
import pl from "#pl";
import styles from "#styles/sidebar.module.css";

const config: DocsThemeConfig = {
  logo: <span>{pl.theme.logo}</span>,
  project: {
    link: pl.theme.project.link,
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: pl.theme.docsRepositoryBase,
  footer: {
    text: pl.theme.footer.text,
  },

  sidebar: {
    defaultMenuCollapseLevel: 3,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "cyan", textAlign: "center" }}>{title}</div>
        );
      }
      if (title === "JavaScript") {
        return (
          <div className={styles.iconTitle}>
            <Image
              src={"/icons/javascript.svg"}
              alt="jsIcon"
              width={32}
              height={32}
            />{" "}
            {title}
          </div>
        );
      }
      if (title === "React.js") {
        return (
          <div className={styles.iconTitle}>
            <Image
              src={"/icons/react.svg"}
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
            <Image src={"/icons/ts.svg"} alt="jsIcon" width={32} height={32} />{" "}
            {title}
          </div>
        );
      }
      return <>{title}</>;
    },
  },
  toc: {
    title: pl.theme.toc.title,
  },
  editLink: {
    text: pl.theme.editLink.text,
  },
  feedback: {
    content: null,
  },
  search: {
    component: null,
  },
};

export default config;
