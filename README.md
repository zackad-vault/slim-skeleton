# Slim Framework 3 Skeleton Application

Modified version of [slimphp/slim-skeleton](https://github.com/slimphp/Slim-Skeleton) with twig template engine.

## Requirements

- **PHP7** : there's no reason not to use it in new project, especially using modern framework.
- **NodeJS** with npm : version >=4, recommended version 6.

## Starting Development


```
# 1. Creating project
composer create-project zackad/slim-skeleton your_project_name dev-master
cd your_project_name

# 2. Installing frontend assets
npm install

# 3. Starting PHP built in webserver
composer start

# 4. Starting Livereload server
npm run livereload

# 5. Bundling assets
npm run bundle
```

## Included Components

**Frontend Components**

- [Font Awesome](https://www.npmjs.com/package/font-awesome)
- [Skeleton CSS](https://www.npmjs.com/package/skeleton-css)
- [Github Markdown CSS](https://www.npmjs.com/package/github-markdown-css)

**Backend Components**

- [Twig template engine](https://packagist.org/packages/twig/twig)
- [Twig Markdown extension](https://packagist.org/packages/jralph/twig-markdown)

**Developer/Debug Tools**

- [PHPUnit](https://packagist.org/packages/phpunit/phpunit)
- [Var Dumper](https://packagist.org/packages/symfony/var-dumper)
- [Livereload](https://www.npmjs.com/package/livereload)
- [Webpack](https://www.npmjs.com/package/webpack)
