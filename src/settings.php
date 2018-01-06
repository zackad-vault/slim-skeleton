<?php

$dotenv = new Dotenv\Dotenv(dirname(__DIR__));
$dotenv->load();
$dotenv->required([
    'DISPLAY_ERROR_DETAILS',
    'LOGGER_PATH',
    'TWIG_DEBUG',
    'TWIG_TEMPLATE_PATH',
]);

return [
    'settings' => [
        'displayErrorDetails' => getenv('DISPLAY_ERROR_DETAILS'),
        'addContentLengthHeader' => getenv('ADD_CONTENT_LENGTH_HEADER'),

        // Renderer settings
        'twig' => [
            'template_path' => getenv('TWIG_TEMPLATE_PATH'),
            'debug' => getenv('TWIG_DEBUG'),
        ],

        // Monolog settings
        'logger' => [
            'name' => getenv('LOGGER_NAME'),
            'path' => getenv('LOGGER_PATH'),
            'level' => getenv('LOGGER_LEVEL'),
        ],
    ],
];
