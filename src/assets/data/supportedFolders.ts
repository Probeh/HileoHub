import { FileFormat, IFolderCollection } from '../models';

export const extensions: IFolderCollection = {
  default: {
    folder: { icon: 'folder' },
    root_folder: { icon: 'root_folder' },
  },
  supported: [
    { icon: 'android', extensions: ['android'] },
    { icon: 'api', extensions: ['api', '.api'] },
    { icon: 'app', extensions: ['app', '.app'] },
    {
      icon: 'arangodb',
      extensions: ['arangodb', 'arango'],
    },
    {
      icon: 'asset',
      extensions: ['assets', '.assets'],
    },
    {
      icon: 'aurelia',
      extensions: ['aurelia_project'],
    },
    {
      icon: 'audio',
      extensions: [
        'audio',
        '.audio',
        'audios',
        '.audios',
        'sound',
        '.sound',
        'sounds',
        '.sounds',
      ],
    },
    { icon: 'aws', extensions: ['aws', '.aws'] },
    { icon: 'azure', extensions: ['azure', '.azure'] },
    {
      icon: 'azurepipelines',
      extensions: ['azure-pipelines', '.azure-pipelines'],
    },
    { icon: 'binary', extensions: ['bin', '.bin'] },
    { icon: 'bloc', extensions: ['blocs', 'bloc'] },
    {
      icon: 'blueprint',
      extensions: ['blueprint', '.blueprint', 'blueprints', '.blueprints'],
    },
    { icon: 'bower', extensions: ['bower_components'] },
    { icon: 'buildkite', extensions: ['.buildkite'] },
    { icon: 'cake', extensions: ['cake', '.cake'] },
    {
      icon: 'certificate',
      extensions: ['certificates', '.certificates', 'certs', 'certs.'],
    },
    { icon: 'chef', extensions: ['chef', '.chef'] },
    { icon: 'circleci', extensions: ['.circleci'] },
    {
      icon: 'controller',
      extensions: [
        'controller',
        'controllers',
        '.controllers',
        'handlers',
        '.handlers',
      ],
    },
    {
      icon: 'component',
      extensions: ['component', 'components', '.components', 'widgets'],
    },
    {
      icon: 'composer',
      extensions: ['composer', '.composer'],
    },
    {
      icon: 'cli',
      extensions: [
        'cli',
        'cmd',
        'command',
        'commands',
        'commandline',
        'console',
      ],
    },
    {
      icon: 'client',
      extensions: ['client', 'clients'],
    },
    { icon: 'cmake', extensions: ['.cmake', 'cmake'] },
    {
      icon: 'config',
      extensions: [
        'conf',
        '.conf',
        'config',
        '.config',
        'configs',
        '.configs',
        'configuration',
        '.configuration',
        'configurations',
        '.configurations',
        'setting',
        '.setting',
        'settings',
        '.settings',
        'ini',
        '.ini',
        'initializers',
        '.initializers',
      ],
    },
    { icon: 'coverage', extensions: ['coverage'] },
    { icon: 'css', extensions: ['css', '_css'] },
    { icon: 'cubit', extensions: ['cubits', 'cubit'] },
    { icon: 'cypress', extensions: ['cypress'] },
    {
      icon: 'db',
      extensions: [
        'db',
        'database',
        'sql',
        'data',
        'repo',
        'repository',
        'repositories',
      ],
    },
    {
      icon: 'debian',
      extensions: ['debian', 'deb'],
    },
    {
      icon: 'dependabot',
      extensions: ['.dependabot'],
    },
    {
      icon: 'devcontainer',
      extensions: ['.devcontainer'],
    },
    {
      icon: 'dist',
      extensions: [
        'dist',
        '.dist',
        'dists',
        'out',
        'outs',
        'export',
        'exports',
        'build',
        '.build',
        'builds',
        'release',
        'releases',
        'target',
        'targets',
      ],
    },
    {
      icon: 'docker',
      extensions: ['docker', '.docker'],
    },
    { icon: 'docs', extensions: ['docs', 'doc'] },
    { icon: 'e2e', extensions: ['e2e'] },
    {
      icon: 'elasticbeanstalk',
      extensions: ['.elasticbeanstalk', '.ebextensions'],
    },
    {
      icon: 'electron',
      extensions: ['electron'],
      light: true,
    },
    {
      icon: 'expo',
      extensions: ['.expo', '.expo-shared'],
      light: true,
    },
    {
      icon: 'favicon',
      extensions: ['favicon', 'favicons'],
    },
    {
      icon: 'flow',
      extensions: ['flow', 'flow-typed'],
    },
    {
      icon: 'fonts',
      extensions: ['fonts', 'font', 'fnt'],
      light: true,
    },
    { icon: 'gcp', extensions: ['gcp', '.gcp'] },
    {
      icon: 'git',
      extensions: ['.git', 'submodules', '.submodules'],
    },
    { icon: 'github', extensions: ['.github'] },
    { icon: 'gitlab', extensions: ['.gitlab'] },
    {
      icon: 'gradle',
      extensions: ['gradle', '.gradle'],
      light: true,
    },
    { icon: 'graphql', extensions: ['graphql'] },
    { icon: 'grunt', extensions: ['grunt'] },
    {
      icon: 'gulp',
      extensions: [
        'gulp',
        'gulpfile.js',
        'gulpfile.coffee',
        'gulpfile.ts',
        'gulpfile.babel.js',
        'gulpfile.babel.coffee',
        'gulpfile.babel.ts',
      ],
    },
    {
      icon: 'haxelib',
      extensions: ['.haxelib', 'haxe_libraries'],
    },
    {
      icon: 'helper',
      extensions: ['helper', '.helper', 'helpers', '.helpers'],
    },
    {
      icon: 'hook',
      extensions: ['hook', '.hook', 'hooks', '.hooks'],
    },
    { icon: 'idea', extensions: ['.idea'] },
    {
      icon: 'images',
      extensions: [
        'images',
        'image',
        'img',
        'icons',
        'icon',
        'ico',
        'screenshot',
        'screenshots',
        'svg',
      ],
    },
    {
      icon: 'include',
      extensions: [
        'include',
        'includes',
        'incl',
        'inc',
        '.include',
        '.includes',
        '.incl',
        '.inc',
        '_include',
        '_includes',
        '_incl',
        '_inc',
      ],
    },
    { icon: 'interfaces', extensions: ['interfaces'] },
    { icon: 'ios', extensions: ['ios'] },
    { icon: 'js', extensions: ['js'] },
    { icon: 'json', extensions: ['json'] },
    {
      icon: 'json_official',
      extensions: ['json'],
    },
    {
      icon: 'kubernetes',
      extensions: [
        'kubernetes',
        'k8s',
        'kube',
        'kuber',
        '.kubernetes',
        '.k8s',
        '.kube',
        '.kuber',
      ],
    },
    { icon: 'less', extensions: ['less', '_less'] },
    {
      icon: 'library',
      extensions: ['lib', 'libs', '.lib', '.libs', 'library', 'libraries'],
    },
    { icon: 'linux', extensions: ['linux'] },
    {
      icon: 'locale',
      extensions: [
        'lang',
        'language',
        'languages',
        'locale',
        'locales',
        '_locale',
        '_locales',
        'internationalization',
        'globalization',
        'localization',
        'i18n',
        'g11n',
        'l10n',
      ],
    },
    { icon: 'log', extensions: ['log', 'logs'] },
    { icon: 'macos', extensions: ['macos', 'darwin'] },
    {
      icon: 'mariadb',
      extensions: ['mariadb', 'maria'],
    },
    { icon: 'maven', extensions: ['.mvn'] },
    {
      icon: 'memcached',
      extensions: ['memcached', '.memcached'],
    },
    {
      icon: 'middleware',
      extensions: ['middleware', 'middlewares'],
    },
    { icon: 'mjml', extensions: ['mjml', '.mjml'] },
    {
      icon: 'minikube',
      extensions: ['minikube', 'minik8s', 'minikuber'],
    },
    {
      icon: 'mock',
      extensions: ['mocks', '.mocks', '__mocks__'],
    },
    {
      icon: 'model',
      extensions: [
        'model',
        '.model',
        'models',
        '.models',
        'entities',
        '.entities',
      ],
    },
    {
      icon: 'module',
      extensions: ['modules'],
    },
    {
      icon: 'mongodb',
      extensions: ['mongodb', 'mongo'],
    },
    {
      icon: 'mysql',
      extensions: ['mysqldb', 'mysql'],
      light: true,
    },
    { icon: 'next', extensions: ['.next'] },
    { icon: 'nginx', extensions: ['nginx', 'conf.d'] },
    {
      icon: 'node',
      extensions: ['node_modules'],
      light: true,
    },
    {
      icon: 'notification',
      extensions: ['notification', 'notifications', 'event', 'events'],
    },
    { icon: 'nuget', extensions: ['.nuget'] },
    {
      icon: 'package',
      extensions: ['package', 'packages', '.package', '.packages', 'pkg'],
    },
    { icon: 'paket', extensions: ['.paket'] },
    { icon: 'php', extensions: ['php'] },
    {
      icon: 'platformio',
      extensions: ['.pio', '.pioenvs'],
    },
    {
      icon: 'plugin',
      extensions: [
        'plugin',
        '.plugin',
        'plugins',
        '.plugins',
        'extension',
        '.extension',
        'extensions',
        '.extensions',
      ],
    },
    {
      icon: 'private',
      extensions: ['private', '.private'],
    },
    {
      icon: 'public',
      extensions: ['public', '.public'],
    },
    {
      icon: 'python',
      extensions: ['.venv', '.virtualenv'],
    },
    { icon: 'redis', extensions: ['redis'] },
    { icon: 'ravendb', extensions: ['ravendb'] },
    {
      icon: 'route',
      extensions: ['route', 'routes', '_route', '_routes', 'routers'],
    },
    {
      icon: 'redux',
      extensions: ['redux'],
      light: true,
    },
    {
      icon: 'meteor',
      extensions: ['.meteor'],
      light: true,
    },
    {
      icon: 'nuxt',
      extensions: ['.nuxt'],
    },
    {
      icon: 'sass',
      extensions: ['sass', 'scss', '_sass', '_scss'],
      light: true,
    },
    {
      icon: 'script',
      extensions: ['script', 'scripts'],
    },
    { icon: 'server', extensions: ['server'] },
    {
      icon: 'services',
      extensions: ['service', 'services'],
    },
    {
      icon: 'src',
      extensions: ['src', 'source', 'sources'],
    },
    {
      icon: 'sso',
      extensions: ['sso'],
    },
    {
      icon: 'story',
      extensions: ['story', 'stories', '__stories__', '.storybook'],
    },
    { icon: 'style', extensions: ['style', 'styles'] },
    {
      icon: 'test',
      extensions: [
        'tests',
        '.tests',
        'test',
        '.test',
        '__tests__',
        '__test__',
        'spec',
        '.spec',
        'specs',
        '.specs',
      ],
    },
    {
      icon: 'temp',
      extensions: ['temp', '.temp', 'tmp', '.tmp'],
    },
    {
      icon: 'template',
      extensions: ['template', '.template', 'templates', '.templates'],
    },
    { icon: 'theme', extensions: ['theme', 'themes'] },
    { icon: 'travis', extensions: ['.travis'] },
    {
      icon: 'tools',
      extensions: ['tool', 'tools', '.tools', 'util', 'utils'],
    },
    {
      icon: 'typescript',
      extensions: ['typescript', 'ts'],
    },
    {
      icon: 'typings',
      extensions: ['typings', '@types'],
    },
    {
      icon: 'typings2',
      extensions: ['typings', '@types'],
    },
    {
      icon: 'vagrant',
      extensions: ['vagrant', '.vagrant'],
    },
    {
      icon: 'video',
      extensions: ['video', '.video', 'videos', '.videos'],
    },
    {
      icon: 'view',
      extensions: [
        'html',
        'view',
        'views',
        'layout',
        'layouts',
        'page',
        'pages',
        '_view',
        '_views',
        '_layout',
        '_layouts',
        '_page',
        '_pages',
      ],
    },
    { icon: 'vs', extensions: ['.vs'] },
    {
      icon: 'vs2',
      extensions: ['.vs'],
    },
    {
      icon: 'vscode',
      extensions: ['.vscode', 'vscode'],
    },
    {
      icon: 'vscode2',
      extensions: ['.vscode', 'vscode'],
    },
    {
      icon: 'vscode3',
      extensions: ['.vscode', 'vscode'],
    },
    {
      icon: 'vscode_test',
      extensions: ['.vscode-test'],
    },
    {
      icon: 'vscode_test2',
      extensions: ['.vscode-test'],
    },
    {
      icon: 'vscode_test3',
      extensions: ['.vscode-test'],
    },
    { icon: 'webpack', extensions: ['webpack'] },
    {
      icon: 'windows',
      extensions: ['windows', 'win32'],
    },
    { icon: 'www', extensions: ['www', 'wwwroot'] },
  ],
};