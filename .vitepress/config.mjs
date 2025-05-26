import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
  title: 'Hiking Club',
  description: '专业户外活动平台',
  base: '/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],

  themeConfig: {
    logo: '/logo.png',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '活动', link: '/activities/' },
      { text: '关于我们', link: '/about/' }
    ],

    sidebar: {
      '/activities/': [
        {
          text: '活动中心',
          items: [
            { text: '活动列表', link: '/activities/' },
            { text: '投票系统', link: '/activities/voting' },
            { text: '报名管理', link: '/activities/registration' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hiking-club' }
    ],

    footer: {
      message: 'Built with ❤️ for outdoor enthusiasts',
      copyright: 'Copyright © 2024 Hiking Club'
    },
    cleanUrls: true
  }
}