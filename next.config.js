const fs = require('fs');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    // 放入 public/resume.pdf 後，履歷按鈕才會出現，避免上線後連到 404
    NEXT_PUBLIC_RESUME_URL: fs.existsSync(path.join(__dirname, 'public', 'resume.pdf')) ? '/resume.pdf' : '',
  },
};

module.exports = nextConfig;
