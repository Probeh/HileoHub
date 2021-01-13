import { FileFormat, IFileCollection } from '../models';
import { languages } from './languages';

export const extensions: IFileCollection = {
  default: {
    file: { icon: 'file', format: FileFormat.svg },
  },
  supported: [
    {
      icon: 'access',
      extensions: [
        'accdb',
        'accdt',
        'mdb',
        'accda',
        'accdc',
        'accde',
        'accdp',
        'accdr',
        'accdu',
        'ade',
        'adp',
        'laccdb',
        'ldb',
        'mam',
        'maq',
        'mdw',
      ],
    },
    {
      icon: 'access2',
      extensions: [
        'accdb',
        'accdt',
        'mdb',
        'accda',
        'accdc',
        'accde',
        'accdp',
        'accdr',
        'accdu',
        'ade',
        'adp',
        'laccdb',
        'ldb',
        'mam',
        'maq',
        'mdw',
      ],
    },
    {
      icon: 'actionscript',
      languages: [languages.actionscript],
    },
    {
      icon: 'actionscript2',
      light: true,
      languages: [languages.actionscript],
    },
    {
      icon: 'ada',
      languages: [languages.ada],
      light: true,
    },
    {
      icon: 'advpl',
      languages: [languages.advpl],
    },
    { icon: 'ai', extensions: ['ai'], format: FileFormat.svg },
    { icon: 'ai2', extensions: ['ai'], format: FileFormat.svg, disabled: true },
    {
      icon: 'al',
      languages: [languages.al],
    },
    {
      icon: 'affinitydesigner',
      extensions: ['afdesign', 'affinitydesigner'],
    },
    {
      icon: 'affinityphoto',
      extensions: ['afphoto', 'affinityphoto'],
    },
    {
      icon: 'affinitypublisher',
      extensions: ['afpub', 'affinitypublisher'],
    },
    {
      icon: 'angular',
      extensions: [
        '.angular-cli.json',
        'angular-cli.json',
        'angular.json',
        '.angular.json',
      ],
    },
    {
      icon: 'ng_component_dart',
      extensions: ['component.dart'],
    },
    {
      icon: 'ng_component_ts',
      extensions: ['component.ts'],
    },
    {
      icon: 'ng_component_js',
      extensions: ['component.js'],
    },
    {
      icon: 'ng_controller_ts',
      extensions: ['controller.ts'],
    },
    {
      icon: 'ng_controller_js',
      extensions: ['controller.js'],
    },
    {
      icon: 'ng_directive_dart',
      extensions: ['directive.dart'],
    },
    {
      icon: 'ng_directive_ts',
      extensions: ['directive.ts'],
    },
    {
      icon: 'ng_directive_js',
      extensions: ['directive.js'],
    },
    {
      icon: 'ng_guard_dart',
      extensions: ['guard.dart'],
    },
    {
      icon: 'ng_guard_ts',
      extensions: ['guard.ts'],
    },
    {
      icon: 'ng_guard_js',
      extensions: ['guard.js'],
    },
    {
      icon: 'ng_module_dart',
      extensions: ['module.dart'],
    },
    {
      icon: 'ng_module_ts',
      extensions: ['module.ts'],
    },
    {
      icon: 'ng_module_js',
      extensions: ['module.js'],
    },
    {
      icon: 'ng_pipe_dart',
      extensions: ['pipe.dart'],
    },
    {
      icon: 'ng_pipe_ts',
      extensions: ['pipe.ts'],
    },
    {
      icon: 'ng_pipe_js',
      extensions: ['pipe.js'],
    },
    {
      icon: 'ng_routing_dart',
      extensions: ['routing.dart'],
    },
    {
      icon: 'ng_routing_ts',
      extensions: ['routing.ts'],
    },
    {
      icon: 'ng_routing_js',
      extensions: ['routing.js'],
    },
    {
      icon: 'ng_routing_dart',
      extensions: ['app-routing.module.dart'],
    },
    {
      icon: 'ng_routing_ts',
      extensions: ['app-routing.module.ts'],
    },
    {
      icon: 'ng_routing_js',
      extensions: ['app-routing.module.js'],
    },
    {
      icon: 'ng_smart_component_dart',
      extensions: ['page.dart', 'container.dart'],
    },
    {
      icon: 'ng_smart_component_ts',
      extensions: ['page.ts', 'container.ts'],
    },
    {
      icon: 'ng_smart_component_js',
      extensions: ['page.js', 'container.js'],
    },
    {
      icon: 'ng_service_dart',
      extensions: ['service.dart'],
    },
    {
      icon: 'ng_service_ts',
      extensions: ['service.ts'],
    },
    {
      icon: 'ng_service_js',
      extensions: ['service.js'],
    },
    {
      icon: 'ng_interceptor_dart',
      extensions: ['interceptor.dart'],
    },
    {
      icon: 'ng_interceptor_ts',
      extensions: ['interceptor.ts'],
    },
    {
      icon: 'ng_interceptor_js',
      extensions: ['interceptor.js'],
    },
    {
      icon: 'ng_component_ts2',
      extensions: ['component.ts'],
    },
    {
      icon: 'ng_component_js2',
      extensions: ['component.js'],
    },
    {
      icon: 'ng_directive_ts2',
      extensions: ['directive.ts'],
    },
    {
      icon: 'ng_directive_js2',
      extensions: ['directive.js'],
    },
    {
      icon: 'ng_module_ts2',
      extensions: ['module.ts'],
    },
    {
      icon: 'ng_module_js2',
      extensions: ['module.js'],
    },
    {
      icon: 'ng_pipe_ts2',
      extensions: ['pipe.ts'],
    },
    {
      icon: 'ng_pipe_js2',
      extensions: ['pipe.js'],
    },
    {
      icon: 'ng_routing_ts2',
      extensions: ['routing.ts'],
    },
    {
      icon: 'ng_routing_js2',
      extensions: ['routing.js'],
    },
    {
      icon: 'ng_routing_ts2',
      extensions: ['app-routing.module.ts'],
    },
    {
      icon: 'ng_routing_js2',
      extensions: ['app-routing.module.js'],
    },
    {
      icon: 'ng_smart_component_ts2',
      extensions: ['page.ts', 'container.ts'],
    },
    {
      icon: 'ng_smart_component_js2',
      extensions: ['page.js', 'container.js'],
    },
    {
      icon: 'ng_service_ts2',
      extensions: ['service.ts'],
    },
    {
      icon: 'ng_service_js2',
      extensions: ['service.js'],
    },
    {
      icon: 'ng_tailwind',
      extensions: ['ng-tailwind.js'],
    },
    {
      icon: 'affectscript',
      languages: [languages.affectscript],
    },
    {
      icon: 'ansible',
      languages: [languages.ansible],
    },
    {
      icon: 'antlr',
      languages: [languages.antlr],
    },
    {
      icon: 'anyscript',
      languages: [languages.anyscript],
    },
    {
      icon: 'apache',
      languages: [languages.apache],
    },
    {
      icon: 'apex',
      languages: [languages.apex],
    },
    {
      icon: 'apib',
      languages: [languages.apib],
    },
    {
      icon: 'api_extractor',
      extensions: ['api-extractor.json', 'api-extractor-base.json'],
    },
    {
      icon: 'apl',
      languages: [languages.apl],
      light: true,
    },
    {
      icon: 'applescript',
      languages: [languages.applescript],
    },
    {
      icon: 'appveyor',
      extensions: ['appveyor.yml', '.appveyor.yml'],
    },
    { icon: 'arduino', extensions: ['ino', 'pde'], format: FileFormat.svg },
    {
      icon: 'asciidoc',
      languages: [languages.asciidoc],
    },
    {
      icon: 'asp',
      languages: [languages.asp],
    },
    { icon: 'aspx', extensions: ['aspx', 'ascx'], format: FileFormat.svg },
    {
      icon: 'assembly',
      languages: [languages.assembly],
    },
    {
      icon: 'ats',
      languages: [languages.ats],
    },
    {
      // https://en.wikipedia.org/wiki/Audio_file_format
      icon: 'audio',
      extensions: [
        'aac',
        'act',
        'aiff',
        'amr',
        'ape',
        'au',
        'dct',
        'dss',
        'dvf',
        'flac',
        'gsm',
        'iklax',
        'ivs',
        'm4a',
        'm4b',
        'm4p',
        'mmf',
        'mogg',
        'mp3',
        'mpc',
        'msv',
        'oga',
        'ogg',
        'opus',
        'ra',
        'raw',
        'tta',
        'vox',
        'wav',
        'wma',
      ],
    },
    {
      icon: 'aurelia',
      extensions: ['aurelia.json'],
    },
    {
      icon: 'autohotkey',
      languages: [languages.autohotkey],
    },
    {
      icon: 'autoit',
      languages: [languages.autoit],
    },
    {
      icon: 'avif',
      extensions: ['avif'],
    },
    {
      icon: 'avro',
      languages: [languages.avro],
    },
    {
      icon: 'awk',
      extensions: ['awk'],
    },
    { icon: 'aws', extensions: [], format: FileFormat.svg },
    {
      icon: 'azure',
      languages: [languages.azcli],
    },
    {
      icon: 'azurepipelines',
      extensions: ['azure-pipelines.yml', '.vsts-ci.yml'],
      languages: [languages.azurepipelines],
    },
    {
      icon: 'babel',
      extensions: ['.babelrc', '.babelignore'],
      filenamesGlob: ['.babelrc', 'babel.config'],
      extensionsGlob: ['js', 'cjs', 'mjs', 'json'],
      light: true,
    },
    {
      icon: 'babel2',
      extensions: ['.babelrc', '.babelignore'],
      filenamesGlob: ['.babelrc', 'babel.config'],
      extensionsGlob: ['js', 'cjs', 'mjs', 'json'],
      light: true,
    },
    {
      icon: 'ballerina',
      languages: [languages.ballerina],
    },
    {
      icon: 'bat',
      languages: [languages.bat],
    },
    {
      icon: 'bats',
      languages: [languages.bats],
    },
    {
      icon: 'bazaar',
      extensions: ['.bzrignore'],
    },
    {
      icon: 'bazel',
      extensions: ['BUILD.bazel', '.bazelrc', 'bazel.rc', 'bazel.bazelrc'],
      languages: [languages.bazel, languages.starlark],
    },
    {
      icon: 'befunge',
      languages: [languages.befunge],
    },
    {
      icon: 'biml',
      languages: [languages.biml],
    },
    {
      // http://www.file-extensions.org/filetype/extension/name/binary-files
      icon: 'binary',
      extensions: [
        'a',
        'app',
        'bin',
        'cmo',
        'cmx',
        'cma',
        'cmxa',
        'cmi',
        'dll',
        'exe',
        'hl',
        'ilk',
        'lib',
        'n',
        'ndll',
        'o',
        'obj',
        'pyc',
        'pyd',
        'pyo',
        'pdb',
        'scpt',
        'scptd',
        'so',
      ],
    },
    {
      icon: 'bithound',
      extensions: ['.bithoundrc'],
    },
    {
      icon: 'bitbucketpipeline',
      extensions: ['bitbucket-pipelines.yml'],
    },
    {
      icon: 'blade',
      languages: [languages.blade],
    },
    {
      icon: 'blitzbasic',
      extensions: ['bb'],
      languages: [languages.blitzbasic],
    },
    {
      icon: 'bolt',
      languages: [languages.bolt],
    },
    {
      icon: 'bosque',
      languages: [languages.bosque],
    },
    {
      icon: 'bower',
      extensions: ['.bowerrc', 'bower.json'],
    },
    {
      icon: 'browserslist',
      extensions: ['.browserslistrc', 'browserslist'],
    },
    {
      icon: 'buckbuild',
      extensions: ['.buckconfig'],
    },
    {
      icon: 'bundler',
      extensions: ['gemfile', 'gemfile.lock'],
    },
    {
      icon: 'bundler',
      extensions: ['gemfile', 'gemfile.lock'],
    },
    {
      icon: 'c',
      languages: [languages.c],
    },
    {
      icon: 'c2',
      languages: [languages.c],
    },
    {
      icon: 'c3',
      languages: [languages.c],
    },
    {
      icon: 'c_al',
      languages: [languages.c_al],
    },
    {
      icon: 'cabal',
      languages: [languages.cabal],
    },
    {
      icon: 'caddy',
      languages: [languages.caddyfile],
    },
    { icon: 'cake', extensions: ['cake'], format: FileFormat.svg },
    { icon: 'cakephp', extensions: [], format: FileFormat.svg },
    {
      icon: 'capacitor',
      extensionsGlob: ['json'],
      filenamesGlob: ['capacitor.config'],
    },
    {
      icon: 'cargo',
      extensions: ['cargo.toml', 'cargo.lock'],
    },
    {
      icon: 'cddl',
      languages: [languages.cddl],
    },
    {
      icon: 'cert',
      extensions: [
        'csr',
        'crt',
        'cer',
        'der',
        'pfx',
        'p12',
        'p7b',
        'p7r',
        'src',
        'crl',
        'sst',
        'stl',
      ],
    },
    {
      icon: 'ceylon',
      languages: [languages.ceylon],
    },
    {
      icon: 'cf',
      extensions: ['lucee'],
      languages: [languages.coldfusion],
    },
    {
      icon: 'cf2',
      extensions: ['lucee'],
      languages: [languages.coldfusion],
    },
    {
      icon: 'cfc',
      languages: [languages.cfc],
    },
    {
      icon: 'cfc2',
      languages: [languages.cfc],
    },
    {
      icon: 'cfm',
      languages: [languages.cfm],
    },
    {
      icon: 'cfm2',
      languages: [languages.cfm],
    },
    {
      icon: 'cheader',
      extensions: ['h'],
    },
    {
      icon: 'chef',
      extensions: ['chefignore', 'berksfile', 'berksfile.lock', 'policyfile'],
    },
    { icon: 'class', extensions: ['class'], format: FileFormat.svg },
    {
      icon: 'circleci',
      extensions: ['circle.yml'],
      light: true,
    },
    {
      icon: 'clojure',
      extensions: ['cjm', 'cljc'],
      languages: [languages.clojure],
    },
    {
      icon: 'clojurescript',
      extensions: ['cljs'],
      languages: [languages.clojurescript],
    },
    {
      icon: 'cloudfoundry',
      extensions: ['.cfignore'],
      light: true,
      languages: [languages.cloudfoundrymanifest],
    },
    {
      icon: 'cmake',
      languages: [languages.cmake, languages.cmakecache],
    },
    {
      icon: 'cobol',
      languages: [languages.cobol],
    },
    {
      icon: 'codacy',
      extensions: ['.codacy.yml', '.codacy.yaml'],
      light: true,
    },
    {
      icon: 'codeclimate',
      extensions: ['.codeclimate.yml'],
      light: true,
    },
    {
      icon: 'codecov',
      extensions: ['codecov.yml', '.codecov.yml'],
    },
    { icon: 'codekit', extensions: ['kit'], format: FileFormat.svg },
    {
      icon: 'codekit',
      extensions: [
        'config.codekit',
        'config.codekit2',
        'config.codekit3',
        '.config.codekit',
        '.config.codekit2',
        '.config.codekit3',
      ],
    },
    {
      icon: 'coffeelint',
      extensions: ['coffeelint.json', '.coffeelintignore'],
    },
    {
      icon: 'coffeescript',
      languages: [languages.coffeescript],
    },
    {
      icon: 'conan',
      extensions: ['conanfile.txt', 'conanfile.py'],
    },
    {
      icon: 'conda',
      extensions: ['.condarc'],
    },
    {
      icon: 'config',
      extensions: ['plist'],
      languages: [languages.properties, languages.dotenv],
      light: true,
    },
    {
      icon: 'commitlint',
      extensions: ['commitlint.config.js'],
    },
    { icon: 'compass', extensions: [], format: FileFormat.svg },
    {
      icon: 'composer',
      extensions: ['composer.json', 'composer.lock'],
    },
    {
      icon: 'chef_cookbook',
      languages: [languages.cookbook],
    },
    {
      icon: 'confluence',
      languages: [languages.confluence],
    },
    {
      icon: 'coveralls',
      extensions: ['.coveralls.yml'],
    },
    {
      icon: 'cpp',
      languages: [languages.cpp],
    },
    {
      icon: 'cpp2',
      languages: [languages.cpp],
    },
    {
      icon: 'cpp3',
      languages: [languages.cpp],
    },
    {
      icon: 'cppheader',
      extensions: ['hpp', 'hh', 'hxx', 'h++'],
    },
    {
      icon: 'crowdin',
      extensions: ['crowdin.yml'],
    },
    {
      icon: 'crystal',
      languages: [languages.crystal],
      light: true,
    },
    {
      icon: 'csharp',
      extensions: ['csx'],
      languages: [languages.csharp],
    },
    {
      icon: 'csharp2',
      extensions: ['csx'],
      languages: [languages.csharp],
    },
    { icon: 'csproj', extensions: ['csproj'], format: FileFormat.svg },
    {
      icon: 'css',
      languages: [languages.css],
    },
    {
      icon: 'csscomb',
      extensions: ['.csscomb.json'],
    },
    {
      icon: 'csslint',
      extensions: ['.csslintrc'],
    },
    { icon: 'cssmap', extensions: ['css.map'], format: FileFormat.svg },
    {
      icon: 'cucumber',
      languages: [languages.cucumber],
    },
    {
      icon: 'cuda',
      languages: [languages.cuda],
    },
    {
      icon: 'cython',
      languages: [languages.cython],
    },
    {
      icon: 'cypress',
      extensions: [`cypress.json`, `cypress.env.json`],
    },
    {
      icon: 'cvs',
      extensions: ['.cvsignore'],
    },
    {
      icon: 'dal',
      languages: [languages.dal],
    },
    {
      icon: 'darcs',
      extensions: ['.boringignore'],
    },
    {
      icon: 'dartlang',
      languages: [languages.dart],
    },
    { icon: 'db', extensions: ['db'], light: true, format: FileFormat.svg },
    {
      icon: 'dependabot',
      extensions: ['dependabot.yml'],
    },
    {
      icon: 'dependencies',
      extensions: ['dependencies.yml'],
    },
    {
      icon: 'delphi',
      languages: [languages.pascal],
    },
    {
      icon: 'devcontainer',
      extensions: ['devcontainer.json'],
    },
    {
      icon: 'django',
      extensions: ['djt'],
      languages: [languages.django],
    },
    {
      icon: 'dlang',
      languages: [languages.dlang],
    },
    {
      icon: 'diff',
      languages: [languages.diff],
    },
    {
      icon: 'docker',
      filenamesGlob: [
        'docker-compose',
        'docker-compose.ci-build',
        'docker-compose.override',
        'docker-compose.vs.debug',
        'docker-compose.vs.release',
        'docker-cloud',
      ],
      extensionsGlob: ['yml'],
      languages: [languages.dockerfile, languages.dockerignore],
    },
    {
      icon: 'docker2',
      filenamesGlob: [
        'docker-compose',
        'docker-compose.ci-build',
        'docker-compose.override',
        'docker-compose.vs.debug',
        'docker-compose.vs.release',
        'docker-cloud',
      ],
      extensionsGlob: ['yml'],
      languages: [languages.dockerfile, languages.dockerignore],
    },
    {
      icon: 'dockertest',
      extensions: ['docker-compose.test.yml'],
    },
    {
      icon: 'dockertest2',
      extensions: ['docker-compose.test.yml'],
    },
    {
      icon: 'docpad',
      extensions: ['eco'],
      light: true,
    },
    {
      icon: 'docz',
      extensions: ['.doczrc'],
      filenamesGlob: ['docz', '.docz', 'doczrc', 'docz.config'],
      extensionsGlob: ['js', 'json'],
    },
    {
      icon: 'dojo',
      extensions: ['.dojorc'],
    },
    {
      icon: 'doxygen',
      languages: [languages.doxygen],
    },
    {
      icon: 'drawio',
      extensions: ['drawio', 'dio'],
      filenamesGlob: ['.drawio'],
      extensionsGlob: ['png', 'svg'],
    },
    {
      icon: 'drone',
      extensions: ['.drone.yml', '.drone.yml.sig'],
      light: true,
    },
    {
      icon: 'drools',
      languages: [languages.drools],
    },
    {
      icon: 'dotjs',
      languages: [languages.dotjs],
    },
    {
      icon: 'dustjs',
      languages: [languages.dustjs],
    },
    {
      icon: 'dvc',
      extensions: ['.dvc'],
      languages: [],
    },
    {
      icon: 'dylan',
      languages: [languages.dylanlang],
    },
    {
      icon: 'editorconfig',
      extensions: ['.editorconfig'],
    },
    {
      icon: 'edge',
      languages: [languages.edge],
    },
    {
      icon: 'edge2',
      languages: [languages.edge],
    },
    {
      icon: 'eex',
      languages: [languages.eex],
    },
    { icon: 'ejs', extensions: ['ejs'], format: FileFormat.svg },
    {
      icon: 'elastic',
      languages: [languages.elastic],
    },
    { icon: 'elasticbeanstalk', extensions: [], format: FileFormat.svg },
    {
      icon: 'elixir',
      languages: [languages.elixir],
    },
    {
      icon: 'elm',
      extensions: ['elm-package.json'],
      languages: [languages.elm],
    },
    {
      icon: 'elm2',
      extensions: ['elm-package.json'],
      languages: [languages.elm],
    },
    { icon: 'emacs', extensions: ['el', 'elc'], format: FileFormat.svg },
    {
      icon: 'ember',
      extensions: ['.ember-cli'],
    },
    { icon: 'ensime', extensions: ['ensime'], format: FileFormat.svg },
    { icon: 'eps', extensions: ['eps'], format: FileFormat.svg },
    {
      icon: 'erb',
      languages: [languages.erb],
    },
    {
      icon: 'erlang',
      extensions: ['emakefile', '.emakerfile'],
      languages: [languages.erlang],
    },
    {
      icon: 'erlang2',
      extensions: ['emakefile', '.emakerfile'],
      languages: [languages.erlang],
    },
    {
      icon: 'eslint',
      extensions: ['.eslintrc', '.eslintignore', '.eslintcache'],
      filenamesGlob: ['.eslintrc'],
      extensionsGlob: ['js', 'mjs', 'cjs', 'json', 'yaml', 'yml'],
    },
    {
      icon: 'eslint2',
      extensions: ['.eslintrc', '.eslintignore', '.eslintcache'],
      filenamesGlob: ['.eslintrc'],
      extensionsGlob: ['js', 'mjs', 'cjs', 'json', 'yaml', 'yml'],
    },
    {
      icon: 'excel',
      extensions: ['xls', 'xlsx', 'xlsm', 'ods', 'fods'],
    },
    {
      icon: 'excel2',
      extensions: ['xls', 'xlsx', 'xlsm', 'ods', 'fods'],
    },
    {
      icon: 'expo',
      extensions: [
        'app.json',
        'app.config.js',
        'app.config.json',
        'app.config.json5',
      ],
      light: true,
    },
    {
      icon: 'falcon',
      languages: [languages.falcon],
    },
    {
      icon: 'fauna',
      extensions: ['.faunarc'],
      languages: [languages.fauna],
    },
    {
      icon: 'favicon',
      extensions: ['favicon.ico'],
    },
    { icon: 'fbx', extensions: ['fbx'], format: FileFormat.svg },
    {
      icon: 'firebase',
      extensions: ['.firebaserc'],
    },
    {
      icon: 'firebasehosting',
      extensions: ['firebase.json'],
      light: true,
    },
    {
      icon: 'firestore',
      extensions: ['firestore.rules', 'firestore.indexes.json'],
    },
    { icon: 'flash', extensions: ['swf', 'swc'], format: FileFormat.svg },
    {
      icon: 'fla',
      extensions: ['fla'],
      light: true,
    },
    {
      icon: 'floobits',
      extensions: ['.flooignore'],
    },
    { icon: 'flow', extensions: ['js.flow'], format: FileFormat.svg },
    {
      icon: 'flow',
      extensions: ['.flowconfig'],
    },
    {
      icon: 'flutter',
      extensions: ['.flutter-plugins', '.metadata'],
    },
    {
      icon: 'flutter_package',
      extensions: ['pubspec.lock', 'pubspec.yaml', '.packages'],
    },
    {
      icon: 'font',
      extensions: ['woff', 'woff2', 'ttf', 'otf', 'eot', 'pfa', 'pfb', 'sfd'],
      light: true,
    },
    {
      icon: 'fortran',
      languages: [languages.fortran],
    },
    {
      icon: 'fossa',
      extensions: ['.fossaignore'],
    },
    {
      icon: 'fossil',
      extensions: ['ignore-glob'],
    },
    {
      icon: 'fsharp',
      languages: [languages.fsharp],
    },
    { icon: 'fsproj', extensions: ['fsproj'], format: FileFormat.svg },
    {
      icon: 'freemarker',
      languages: [languages.freemarker],
    },
    {
      icon: 'fthtml',
      languages: [languages.fthtml],
    },
    {
      icon: 'fusebox',
      extensions: ['fuse.js'],
    },
    {
      icon: 'galen',
      languages: [languages.galen],
    },
    {
      icon: 'galen2',
      languages: [languages.galen],
    },
    {
      icon: 'git',
      extensions: [
        '.gitattributes',
        '.gitconfig',
        '.gitignore',
        '.gitmodules',
        '.gitkeep',
        '.mailmap',
      ],
      languages: [languages.git],
    },
    {
      icon: 'gamemaker',
      extensions: ['gmx'],
      languages: [languages.gamemaker],
    },
    {
      icon: 'gamemaker2',
      extensions: ['yy', 'yyp'],
      languages: [languages.gamemaker2],
      light: true,
    },
    {
      icon: 'gamemaker81',
      languages: [languages.gamemaker81],
    },
    {
      icon: 'gatsby',
      filenamesGlob: [
        'gatsby-config',
        'gatsby-node',
        'gatsby-browser',
        'gatsby-ssr',
      ],
      extensionsGlob: ['js', 'ts'],
    },
    {
      icon: 'gcode',
      languages: [languages.gcode],
    },
    {
      icon: 'genstat',
      languages: [languages.genstat],
    },
    {
      icon: 'gitlab',
      extensions: ['.gitlab-ci.yml'],
    },
    {
      icon: 'glide',
      extensions: ['glide.yml'],
    },
    {
      icon: 'glsl',
      languages: [languages.glsl],
    },
    {
      icon: 'glyphs',
      languages: [languages.glyphs],
    },
    {
      icon: 'gnuplot',
      languages: [languages.gnuplot],
    },
    {
      icon: 'go',
      languages: [languages.go],
    },
    {
      icon: 'go_package',
      extensions: ['go.sum', 'go.mod'],
    },
    {
      icon: 'godot',
      languages: [languages.godot],
    },
    {
      icon: 'gradle',
      extensions: ['gradle'],
      light: true,
    },
    {
      icon: 'gradle2',
      extensions: ['gradle'],
    },
    {
      icon: 'graphql',
      extensions: ['.gqlconfig'],
      languages: [languages.graphql],
    },
    {
      icon: 'graphql_config',
      extensions: ['.graphqlconfig'],
      filenamesGlob: ['.graphqlconfig'],
      extensionsGlob: ['yml', 'yaml'],
    },
    {
      icon: 'graphviz',
      languages: [languages.graphviz],
    },
    {
      icon: 'greenkeeper',
      extensions: ['greenkeeper.json'],
    },
    {
      icon: 'gridsome',
      filenamesGlob: ['gridsome.config', 'gridsome.server', 'gridsome.client'],
      extensionsGlob: ['js', 'ts'],
    },
    {
      icon: 'groovy',
      languages: [languages.groovy],
    },
    {
      icon: 'groovy2',
      languages: [languages.groovy],
    },
    {
      icon: 'grunt',
      filenamesGlob: ['gruntfile', 'gruntfile.babel'],
      extensionsGlob: ['js', 'coffee', 'ts'],
    },
    {
      icon: 'gulp',
      filenamesGlob: ['gulpfile', 'gulpfile.esm', 'gulpfile.babel'],
      extensionsGlob: ['js', 'coffee', 'ts', 'mjs'],
    },
    {
      icon: 'haml',
      languages: [languages.haml],
    },
    {
      icon: 'handlebars',
      languages: [languages.handlebars],
    },
    {
      icon: 'handlebars2',
      languages: [languages.handlebars],
    },
    {
      icon: 'harbour',
      languages: [languages.harbour],
    },
    {
      icon: 'haskell',
      languages: [languages.haskell, languages.literatehaskell],
    },
    {
      icon: 'haskell2',
      languages: [languages.haskell, languages.literatehaskell],
    },
    {
      icon: 'haxe',
      extensions: ['haxelib.json'],
      languages: [languages.haxe],
    },
    {
      icon: 'haxecheckstyle',
      extensions: ['checkstyle.json'],
    },
    { icon: 'haxedevelop', extensions: ['hxproj'], format: FileFormat.svg },
    {
      icon: 'helix',
      extensions: ['.p4ignore'],
    },
    {
      icon: 'helm',
      languages: [languages.helm],
    },
    {
      icon: 'hjson',
      languages: [languages.hjson],
      light: true,
    },
    {
      icon: 'hlsl',
      languages: [languages.hlsl],
    },
    {
      icon: 'homeassistant',
      languages: [languages.homeassistant],
    },
    {
      icon: 'host',
      languages: [languages.hosts],
    },
    {
      icon: 'html',
      languages: [languages.html],
    },
    {
      icon: 'htmlhint',
      extensions: ['.htmlhintrc'],
    },
    {
      icon: 'http',
      languages: [languages.http],
    },
    {
      icon: 'hunspell',
      languages: [languages.hunspell],
    },
    {
      icon: 'husky',
      extensions: ['.huskyrc', 'husky.config.js'],
      filenamesGlob: ['.huskyrc'],
      extensionsGlob: ['js', 'json', 'yaml', 'yml'],
    },
    {
      icon: 'hy',
      languages: [languages.hy],
    },
    {
      icon: 'hygen',
      extensions: ['ejs.t'],
    },
    {
      icon: 'hypr',
      languages: [languages.hypr],
    },
    {
      icon: 'icl',
      languages: [languages.icl],
    },
    { icon: 'idris', extensions: ['idr', 'lidr'], format: FileFormat.svg },
    { icon: 'idrisbin', extensions: ['ibc'], format: FileFormat.svg },
    { icon: 'idrispkg', extensions: ['ipkg'], format: FileFormat.svg },
    {
      icon: 'image',
      extensions: ['jpeg', 'jpg', 'gif', 'png', 'bmp', 'tiff', 'ico'],
    },
    {
      icon: 'imba',
      languages: [languages.imba],
    },
    {
      icon: 'inc',
      extensions: ['inc', 'include'],
    },
    {
      icon: 'infopath',
      extensions: ['infopathxml', 'xsn', 'xsf', 'xtp2'],
    },
    {
      icon: 'informix',
      languages: [languages.informix],
    },
    {
      icon: 'ini',
      languages: [languages.ini],
      light: true,
    },
    {
      icon: 'ink',
      languages: [languages.ink],
    },
    {
      icon: 'innosetup',
      languages: [languages.innosetup],
    },
    {
      icon: 'ionic',
      extensions: ['ionic.project', 'ionic.config.json'],
    },
    {
      icon: 'jake',
      extensions: ['jakefile', 'jakefile.js'],
    },
    {
      icon: 'janet',
      languages: [languages.janet],
    },
    { icon: 'jar', extensions: ['jar'], format: FileFormat.svg },
    {
      icon: 'jasmine',
      extensions: ['jasmine.json'],
    },
    {
      icon: 'java',
      languages: [languages.java],
    },
    { icon: 'jbuilder', extensions: ['jbuilder'], format: FileFormat.svg },
    {
      icon: 'jest',
      extensions: [
        'jest.config.json',
        'jest.config.ts',
        'jest.json',
        '.jestrc',
        '.jestrc.js',
        '.jestrc.json',
      ],
      filenamesGlob: ['jest.config', 'jest.config.babel'],
      extensionsGlob: ['js', 'cjs', 'mjs'],
    },
    {
      icon: 'jest_snapshot',
      extensions: ['js.snap', 'jsx.snap', 'ts.snap', 'tsx.snap'],
    },
    {
      icon: 'jekyll',
      languages: [languages.jekyll],
    },
    {
      icon: 'jenkins',
      languages: [languages.jenkins],
    },
    {
      icon: 'jinja',
      languages: [languages.jinja],
    },
    {
      icon: 'jpm',
      extensions: ['.jpmignore'],
    },
    {
      icon: 'js',
      languages: [languages.javascript],
      light: true,
    },
    {
      icon: 'js_official',
      languages: [languages.javascript],
    },
    {
      icon: 'jsbeautify',
      extensions: [
        '.jsbeautifyrc',
        'jsbeautifyrc',
        '.jsbeautify',
        'jsbeautify',
      ],
    },
    {
      icon: 'jsconfig',
      extensions: ['jsconfig.json'],
      light: true,
    },
    {
      icon: 'jscpd',
      extensions: ['.jscpd.json'],
      filenamesGlob: ['jscpd-report'],
      extensionsGlob: ['xml', 'json', 'html'],
    },
    {
      icon: 'jshint',
      extensions: ['.jshintrc', '.jshintignore'],
    },
    {
      icon: 'jsmap',
      extensions: ['js.map'],
      light: true,
    },
    {
      icon: 'json',
      languages: [languages.json, languages.textmatejson, languages.jsonc],
      light: true,
    },
    {
      icon: 'json_official',
      languages: [languages.json, languages.textmatejson, languages.jsonc],
    },
    {
      icon: 'json2',
      languages: [languages.json, languages.textmatejson, languages.jsonc],
    },
    {
      icon: 'jsonnet',
      languages: [languages.jsonnet],
    },
    {
      icon: 'json5',
      extensions: ['json5'],
      languages: [languages.json5],
      light: true,
    },
    {
      icon: 'jsonld',
      extensions: ['jsonld', 'json-ld'],
      light: true,
    },
    { icon: 'jsp', extensions: ['jsp'], format: FileFormat.svg },
    { icon: 'jss', extensions: ['jss'], format: FileFormat.svg },
    {
      icon: 'julia',
      languages: [languages.julia],
    },
    {
      icon: 'julia2',
      languages: [languages.julia],
    },
    { icon: 'jupyter', extensions: ['ipynb'], format: FileFormat.svg },
    {
      icon: 'io',
      languages: [languages.io],
      light: true,
    },
    {
      icon: 'iodine',
      languages: [languages.iodine],
    },
    {
      icon: 'karma',
      filenamesGlob: ['karma.conf'],
      extensionsGlob: ['js', 'coffee', 'ts'],
    },
    { icon: 'key', extensions: ['key', 'pem'], format: FileFormat.svg },
    {
      icon: 'kite',
      extensions: ['.kiteignore'],
      light: true,
    },
    {
      icon: 'kitchenci',
      extensions: ['.kitchen.yml', 'kitchen.yml'],
    },
    {
      icon: 'kivy',
      languages: [languages.kivy],
    },
    {
      icon: 'kos',
      languages: [languages.kos],
    },
    {
      icon: 'kotlin',
      languages: [languages.kotlin],
    },
    {
      icon: 'kusto',
      languages: [languages.kusto],
    },
    {
      icon: 'latino',
      languages: [languages.latino],
    },
    {
      icon: 'layout',
      extensions: ['master', 'layout.html', 'layout.htm'],
    },
    {
      icon: 'layout',
      extensions: ['layout.html', 'layout.htm'],
    },
    {
      icon: 'lerna',
      extensions: ['lerna.json'],
      light: true,
    },
    {
      icon: 'less',
      languages: [languages.less],
    },
    {
      icon: 'lex',
      languages: [languages.lex],
    },
    { icon: 'license', extensions: ['enc'], format: FileFormat.svg },
    {
      icon: 'license',
      extensions: ['license', 'licence', 'copying', 'copying.lesser'],
      filenamesGlob: ['license', 'licence', 'copying', 'copying.lesser'],
      extensionsGlob: ['md', 'txt'],
    },
    {
      icon: 'lighthouse',
      filenamesGlob: ['.lighthouserc'],
      extensionsGlob: ['js', 'json', 'yaml', 'yml'],
    },
    {
      icon: 'lisp',
      languages: [languages.lisp],
    },
    { icon: 'lime', extensions: ['hxp'], format: FileFormat.svg },
    {
      icon: 'lime',
      extensions: ['include.xml'],
    },
    {
      icon: 'lintstagedrc',
      extensions: ['.lintstagedrc', 'lint-staged.config.js'],
      filenamesGlob: ['.lintstagedrc'],
      extensionsGlob: ['js', 'json', 'yaml', 'yml'],
    },
    { icon: 'liquid', extensions: ['liquid'], format: FileFormat.svg },
    { icon: 'livescript', extensions: ['ls'], format: FileFormat.svg },
    { icon: 'lnk', extensions: ['lnk'], format: FileFormat.svg },
    { icon: 'locale', extensions: [], format: FileFormat.svg },
    { icon: 'log', extensions: ['log', 'tlg'], format: FileFormat.svg },
    {
      icon: 'lolcode',
      languages: [languages.lolcode],
    },
    {
      icon: 'lsl',
      languages: [languages.lsl],
    },
    {
      icon: 'lua',
      languages: [languages.lua],
    },
    { icon: 'lync', extensions: ['crec', 'ocrec'], format: FileFormat.svg },
    {
      icon: 'makefile',
      extensions: ['makefile'],
      languages: [languages.makefile],
    },
    {
      icon: 'manifest',
      extensions: ['manifest'],
    },
    {
      icon: 'manifest_skip',
      extensions: ['manifest.skip'],
    },
    {
      icon: 'manifest_bak',
      extensions: ['manifest.bak'],
    },
    { icon: 'map', extensions: ['map'], format: FileFormat.svg },
    {
      icon: 'markdown',
      extensions: ['mdown', 'markdown'],
      languages: [languages.markdown],
    },
    {
      icon: 'markdownlint',
      extensions: ['.markdownlint.json'],
    },
    {
      icon: 'marko',
      languages: [languages.marko],
    },
    { icon: 'markojs', extensions: ['marko.js'], format: FileFormat.svg },
    {
      icon: 'matlab',
      extensions: [
        'fig',
        'mex',
        'mexn',
        'mexrs6',
        'mn',
        'mum',
        'mx',
        'mx3',
        'rwd',
        'slx',
        'slddc',
        'smv',
        'xvc',
      ],
      languages: [languages.matlab],
    },
    {
      icon: 'maxscript',
      languages: [languages.maxscript],
    },
    {
      icon: 'maven',
      extensions: ['maven.config'],
      filenamesGlob: ['pom', 'extensions', 'settings'],
      extensionsGlob: ['xml'],
    },
    {
      icon: 'maya',
      languages: [languages.mel],
    },
    {
      icon: 'mdx',
      languages: [languages.mdx],
      light: true,
    },
    {
      icon: 'mediawiki',
      languages: [languages.mediawiki],
    },
    {
      icon: 'mercurial',
      extensions: ['.hgignore'],
    },
    {
      icon: 'meson',
      languages: [languages.meson],
    },
    { icon: 'meteor', extensions: [], format: FileFormat.svg },
    {
      icon: 'mjml',
      languages: [languages.mjml],
    },
    {
      icon: 'mlang',
      languages: [languages.mlang],
      light: true,
    },
    {
      icon: 'mocha',
      extensions: ['mocha.opts'],
      filenamesGlob: ['.mocharc'],
      extensionsGlob: ['js', 'json', 'jsonc', 'yaml', 'yml'],
    },
    {
      icon: 'modernizr',
      extensions: ['modernizr'],
      filenamesGlob: ['modernizr', 'modernizrrc', '.modernizr', '.modernizrrc'],
      extensionsGlob: ['js'],
    },
    {
      icon: 'mojolicious',
      languages: [languages.mojolicious],
    },
    {
      icon: 'moleculer',
      filenamesGlob: ['moleculer.config'],
      extensionsGlob: ['js', 'json', 'ts'],
    },
    {
      icon: 'mongo',
      languages: [languages.mongo],
    },
    {
      icon: 'monotone',
      extensions: ['.mtn-ignore'],
    },
    {
      icon: 'mson',
      languages: [languages.mson],
    },
    {
      icon: 'mustache',
      extensions: ['mustache', 'mst'],
      light: true,
    },
    {
      icon: 'nearly',
      languages: [languages.nearley],
    },
    {
      icon: 'nestjs',
      extensions: [
        '.nest-cli.json',
        'nest-cli.json',
        'nestconfig.json',
        '.nestconfig.json',
      ],
    },
    {
      icon: 'nest_adapter_js',
      extensions: ['adapter.js'],
    },
    {
      icon: 'nest_adapter_ts',
      extensions: ['adapter.ts'],
    },
    {
      icon: 'nest_controller_js',
      extensions: ['controller.js'],
    },
    {
      icon: 'nest_controller_ts',
      extensions: ['controller.ts'],
    },
    {
      icon: 'nest_decorator_js',
      extensions: ['decorator.js'],
    },
    {
      icon: 'nest_decorator_ts',
      extensions: ['decorator.ts'],
    },
    {
      icon: 'nest_filter_js',
      extensions: ['filter.js'],
    },
    {
      icon: 'nest_filter_ts',
      extensions: ['filter.ts'],
    },
    {
      icon: 'nest_gateway_js',
      extensions: ['gateway.js'],
    },
    {
      icon: 'nest_gateway_ts',
      extensions: ['gateway.ts'],
    },
    {
      icon: 'nest_guard_js',
      extensions: ['guard.js'],
    },
    {
      icon: 'nest_guard_ts',
      extensions: ['guard.ts'],
    },
    {
      icon: 'nest_interceptor_js',
      extensions: ['interceptor.js'],
    },
    {
      icon: 'nest_interceptor_ts',
      extensions: ['interceptor.ts'],
    },
    {
      icon: 'nest_middleware_js',
      extensions: ['middleware.js'],
    },
    {
      icon: 'nest_middleware_ts',
      extensions: ['middleware.ts'],
    },
    {
      icon: 'nest_module_js',
      extensions: ['module.js'],
    },
    {
      icon: 'nest_module_ts',
      extensions: ['module.ts'],
    },
    {
      icon: 'nest_pipe_js',
      extensions: ['pipe.js'],
    },
    {
      icon: 'nest_pipe_ts',
      extensions: ['pipe.ts'],
    },
    {
      icon: 'nest_service_js',
      extensions: ['service.js'],
    },
    {
      icon: 'nest_service_ts',
      extensions: ['service.ts'],
    },
    {
      icon: 'netlify',
      extensions: ['netlify.toml'],
    },
    {
      icon: 'next',
      extensions: ['next.config.js'],
      light: true,
    },
    {
      icon: 'nginx',
      extensions: ['nginx.conf'],
    },
    {
      icon: 'nim',
      languages: [languages.nim],
    },
    {
      icon: 'nimble',
      languages: [languages.nimble],
    },
    {
      icon: 'ninja',
      extensions: ['build.ninja'],
    },
    {
      icon: 'nix',
      languages: [languages.nix],
    },
    { icon: 'njsproj', extensions: ['njsproj'], format: FileFormat.svg },
    {
      icon: 'node',
      extensions: ['.node-version', '.nvmrc'],
    },
    {
      icon: 'node2',
      extensions: ['.node-version', '.nvmrc'],
    },
    {
      icon: 'nodemon',
      extensions: ['nodemon.json'],
    },
    {
      icon: 'npm',
      extensions: [
        '.npmignore',
        '.npmrc',
        'package.json',
        'package-lock.json',
        'npm-shrinkwrap.json',
      ],
    },
    {
      icon: 'nsi',
      languages: [languages.nsis],
    },
    {
      icon: 'nsri',
      extensions: ['.nsrirc', '.nsriignore', 'nsri.config.js'],
      filenamesGlob: ['.nsrirc'],
      extensionsGlob: ['js', 'json', 'yaml', 'yml'],
    },
    {
      icon: 'nsri-integrity',
      extensions: ['.integrity.json'],
    },
    {
      icon: 'nuget',
      extensions: ['nupkg', 'snupkg', 'nuspec', 'psmdcp'],
    },
    {
      icon: 'numpy',
      extensions: ['npy', 'npz'],
    },
    {
      icon: 'nunjucks',
      extensions: ['nunj', 'njs'],
      languages: [languages.nunjucks],
    },
    {
      icon: 'nuxt',
      filenamesGlob: ['nuxt.config'],
      extensionsGlob: ['js', 'ts'],
    },
    {
      icon: 'nyc',
      extensions: ['.nycrc', '.nycrc.json'],
    },
    {
      icon: 'objectivec',
      languages: [languages.objectivec],
    },
    {
      icon: 'objectivecpp',
      languages: [languages.objectivecpp],
    },
    {
      icon: 'ocaml',
      extensions: ['.merlin'],
      languages: [languages.ocaml],
    },
    {
      icon: 'ogone',
      languages: [languages.ogone],
    },
    {
      icon: 'onenote',
      extensions: ['one', 'onepkg', 'onetoc', 'onetoc2', 'sig'],
    },
    { icon: 'opencl', extensions: ['cl', 'opencl'], format: FileFormat.svg },
    {
      icon: 'openHAB',
      languages: [languages.openHAB],
      light: true,
    },
    { icon: 'org', extensions: ['org'], format: FileFormat.svg },
    {
      icon: 'outlook',
      extensions: ['pst', 'bcmx', 'otm', 'msg', 'oft'],
    },
    { icon: 'ovpn', extensions: ['ovpn'], format: FileFormat.svg },
    { icon: 'package', extensions: ['pkg'], format: FileFormat.svg },
    {
      icon: 'paket',
      filenamesGlob: ['paket'],
      extensionsGlob: [
        'dependencies',
        'lock',
        'references',
        'template',
        'local',
      ],
    },
    { icon: 'patch', extensions: ['patch'], format: FileFormat.svg },
    { icon: 'pcl', extensions: ['pcd'], light: true, format: FileFormat.svg },
    {
      icon: 'pddl',
      languages: [languages.pddl],
    },
    {
      icon: 'pddl_plan',
      languages: [languages.pddlplan],
    },
    {
      icon: 'pddl_happenings',
      languages: [languages.pddlhappenings],
    },
    { icon: 'pdf', extensions: ['pdf'], format: FileFormat.svg },
    {
      icon: 'pdf2',
      extensions: ['pdf'],
    },
    {
      icon: 'perl',
      languages: [languages.perl],
    },
    {
      icon: 'perl2',
      languages: [languages.perl],
    },
    {
      icon: 'perl6',
      languages: [languages.perl6],
    },
    {
      icon: 'pgsql',
      languages: [languages.pgsql],
    },
    { icon: 'photoshop', extensions: ['psd'], format: FileFormat.svg },
    {
      icon: 'photoshop2',
      extensions: ['psd'],
    },
    {
      icon: 'php',
      extensions: [
        'php1',
        'php2',
        'php3',
        'php4',
        'php5',
        'php6',
        'phps',
        'phpsa',
        'phpt',
        'phtml',
        'phar',
      ],
      languages: [languages.php],
    },
    {
      icon: 'php2',
      extensions: [
        'php1',
        'php2',
        'php3',
        'php4',
        'php5',
        'php6',
        'phps',
        'phpsa',
        'phpt',
        'phtml',
        'phar',
      ],
      languages: [languages.php],
    },
    {
      icon: 'php3',
      extensions: [
        'php1',
        'php2',
        'php3',
        'php4',
        'php5',
        'php6',
        'phps',
        'phpsa',
        'phpt',
        'phtml',
        'phar',
      ],
      languages: [languages.php],
    },
    {
      icon: 'phpcsfixer',
      extensions: ['.php_cs', '.php_cs.dist'],
    },
    {
      icon: 'phpunit',
      extensions: ['phpunit', 'phpunit.xml', 'phpunit.xml.dist'],
    },
    {
      icon: 'phraseapp',
      extensions: ['.phraseapp.yml'],
    },
    {
      icon: 'pine',
      languages: [languages.pine],
    },
    {
      icon: 'pip',
      extensions: ['pipfile', 'pipfile.lock'],
      languages: [languages.pip],
    },
    {
      icon: 'platformio',
      extensions: ['platformio.ini'],
      languages: [languages.platformio],
    },
    {
      icon: 'plantuml',
      extensions: ['pu', 'plantuml', 'iuml', 'puml'],
    },
    {
      icon: 'plsql',
      languages: [languages.plsql],
    },
    { icon: 'plsql_package', extensions: ['pck'], format: FileFormat.svg },
    { icon: 'plsql_package_body', extensions: ['pkb'], format: FileFormat.svg },
    {
      icon: 'plsql_package_header',
      extensions: ['pkh'],
    },
    { icon: 'plsql_package_spec', extensions: ['pks'], format: FileFormat.svg },
    {
      icon: 'pnpm',
      extensions: ['pnpmfile.js', 'pnpm-lock.yaml', 'pnpm-workspace.yaml'],
      light: true,
    },
    { icon: 'poedit', extensions: ['po', 'mo'], format: FileFormat.svg },
    {
      icon: 'polymer',
      languages: [languages.polymer],
    },
    {
      icon: 'pony',
      languages: [languages.pony],
    },
    {
      icon: 'postcss',
      languages: [languages.postcss],
    },
    {
      icon: 'postcssconfig',
      extensions: [
        '.postcssrc',
        '.postcssrc.json',
        '.postcssrc.yml',
        '.postcssrc.js',
        'postcss.config.js',
      ],
    },
    {
      icon: 'powerpoint',
      extensions: [
        'pot',
        'potx',
        'potm',
        'pps',
        'ppsx',
        'ppsm',
        'ppt',
        'pptx',
        'pptm',
        'pa',
        'ppa',
        'ppam',
        'sldm',
        'sldx',
      ],
    },
    {
      icon: 'powerpoint2',
      extensions: [
        'pot',
        'potx',
        'potm',
        'pps',
        'ppsx',
        'ppsm',
        'ppt',
        'pptx',
        'pptm',
        'pa',
        'ppa',
        'ppam',
        'sldm',
        'sldx',
      ],
    },
    {
      icon: 'powershell',
      languages: [languages.powershell],
    },
    {
      icon: 'powershell_psm',
      extensions: ['psm1'],
    },
    {
      icon: 'powershell_psd',
      extensions: ['psd1'],
    },
    {
      icon: 'powershell_format',
      extensions: ['format.ps1xml'],
    },
    {
      icon: 'powershell_types',
      extensions: ['types.ps1xml'],
    },
    {
      icon: 'powershell2',
      languages: [languages.powershell],
    },
    {
      icon: 'powershell_psm2',
      extensions: ['psm1'],
    },
    {
      icon: 'powershell_psd2',
      extensions: ['psd1'],
    },
    {
      icon: 'precommit',
      extensions: ['.pre-commit-config.yaml'],
    },
    {
      icon: 'prettier',
      extensions: ['.prettierrc', '.prettierignore'],
      light: true,
    },
    {
      icon: 'prettier',
      filenamesGlob: ['prettier.config'],
      extensionsGlob: ['js', 'cjs', 'ts', 'coffee'],
      light: true,
    },
    {
      icon: 'prettier',
      filenamesGlob: ['.prettierrc'],
      extensionsGlob: ['js', 'cjs', 'json', 'json5', 'yml', 'yaml'],
      light: true,
    },
    {
      icon: 'prisma',
      languages: [languages.prisma],
      light: true,
    },
    {
      icon: 'processinglang',
      languages: [languages.processinglang],
    },
    {
      icon: 'procfile',
      extensions: ['procfile'],
    },
    {
      icon: 'progress',
      languages: [languages.openEdge],
    },
    {
      icon: 'prolog',
      extensions: ['pro', 'P'],
      languages: [languages.prolog],
    },
    {
      icon: 'prometheus',
      languages: [languages.prometheus],
    },
    {
      icon: 'protobuf',
      languages: [languages.protobuf],
    },
    {
      icon: 'protractor',
      filenamesGlob: ['protractor.conf'],
      extensionsGlob: ['js', 'coffee', 'ts'],
    },
    { icon: 'publisher', extensions: ['pub', 'puz'], format: FileFormat.svg },
    {
      icon: 'puppet',
      languages: [languages.puppet],
    },
    {
      icon: 'pug',
      extensions: [
        '.jade-lintrc',
        '.pug-lintrc',
        '.jade-lint.json',
        '.pug-lintrc.js',
        '.pug-lintrc.json',
      ],
      languages: [languages.pug],
    },
    {
      icon: 'purescript',
      languages: [languages.purescript],
      light: true,
    },
    {
      icon: 'pyret',
      languages: [languages.pyret],
    },
    {
      icon: 'python',
      languages: [languages.python],
    },
    {
      icon: 'pytyped',
      extensions: ['py.typed'],
    },
    {
      icon: 'pyup',
      extensions: ['.pyup', '.pyup.yml'],
    },
    { icon: 'q', extensions: ['q'], format: FileFormat.svg },
    { icon: 'qbs', extensions: ['qbs'], format: FileFormat.svg },
    {
      icon: 'qlikview',
      extensions: ['qvd', 'qvw'],
      languages: [languages.qlik],
    },
    {
      icon: 'qml',
      languages: [languages.qml],
    },
    {
      icon: 'qmldir',
      extensions: ['qmldir'],
    },
    {
      icon: 'qsharp',
      languages: [languages.qsharp],
    },
    {
      icon: 'quasar',
      extensions: ['quasar.conf.js'],
    },
    {
      icon: 'r',
      languages: [languages.r],
    },
    {
      icon: 'racket',
      languages: [languages.racket],
    },
    { icon: 'rails', extensions: [], format: FileFormat.svg },
    { icon: 'rake', extensions: ['rake'], format: FileFormat.svg },
    {
      icon: 'rake',
      extensions: ['rakefile'],
    },
    {
      icon: 'raml',
      languages: [languages.raml],
    },
    {
      icon: 'razor',
      languages: [languages.razor],
    },
    {
      icon: 'razzle',
      filenamesGlob: ['razzle.config'],
      extensionsGlob: ['js'],
      light: true,
    },
    {
      icon: 'reactjs',
      languages: [languages.javascriptreact],
    },
    { icon: 'reacttemplate', extensions: ['rt'], format: FileFormat.svg },
    {
      icon: 'reactts',
      languages: [languages.typescriptreact],
    },
    {
      icon: 'reason',
      languages: [languages.reason],
    },
    {
      icon: 'red',
      languages: [languages.red],
    },
    { icon: 'registry', extensions: ['reg'], format: FileFormat.svg },
    {
      icon: 'rego',
      extensions: ['rego'],
    },
    {
      icon: 'rehype',
      extensions: ['.rehyperc', '.rehypeignore'],
      filenamesGlob: ['.rehyperc'],
      extensionsGlob: ['js', 'json', 'yml', 'yaml'],
      light: true,
    },
    {
      icon: 'remark',
      extensions: ['.remarkrc', '.remarkignore'],
      filenamesGlob: ['.remarkrc'],
      extensionsGlob: ['js', 'json', 'yml', 'yaml'],
      light: true,
    },
    {
      icon: 'renovate',
      extensions: ['.renovaterc'],
      filenamesGlob: ['renovate', '.renovaterc'],
      extensionsGlob: ['json'],
    },
    {
      icon: 'rescript',
      languages: [languages.rescript],
    },
    {
      icon: 'rest',
      languages: [languages.restructuredtext],
    },
    {
      icon: 'retext',
      extensions: ['.retextrc', '.retextignore'],
      filenamesGlob: ['.retextrc'],
      extensionsGlob: ['js', 'json', 'yml', 'yaml'],
      light: true,
    },
    {
      icon: 'rexx',
      languages: [languages.rexx],
    },
    {
      icon: 'riot',
      languages: [languages.riot],
    },
    {
      icon: 'robotframework',
      languages: [languages.robot],
    },
    {
      icon: 'robots',
      extensions: ['robots.txt'],
    },
    {
      icon: 'rollup',
      filenamesGlob: [
        'rollup.config',
        'rollup.config.common',
        'rollup.config.dev',
        'rollup.config.prod',
      ],
      extensionsGlob: ['js', 'cjs', 'mjs', 'coffee', 'ts'],
    },
    {
      icon: 'rmd',
      languages: [languages.rmd],
    },
    { icon: 'rproj', extensions: ['rproj'], format: FileFormat.svg },
    {
      icon: 'rspec',
      extensions: ['.rspec'],
    },
    {
      icon: 'rubocop',
      extensions: ['.rubocop.yml', '.rubocop_todo.yml'],
      light: true,
    },
    {
      icon: 'ruby',
      languages: [languages.ruby],
    },
    {
      icon: 'rust',
      languages: [languages.rust],
    },
    {
      icon: 'rust_toolchain',
      extensions: ['rust-toolchain'],
    },
    {
      icon: 'sails',
      extensions: ['.sailsrc'],
    },
    { icon: 'saltstack', extensions: ['sls'], format: FileFormat.svg },
    {
      icon: 'san',
      languages: [languages.san],
    },
    {
      icon: 'sas',
      languages: [languages.sas],
    },
    { icon: 'sass', extensions: ['sass'], format: FileFormat.svg },
    {
      icon: 'sbt',
      languages: [languages.sbt],
    },
    {
      icon: 'scala',
      languages: [languages.scala],
    },
    {
      icon: 'script',
      languages: [languages.vbscript],
    },
    {
      icon: 'scss',
      extensions: ['scssm'],
      languages: [languages.scss],
    },
    {
      icon: 'scilab',
      languages: [languages.scilab],
    },
    {
      icon: 'sdlang',
      languages: [languages.sdlang],
    },
    {
      icon: 'sentry',
      extensions: ['.sentryclirc'],
    },
    {
      icon: 'serverless',
      extensions: ['serverless.yml'],
    },
    {
      icon: 'sequelize',
      extensions: ['.sequelizerc'],
      filenamesGlob: ['.sequelizerc'],
      extensionsGlob: ['js', 'json'],
    },
    {
      icon: 'shaderlab',
      extensions: ['unity'],
      languages: [languages.shaderlab],
      light: true,
    },
    {
      icon: 'shell',
      extensions: ['fish'],
      languages: [languages.shellscript],
    },
    { icon: 'sketch', extensions: ['sketch'], format: FileFormat.svg },
    {
      icon: 'slang',
      languages: [languages.slang],
    },
    {
      icon: 'slice',
      languages: [languages.slice],
    },
    {
      icon: 'slim',
      languages: [languages.slim],
    },
    { icon: 'sln', extensions: ['sln'], format: FileFormat.svg },
    {
      icon: 'sln2',
      extensions: ['sln'],
    },
    {
      icon: 'silverstripe',
      languages: [languages.silverstripe],
    },
    {
      icon: 'skipper',
      extensions: ['eskip'],
      languages: [languages.skipper],
    },
    {
      icon: 'smarty',
      languages: [languages.smarty],
    },
    {
      icon: 'snapcraft',
      extensions: ['snapcraft.yaml'],
    },
    {
      icon: 'snort',
      languages: [languages.snort],
    },
    {
      icon: 'snyk',
      extensions: ['.snyk'],
    },
    {
      icon: 'solidarity',
      extensions: ['.solidarity', '.solidarity.json'],
    },
    {
      icon: 'solidity',
      languages: [languages.solidity],
      light: true,
    },
    { icon: 'source', extensions: [], format: FileFormat.svg },
    {
      icon: 'spacengine',
      extensions: ['spe'],
    },
    {
      icon: 'sqf',
      languages: [languages.sqf],
    },
    {
      icon: 'sql',
      languages: [languages.sql],
    },
    {
      icon: 'sqlite',
      extensions: ['sqlite', 'sqlite3', 'db3'],
    },
    {
      icon: 'squirrel',
      languages: [languages.squirrel],
    },
    { icon: 'sss', extensions: ['sss'], format: FileFormat.svg },
    {
      icon: 'stan',
      languages: [languages.stan],
    },
    {
      icon: 'stata',
      extensions: ['dta'],
      languages: [languages.stata],
    },
    {
      icon: 'stencil',
      languages: [languages.stencil, languages.stencilhtml],
    },
    { icon: 'style', extensions: [], format: FileFormat.svg },
    {
      icon: 'stylelint',
      extensions: ['.stylelintrc', '.stylelintignore', '.stylelintcache'],
      filenamesGlob: ['stylelint.config', '.stylelintrc'],
      extensionsGlob: ['js', 'json', 'yaml', 'yml', 'ts'],
      light: true,
    },
    {
      icon: 'stylable',
      languages: [languages.stylable],
    },
    {
      icon: 'styled',
      languages: [languages.styled],
    },
    {
      icon: 'stylish_haskell',
      extensions: ['.stylish-haskell.yaml'],
    },
    {
      icon: 'stylus',
      languages: [languages.stylus],
      light: true,
    },
    { icon: 'storyboard', extensions: ['storyboard'], format: FileFormat.svg },
    {
      icon: 'storybook',
      filenamesGlob: ['story', 'stories'],
      extensionsGlob: ['js', 'jsx', 'ts', 'tsx'],
    },
    {
      icon: 'subversion',
      extensions: ['.svnignore'],
    },
    {
      icon: 'svelte',
      languages: [languages.svelte],
    },
    { icon: 'svg', extensions: ['svg'], format: FileFormat.svg },
    {
      icon: 'swagger',
      languages: [languages.swagger],
    },
    {
      icon: 'swift',
      extensions: ['package.pins'],
      languages: [languages.swift],
    },
    {
      icon: 'swig',
      languages: [languages.swig],
    },
    {
      icon: 'symfony',
      extensions: ['symfony.lock'],
      light: true,
    },
    {
      icon: 'systemd',
      languages: [languages.systemd],
      light: true,
    },
    {
      icon: 'systemverilog',
      languages: [languages.systemverilog],
      light: true,
    },
    {
      icon: 't4tt',
      languages: [languages.t4],
    },
    {
      icon: 'tailwind',
      filenamesGlob: ['tailwind', 'tailwind.config'],
      extensionsGlob: ['js', 'coffee', 'ts'],
    },
    {
      icon: 'tt',
      extensions: ['tt2'],
      languages: [languages.templatetoolkit],
    },
    { icon: 'tcl', extensions: ['tcl', 'exp'], format: FileFormat.svg },
    {
      icon: 'tera',
      languages: [languages.tera],
    },
    {
      icon: 'terraform',
      extensions: ['tfstate'],
      languages: [languages.terraform],
    },
    { icon: 'test', extensions: ['tst'], format: FileFormat.svg },
    {
      icon: 'testcafe',
      extensions: ['.testcaferc.json'],
      light: true,
    },
    {
      icon: 'testjs',
      filenamesGlob: ['test', 'spec'],
      extensionsGlob: ['js', 'jsx', 'mjs'],
      light: true,
    },
    {
      icon: 'testts',
      filenamesGlob: ['test', 'spec', 'e2e-test', 'e2e-spec'],
      extensionsGlob: ['ts', 'tsx'],
    },
    {
      icon: 'tex',
      extensions: ['texi', 'tikz'],
      languages: [
        languages.tex,
        languages.latex,
        languages.bibtex,
        languages.doctex,
      ],
      light: true,
    },
    {
      icon: 'text',
      extensions: ['csv'],
      languages: [languages.plaintext],
    },
    {
      icon: 'textile',
      languages: [languages.textile],
    },
    {
      icon: 'tiltfile',
      languages: [languages.tiltfile],
    },
    {
      icon: 'tfs',
      extensions: ['.tfignore'],
    },
    { icon: 'todo', extensions: ['todo'], light: true, format: FileFormat.svg },
    {
      icon: 'toml',
      languages: [languages.toml],
      light: true,
    },
    {
      icon: 'tox',
      extensions: ['tox.ini'],
    },
    {
      icon: 'travis',
      extensions: ['.travis.yml'],
    },
    {
      icon: 'tsconfig',
      filenamesGlob: [
        'tsconfig',
        'tsconfig.app',
        'tsconfig.base',
        'tsconfig.common',
        'tsconfig.dev',
        'tsconfig.development',
        'tsconfig.e2e',
        'tsconfig.prod',
        'tsconfig.production',
        'tsconfig.server',
        'tsconfig.spec',
        'tsconfig.staging',
        'tsconfig.test',
      ],
      extensionsGlob: ['json'],
    },
    {
      icon: 'tslint',
      extensions: ['tslint.json', 'tslint.yaml', 'tslint.yml'],
    },
    {
      icon: 'ttcn',
      languages: [languages.ttcn],
    },
    {
      icon: 'tuc',
      languages: [languages.tuc],
    },
    {
      icon: 'twig',
      languages: [languages.twig],
    },
    {
      icon: 'typedoc',
      filenamesGlob: ['typedoc'],
      extensionsGlob: ['js', 'json'],
    },
    {
      icon: 'typescript',
      languages: [languages.typescript],
    },
    {
      icon: 'typescript_official',
      languages: [languages.typescript],
    },
    { icon: 'typescriptdef', extensions: ['d.ts'], format: FileFormat.svg },
    {
      icon: 'typescriptdef_official',
      extensions: ['d.ts'],
    },
    {
      icon: 'typo3',
      languages: [languages.typo3],
    },
    {
      icon: 'unibeautify',
      extensions: ['.unibeautifyrc', 'unibeautify.config.js'],
      filenamesGlob: ['.unibeautifyrc'],
      extensionsGlob: ['js', 'json', 'yaml', 'yml'],
      light: true,
    },
    {
      icon: 'unlicense',
      extensions: ['unlicense', 'unlicence'],
      filenamesGlob: ['unlicense', 'unlicence'],
      extensionsGlob: ['md', 'txt'],
    },
    {
      icon: 'vagrant',
      extensions: ['vagrantfile'],
    },
    { icon: 'vala', extensions: ['vala'], format: FileFormat.svg },
    { icon: 'vapi', extensions: ['vapi'], format: FileFormat.svg },
    { icon: 'vash', extensions: ['vash'], light: true, format: FileFormat.svg },
    {
      icon: 'vb',
      languages: [languages.vb],
    },
    {
      icon: 'vba',
      languages: [languages.vba],
    },
    { icon: 'vbhtml', extensions: ['vbhtml'], format: FileFormat.svg },
    { icon: 'vbproj', extensions: ['vbproj'], format: FileFormat.svg },
    { icon: 'vcxproj', extensions: ['vcxproj'], format: FileFormat.svg },
    {
      icon: 'velocity',
      languages: [languages.velocity],
    },
    {
      icon: 'verilog',
      languages: [languages.verilog],
    },
    {
      icon: 'vhdl',
      languages: [languages.vhdl],
    },
    {
      // https://en.wikipedia.org/wiki/Video_file_format
      icon: 'video',
      extensions: [
        '3g2',
        '3gp',
        'asf',
        'amv',
        'avi',
        'divx',
        'qt',
        'f4a',
        'f4b',
        'f4p',
        'f4v',
        'flv',
        'm2v',
        'm4v',
        'mkv',
        'mk3d',
        'mov',
        'mp2',
        'mp4',
        'mpe',
        'mpeg',
        'mpeg2',
        'mpg',
        'mpv',
        'nsv',
        'ogv',
        'rm',
        'rmvb',
        'svi',
        'vob',
        'webm',
        'wmv',
      ],
    },
    { icon: 'view', extensions: [], format: FileFormat.svg },
    {
      icon: 'vim',
      extensions: ['.vimrc', '.gvimrc'],
      languages: [languages.viml],
    },
    {
      icon: 'vlang',
      languages: [languages.vlang],
    },
    {
      icon: 'volt',
      languages: [languages.volt],
    },
    {
      icon: 'vscode',
      extensions: ['.vscodeignore'],
      filenamesGlob: ['launch', 'tasks', 'vscodeignore'],
      extensionsGlob: ['json'],
    },
    {
      icon: 'vscode2',
      extensions: ['.vscodeignore'],
      filenamesGlob: ['launch', 'tasks', 'vscodeignore'],
      extensionsGlob: ['json'],
    },
    {
      icon: 'vscode3',
      extensions: ['.vscodeignore'],
      filenamesGlob: ['launch', 'tasks', 'vscodeignore'],
      extensionsGlob: ['json'],
    },
    {
      icon: 'vscode-insiders',
      extensions: ['.vscodeignore'],
      filenamesGlob: ['launch', 'tasks', 'vscodeignore'],
      extensionsGlob: ['json'],
    },
    { icon: 'vsix', extensions: ['vsix'], light: true, format: FileFormat.svg },
    {
      icon: 'vsixmanifest',
      extensions: ['vsixmanifest'],
      light: true,
    },
    {
      icon: 'vue',
      languages: [languages.vue],
    },
    {
      icon: 'vueconfig',
      extensions: ['.vuerc', 'vue.config.js'],
    },
    {
      icon: 'wallaby',
      filenamesGlob: ['wallaby', 'wallaby.conf', '.wallaby', '.wallaby.conf'],
      extensionsGlob: ['json', 'js', 'ts', 'coffee'],
    },
    {
      icon: 'watchmanconfig',
      extensions: ['.watchmanconfig'],
    },
    {
      icon: 'wasm',
      extensions: ['wasm'],
      languages: [languages.wasm],
    },
    {
      icon: 'webp',
      extensions: ['webp'],
    },
    {
      icon: 'webpack',
      filenamesGlob: [
        'webpack.base.conf',
        'webpack.common',
        'webpack.config',
        'webpack.config.base',
        'webpack.config.common',
        'webpack.config.dev',
        'webpack.config.development',
        'webpack.config.staging',
        'webpack.config.test',
        'webpack.config.prod',
        'webpack.config.production',
        'webpack.config.babel',
        'webpack.config.base.babel',
        'webpack.config.common.babel',
        'webpack.config.dev.babel',
        'webpack.config.development.babel',
        'webpack.config.staging.babel',
        'webpack.config.test.babel',
        'webpack.config.prod.babel',
        'webpack.config.production.babel',
        'webpack.dev',
        'webpack.dev.conf',
        'webpack.prod',
        'webpack.prod.conf',
        'webpack.main.config',
        'webpack.mix',
        'webpack.plugins',
        'webpack.renderer.config',
        'webpack.rules',
        'webpack.test.conf',
      ],
      extensionsGlob: ['js', 'coffee', 'ts'],
    },
    {
      icon: 'wenyan',
      languages: [languages.wenyan],
    },
    {
      icon: 'wercker',
      extensions: ['wercker.yml'],
    },
    {
      icon: 'wolfram',
      languages: [languages.wolfram],
    },
    {
      icon: 'word',
      extensions: ['doc', 'docx', 'docm', 'dot', 'dotx', 'dotm', 'wll'],
    },
    {
      icon: 'word2',
      extensions: ['doc', 'docx', 'docm', 'dot', 'dotx', 'dotm', 'wll'],
    },
    {
      icon: 'wpml',
      extensions: ['wpml-config.xml'],
    },
    {
      icon: 'wurst',
      languages: [languages.wurst],
    },
    { icon: 'wxml', extensions: ['wxml'], format: FileFormat.svg },
    { icon: 'wxss', extensions: ['wxss'], format: FileFormat.svg },
    { icon: 'xcode', extensions: ['xcodeproj'], format: FileFormat.svg },
    {
      icon: 'xfl',
      extensions: ['xfl'],
      light: true,
    },
    { icon: 'xib', extensions: ['xib'], format: FileFormat.svg },
    { icon: 'xliff', extensions: ['xliff', 'xlf'], format: FileFormat.svg },
    {
      icon: 'xmake',
      languages: [languages.xmake],
    },
    {
      icon: 'xml',
      extensions: ['pex', 'tmlanguage'],
      languages: [languages.xml],
    },
    {
      icon: 'xquery',
      languages: [languages.xquery],
    },
    {
      icon: 'xsl',
      languages: [languages.xsl],
    },
    {
      icon: 'yacc',
      languages: [languages.yacc],
    },
    {
      icon: 'yaml',
      languages: [languages.yaml, languages.textmateyaml],
      light: true,
    },
    {
      icon: 'yamllint',
      extensions: ['.yamllint'],
    },
    {
      icon: 'yandex',
      extensions: ['.yaspellerrc', '.yaspeller.json'],
    },
    {
      icon: 'yang',
      languages: [languages.yang],
    },
    {
      icon: 'yarn',
      extensions: [
        'yarn.lock',
        '.yarnrc',
        '.yarnclean',
        '.yarn-integrity',
        '.yarn-metadata.json',
        '.yarnignore',
      ],
    },
    {
      icon: 'yeoman',
      extensions: ['.yo-rc.json'],
    },
    {
      icon: 'zeit',
      extensions: ['now.json', '.nowignore', 'vercel.json', '.vercelignore'],
      light: true,
    },
    {
      icon: 'zig',
      languages: [languages.zig],
    },
    {
      icon: 'zip',
      extensions: [
        'zip',
        'rar',
        '7z',
        'tar',
        'tgz',
        'bz',
        'gz',
        'bzip2',
        'xz',
        'bz2',
        'zipx',
      ],
    },
    {
      icon: 'zip2',
      extensions: [
        'zip',
        'rar',
        '7z',
        'tar',
        'tgz',
        'bz',
        'gz',
        'bzip2',
        'xz',
        'bz2',
        'zipx',
      ],
    },
  ],
};
