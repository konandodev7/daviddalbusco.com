import {listSlugs} from '$lib/plugins/slug.plugin';
import type {Slug} from '$lib/types/slug';
import type {ResponseBody} from '@sveltejs/kit';

const url = 'https://daviddalbusco.com/';

const staticPages: string[] = ['blog', 'portfolio'];

export const GET = async (): Promise<ResponseBody> => {
  const headers: Record<string, string> = {
    'Cache-Control': 'max-age=3600',
    'Content-Type': 'application/xml'
  };

  return {
    headers,
    body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${pages()
        .map(
          (path: string) => `<url>
        <loc>${url}${path}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>`
        )
        .join('')}
    </urlset>`
  };
};

const pages = (): string[] => {
  const blog: Slug[] = listSlugs({path: 'blog'});
  const portfolio: Slug[] = listSlugs({path: 'portfolio'});

  return [
    ...staticPages,
    ...blog.map(({slug}: Slug) => `blog/${slug}`),
    ...portfolio.map(({slug}: Slug) => `portfolio/${slug}`)
  ];
};
