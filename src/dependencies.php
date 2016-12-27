<?php
// DIC configuration

$container = $app->getContainer();

// view twig renderer
$container['view'] = function ($c) {
    $settings = $c->get('settings')['twig'];
    $loader = new Twig_Loader_Filesystem($settings['template_path']);
    $view = new Twig_Environment($loader, [
        'debug' => $settings['debug'],
    ]);
    $view->addExtension(new Twig_Extension_Debug);

    return $view;
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};
