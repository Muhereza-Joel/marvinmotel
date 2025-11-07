<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate sitemap.xml';

    public function handle()
    {
        $domain = 'https://marvinmotel.com'; // << change to your domain

        $pages = [
            '/',                               // Home
            '/about-us',
            '/restaurant-and-bar',
            '/contact-us',
            '/gallery',
        ];

        $sitemap = Sitemap::create();

        foreach ($pages as $page) {
            $sitemap->add(
                Url::create($domain . $page)
                    ->setLastModificationDate(now())
                    ->setPriority($page === '/' ? 1.0 : 0.7)
                    ->setChangeFrequency('weekly')
            );
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));

        // Notify search engines
        @file_get_contents('https://www.google.com/ping?sitemap=' . urlencode($domain . '/sitemap.xml'));
        @file_get_contents('https://www.bing.com/ping?sitemap=' . urlencode($domain . '/sitemap.xml'));

        $this->info('✅ Sitemap generated successfully at public/sitemap.xml');
    }
}
