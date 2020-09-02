const moment = require('moment');

module.exports = {
  title: 'mrxinxin',
  description: 'mrxinixn的vuepress练习',
  head: [
    ['meta', { name: 'author', content: 'mrxinxin' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' } ]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          moment.locale(lang)
          return moment(timestamp).fromat('LLLL')
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '最后更新时间',
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { 
            text: 'Chinese',
            ariaLabel: 'Chinese Menu',
            items: [
              {text: '粤语', link: '/'},
              {text: '闽南语', link: '/about'}
            ]
          },
          { text: 'Japanese', link: '/about' }
        ]
      },
    ],
    // 单个侧边栏
    // sidebar: [
    //   ['/', 'Home'],
    //   ['/about', 'About']
    // ]
    // sidebar: [
    //   {
    //     title:'Group 1',
    //     path: '/Group/Group1/',
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     children: [
    //       '/Group/Group1/Group1-1',
    //       '/Group/Group1/Group1-2'
    //     ]
    //   }
    // ]
    // 多个侧边栏
    sidebar: {
      '/Group/Group1/': [
        'Group1-1',
        'Group1-2'
      ],
      '/Group/Group2/': [
        'Group2-1',
        'Group2-2'
      ], 
      '/': [
        ''
      ]    
    }
  }
}