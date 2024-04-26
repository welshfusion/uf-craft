<?php

use craft\helpers\App;

return [
    'checkDevServer'    => App::env('VITE_CHECK_DEV_SERVER'), // 1 = true
    'devServerInternal' => App::env('VITE_DEV_SERVER_INTERNAL') . ':' . App::env('VITE_PORT'),
    'devServerPublic'   => App::env('VITE_DEV_SERVER_PUBLIC') . ':' . App::env('VITE_PORT'),
    'errorEntry'        => 'src/js/app.js',
    'manifestPath'      => Craft::getAlias('@webroot') . '/dist/manifest.json',
    'serverPublic'      => Craft::getAlias('@web') . '/dist/',
    'useDevServer'      => App::env('CRAFT_ENVIRONMENT') === 'dev',
];