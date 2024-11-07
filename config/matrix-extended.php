<?php

return [
    'extraDeleteButton' => true,
    'experimentalFeatures' => true,
    'enableDragDrop' => false,
    'expandMenu' => true,
    'expandUngrouped' => false,
    'ungroupedPosition' => 'start',
    'fields' => [
        // matrix field handle
        'pageBuilder' => [
            // prevent buttons from wrapping
            'oneLiner' => true,
            'groups' => [
                [
                    'label' => \Craft::t('app', 'Basic'),
                    // entry type handles
                    'types' => ['basicContent', 'image', 'form', 'gallery'],
                ],
                [
                    'label' => \Craft::t('app', 'Components'),
                    // entry type handles
                    'types' => ['tag', 'textCards', 'bannerCards', 'multimedia', 'dualCards', 'accordion', 'featuredBanner'],
                ],
                [
                    'label' => \Craft::t('app', 'Layout'),
                    // entry type handles
                    'types' => ['callToAction', 'container', 'listing', 'twoColumns'],
                ],
            ],
        ],
        // matrix field handle
        'container' => [
            // prevent buttons from wrapping
            'oneLiner' => true,
            'groups' => [
                [
                    'label' => \Craft::t('app', 'Basic'),
                    // entry type handles
                    'types' => ['basicContent', 'image', 'gallery', 'form'],
                ],
                [
                    'label' => \Craft::t('app', 'Components'),
                    // entry type handles
                    'types' => ['tag', 'textCards', 'bannerCards', 'multimedia', 'dualCards', 'accordion'],
                ],
            ],
        ],
        // matrix field handle
        'column' => [
            // prevent buttons from wrapping
            'oneLiner' => true,
            'groups' => [
                [
                    'label' => \Craft::t('app', 'Basic'),
                    // entry type handles
                    'types' => ['basicContent', 'image', 'gallery'],
                ],
                [
                    'label' => \Craft::t('app', 'Components'),
                    // entry type handles
                    'types' => ['tag', 'bannerCards', 'accordion'],
                ],
            ],
        ]
    ]
];
