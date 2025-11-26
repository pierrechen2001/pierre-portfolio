import { MetadataRoute } from 'next';
import { notes } from '@/data/notes';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pierre-chen.com';
  const currentDate = new Date().toISOString();

  // 靜態頁面
  const routes = [
    '',
    '/about',
    '/projects',
    '/notes',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 動態筆記頁面 (從 notes.ts 自動生成)
  const noteRoutes = notes.map((note) => ({
    url: `${baseUrl}/notes/${note.id}`,
    lastModified: note.updatedAt || note.publishedAt || currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 動態專案頁面 (從 projects.ts 自動生成)
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...routes, ...noteRoutes, ...projectRoutes];
}

