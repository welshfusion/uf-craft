<?php

return [
    'themeConfig' => [
        "fieldInputWrapper" => false,

        "fieldErrors" => [
            "attributes" => [
                "class" => 'absolute bottom-0 left-6 z-20',
            ],
        ],

        "fieldError" => [
            "attributes" => [
                "class" => 'text-sm',
            ],
        ],

        "formWrapper" => [
            "attributes" => [
                "class" => 'font-display',
            ],
        ],

        "pageContainer" => [
            "attributes" => [
                "class" => '-space-y-px',
            ],
        ],

        "row" => [
            "attributes" => [
                "class" => 'group relative !mb-0 focus-within:z-10',
            ],
        ],

        "fieldContainer" => [
            "attributes" => [
                "class" => '',
            ],
        ],

        "fieldInput" => [
            "attributes" => [
                "class" => 'peer px-6 pb-4 pt-12 text-base/6 font-normal text-cyprus-500 border-neutral-300 focus:border-neutral-950 ring-transparent focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl focus:outline-none transition',
            ],
        ],

        "fieldLabel" => [
            "attributes" => [
                "class" => 'absolute text-base/6 font-normal text-neutral-500 left-6 top-1/4 -mt-3 pointer-events-none transition-all duration-200 origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-cyprus-500 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-cyprus-500',
            ],
        ],

        "submitButton" => [
            "attributes" => [
                "class" => '!mt-6 rounded-full px-4 py-1.5 text-sm bg-cyprus-500 hover:bg-green-500 border-cyprus-500 hover:border-green-500 transition duration-300',
            ],
        ],

        "radioButtons" => [
            "field" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => 'px-6 py-8 border border-neutral-300 group-first:rounded-t-2xl group-last:rounded-b-2xl',
                ],
            ],

            "fieldLabel" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => 'text-base/6 font-normal text-neutral-500',
                ],
            ],

            "fieldOptions" => [
                "attributes" => [
                    "class" => [
                        'mt-6',
                        "{{ field.layout == 'vertical' ? 'space-y-5' : '!grid grid-cols-1 sm:grid-cols-2 gap-8' }}",
                    ]
                ],
            ],

            "fieldOption" => [
                "attributes" => [
                    "class" => 'text-base/6 text-cyprus-500',
                ],
            ],

            "fieldInput" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => '',
                ],
            ],
        ],
        "checkboxes" => [
            "field" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => 'px-6 py-8 border border-neutral-300 group-first:rounded-t-2xl group-last:rounded-b-2xl',
                ],
            ],

            "fieldLabel" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => 'text-base/6 font-normal text-neutral-500',
                ],
            ],

            "fieldOptions" => [
                "attributes" => [
                    "class" => [
                        'mt-6',
                        "{{ field.layout == 'vertical' ? 'space-y-5' : '!grid grid-cols-1 sm:grid-cols-2 gap-8' }}",
                    ]
                ],
            ],

            "fieldOption" => [
                "attributes" => [
                    "class" => 'text-base/6 text-cyprus-500',
                ],
            ],

            "fieldInput" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => '',
                ],
            ],
        ],
        "agree" => [
            "field" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => 'px-6 py-8 border border-neutral-300 group-first:rounded-t-2xl group-last:rounded-b-2xl',
                ],
            ],

            "fieldOption" => [
                "attributes" => [
                    "class" => 'text-base/6 text-cyprus-500',
                ],
            ],

            "fieldInput" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => '',
                ],
            ],
        ],
        "html" => [
            "field" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => 'px-6 py-8 border border-neutral-300 group-first:rounded-t-2xl group-last:rounded-b-2xl',
                ],
            ],

            "fieldContainer" => [
                "resetClass" => true,
                "attributes" => [
                    "class" => 'text-neutral-500 text-base/6',
                ],
            ],
        ],
    ],
];