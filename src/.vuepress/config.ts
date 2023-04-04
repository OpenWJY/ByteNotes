import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "ByteNotes",
      description: "A personal notebook",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "技术文档",
      description: "A personal notebook",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
