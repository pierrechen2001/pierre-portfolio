/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.pierre-chen.com',
  generateRobotsTxt: true, // (optional) 生成 robots.txt
  generateIndexSitemap: false, // 對於小型網站，不需要索引 sitemap
  exclude: ['/admin/*', '/api/*'], // 排除管理頁面和 API 路由
  
  // 自定義頁面優先級和更新頻率
  transform: async (config, path) => {
    // 首頁最高優先級
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    // 專案頁面高優先級
    if (path.startsWith('/projects')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    // 筆記頁面中等優先級
    if (path.startsWith('/notes')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    }
    
    // 其他頁面
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    }
  },
  
  // 額外的 sitemap 配置
  additionalPaths: async (config) => {
    const result = []
    
    // 如果有動態路由，可以在這裡添加
    // 例如：專案詳情頁面
    const projects = [
      'dogtor',
      'aiplanner', 
      'erp-system',
      'superbot',
      'seven-peach',
      'lakycarcar'
    ]
    
    projects.forEach(projectId => {
      result.push({
        loc: `/projects/${projectId}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      })
    })
    
    return result
  },
  
  // robots.txt 配置
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
    additionalSitemaps: [
      'https://www.pierre-chen.com/sitemap.xml',
    ],
  },
}
