<?php

return [
    'themeConfig' => [
        "fieldInput" => [
            "attributes" => [
                "class" => '!block !w-full !rounded-2xl !border !border-neutral-300 !bg-transparent !py-4 !pl-6 !pr-20 !text-base/6 !text-cyprus-500 !ring-4 !ring-transparent !transition placeholder:!text-neutral-500 focus:!border-neutral-950 focus:!outline-none focus:!ring-neutral-950/5',
            ],
        ],

        "fieldLabel" => [
            "attributes" => [
                "class" => '!pointer-events-none !absolute !left-6 !top-1/2 !-mt-3 !origin-left !text-base/6 !text-neutral-500 !transition-all !duration-200 peer-focus:-!translate-y-4 peer-!focus:scale-75 peer-focus:!font-semibold peer-focus:!text-cyprus-500 peer-[:not(:placeholder-shown)]:-!translate-y-4 peer-[:not(:placeholder-shown)]:!scale-75 peer-[:not(:placeholder-shown)]:!font-semibold peer-[:not(:placeholder-shown)]:!text-cyprus-500',
            ],
        ],

        "submitButton" => [
            "attributes" => [
                "class" => '!mt-10 !inline-flex !rounded-full !px-4 !py-1.5 !text-sm !font-semibold !transition !bg-cyprus-500 !text-white hover:!bg-cyprus-600',
            ],
        ],
    ],
];