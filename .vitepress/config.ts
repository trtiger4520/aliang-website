import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-TW',
  srcDir: 'src',
  title: "阿諒的個人天地",
  description: "阿諒與部落格",
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '簡介', link: '/profile' },
      { text: '文章', link: '/blog/index' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trtiger4520' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
  <path d="M329.1 142.9c-62.5-62.5-155.8-62.5-218.3 0s-62.5 163.8 0 226.3s155.8 62.5 218.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-221.3 87.5-308.8 0s-87.5-229.3 0-316.8s221.3-87.5 308.8 0c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"/>
</svg>`
        },
        link: 'https://www.cakeresume.com/me/trtiger4520',
      },
    ]
  }
})
