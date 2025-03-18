<?php

/**
 * @copyright Copyright (c) PutYourLightsOn
 */

/**
 * Blitz config.php
 *
 * This file exists only as a template for the Blitz settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'blitz.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

use craft\helpers\App;

/*$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isStage = App::env('CRAFT_ENVIRONMENT') === 'staging';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';*/

return [
    'cachingEnabled' => (App::env('BLITZ_CACHE') ?? false),
    // 'cachingEnabled' => true,
    'warmCacheAutomatically' => true,
    'hintsEnabled' => false,
    'queueJobTtr' => 15 * 60,

    // Determines when and how the cache should be refreshed.
    // - `3`: Clear the cache and regenerate in a queue job
    // - `2`: Expire the cache and regenerate in a queue job
    // - `1`: Clear the cache, regenerate manually or organically
    // - `0`: Expire the cache, regenerate manually or organically*
    'refreshMode' => 1,

    'refreshCacheAutomaticallyForGlobals' => false,

    // The URI patterns to include in caching. Set `siteId` to a blank string to indicate all sites.
    'includedUriPatterns' => [
        [
            'siteId' => 1,
            'uriPattern' => '.*',
        ]
    ],

    // The URI patterns to exclude from caching (overrides any matching patterns to include). Set `siteId` to a blank string to indicate all sites.
    'excludedUriPatterns' => [
        [
            // 'siteId' => 1,
            'uriPattern' => '/apis/*',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => '/actions/*',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => 'blockId=',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => '\?p=actions/*',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => '&p=actions/*',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => '\?blockId=',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => '&blockId=',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => '\?q=',
        ],
        [
            // 'siteId' => 1,
            'uriPattern' => '&q=',
        ]
    ],

    // The Query String params to exclude from caching (overrides any matching patterns to include). Set `siteId` to a blank string to indicate all sites.
    'includedQueryStringParams' => [
        // [
        //     'queryStringParam' => '.*',
        // ]

        // Items added so we dont cache at all
        [
            'siteId' => '',
            'queryStringParam' => '^q$',
        ],
        [
            'siteId' => '',
            'queryStringParam' => '^blockId$',
        ],
        [
            'siteId' => '',
            'queryStringParam' => '^search$',
        ],

        // Items added so we cache query param as unique page
        [
            'siteId' => '',
            'queryStringParam' => '^category$',
        ],
    ],

    'cacheStorageSettings' => [
        'folderPath' => '@webroot/cache/blitz',
        'compressCachedValues' => true,
        'countCachedFiles' => true,
    ],

    // Whether URLs with query strings should be cached and how.
    // - `0`: Do not cache URLs with query strings
    // - `1`: Cache URLs with query strings as unique pages
    // - `2`: Cache URLs with query strings as the same page
    'queryStringCaching' => 1,

    // The purger type to use.
    'cachePurgerType' => 'putyourlightson\blitz\drivers\purgers\CloudflarePurger',

    // The purger settings (zone ID keys are site UIDs).
    'cachePurgerSettings' => [
        'zoneIds' => [
            '46fe9b46-ce01-4705-b05f-741105d1bb32' => [
                'zoneId' => App::env('CF_ZONE_ID'),
            ],
            '9d851ed9-34fe-4044-8f52-cf43c9cef747' => [
                'zoneId' => App::env('CF_ZONE_ID'),
            ],
        ],
        'authenticationMethod' => 'apiToken',
        'apiToken' => App::env('CF_ACCESS_TOKEN'),
    ]
];
