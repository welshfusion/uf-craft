<?php
/*
    Cron Job Schedule for Craft CMS - Runs every 15 minutes @ Forge
*/

// Hourly PING to see if we have lot of pileup queue or failed one in the list.
$schedule->command('watchtower/monitor')
    ->description("Ping Watchtower")
    ->hourly();

// Hourly PING to retry failed queues
$schedule->command('queue/retry all')
    ->description("Retry Failed queues.")
    ->hourly();

// Daily Refresh Blitz expired cache pages
$schedule->command('blitz/cache/refresh-expired')
    ->description("Daily Refresh Blitz expired cache pages")
    ->dailyAt("02:00");
