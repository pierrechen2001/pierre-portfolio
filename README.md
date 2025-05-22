# Pierre's Portfolio

這是我的個人作品集網站，展示我所有開發過的專案。

## 技術棧

- Next.js
- TypeScript
- Tailwind CSS
- React

用 Next.js（App Router 架構）、TypeScript 與 Tailwind CSS 製作的個人作品集。專案資料集中管理於 ```src/data/projects.ts```，所有專案頁面都會自動根據這份資料產生，無需額外建立頁面檔案。

## 網站架構說明

- src/app：主要頁面（如首頁、關於、聯絡、專案列表與專案詳情）
   - src/app/projects/page.tsx：專案總覽頁，會自動讀取所有專案資料
   - src/app/projects/[id]/page.tsx：動態路由，根據 id 顯示單一專案詳情，資料來源為 src/data/projects.ts
- src/components：可重用的 React 組件（如 Header、Footer、ProjectCard 等）
- src/data：專案資料（如 projects.ts，所有專案都集中於此管理）
- public：靜態資源（如圖片、favicon）

## 開始使用

1. 安裝依賴

```bash
npm install
```

2. 啟動開發服務器

```bash
npm run dev
```

3. 構建生產版本

```bash
npm run build
npm start
```

## 項目結構

- `/src/app` - 應用頁面
- `/src/components` - 可重用組件
- `/src/data` - 數據文件
- `/public` - 靜態資源

## 如何新增專案

編輯 src/data/projects.ts，在 projects 陣列中新增一個物件，格式如下：

```
     {
       id: 'your-project-id', // 英文小寫、用於網址
       title: '專案名稱',
       description: '簡短描述',
       fullDescription: `詳細描述，可用多行字串`,
       imageUrl: '/projects/your-image.png', // 圖片路徑
       status: 'completed' | 'in-progress' | 'planned', // 狀態
       date: '2024年6月', // 完成或預計時間
       skills: [
         { name: '技術名稱', color: 'Tailwind 顏色類別' }
       ],
       features: [
         '功能1',
         '功能2'
       ],
       githubUrl: 'https://github.com/yourusername/your-repo', // 可選
       demoUrl: 'https://your-demo-link.com' // 可選
     }
```

- 將專案圖片放到 public/projects/ 目錄下，並在 imageUrl 欄位填寫正確路徑（如 /projects/your-image.png）。

## 許可

MIT
