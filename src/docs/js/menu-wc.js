'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">HileoHub</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-736e6f51532f02f1b95ede7e86fb2ad0"' : 'data-target="#xs-components-links-module-AppModule-736e6f51532f02f1b95ede7e86fb2ad0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-736e6f51532f02f1b95ede7e86fb2ad0"' :
                                            'id="xs-components-links-module-AppModule-736e6f51532f02f1b95ede7e86fb2ad0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GithubModule.html" data-type="entity-link">GithubModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GithubRoutingModule.html" data-type="entity-link">GithubRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IdentityModule.html" data-type="entity-link">IdentityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' : 'data-target="#xs-components-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' :
                                            'id="xs-components-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' }>
                                            <li class="link">
                                                <a href="components/IdentityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IdentityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' : 'data-target="#xs-injectables-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' :
                                        'id="xs-injectables-links-module-IdentityModule-ddd7163ff35deb174e89b3b4a90134a5"' }>
                                        <li class="link">
                                            <a href="injectables/IdentityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IdentityService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IdentityRoutingModule.html" data-type="entity-link">IdentityRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-9ba3d6371d82013249015f072a2ff503"' : 'data-target="#xs-injectables-links-module-SharedModule-9ba3d6371d82013249015f072a2ff503"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-9ba3d6371d82013249015f072a2ff503"' :
                                        'id="xs-injectables-links-module-SharedModule-9ba3d6371d82013249015f072a2ff503"' }>
                                        <li class="link">
                                            <a href="injectables/GithubService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GithubService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/IdentityService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IdentityService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MessageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MessageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ActivityResultComponent.html" data-type="entity-link">ActivityResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ActivitySearchComponent.html" data-type="entity-link">ActivitySearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CodeResultComponent.html" data-type="entity-link">CodeResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CodeSearchComponent.html" data-type="entity-link">CodeSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommitResultComponent.html" data-type="entity-link">CommitResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommitsComponent.html" data-type="entity-link">CommitsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommitSearchComponent.html" data-type="entity-link">CommitSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FrameworkComponent.html" data-type="entity-link">FrameworkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FrameworksComponent.html" data-type="entity-link">FrameworksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GithubComponent.html" data-type="entity-link">GithubComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LabelSearchComponent.html" data-type="entity-link">LabelSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguageResultComponent.html" data-type="entity-link">LanguageResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguagesComponent.html" data-type="entity-link">LanguagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguageSearchComponent.html" data-type="entity-link">LanguageSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LibrariesComponent.html" data-type="entity-link">LibrariesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LibraryComponent.html" data-type="entity-link">LibraryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PackageResultComponent.html" data-type="entity-link">PackageResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PackageSearchComponent.html" data-type="entity-link">PackageSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatternResultComponent.html" data-type="entity-link">PatternResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PatternSearchComponent.html" data-type="entity-link">PatternSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlatformComponent.html" data-type="entity-link">PlatformComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlatformsComponent.html" data-type="entity-link">PlatformsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepoResultComponent.html" data-type="entity-link">RepoResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepoSearchComponent.html" data-type="entity-link">RepoSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TopicResultComponent.html" data-type="entity-link">TopicResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TopicSearchComponent.html" data-type="entity-link">TopicSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserProfileComponent.html" data-type="entity-link">UserProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserResultComponent.html" data-type="entity-link">UserResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserSearchComponent.html" data-type="entity-link">UserSearchComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Crypto.html" data-type="entity-link">Crypto</a>
                            </li>
                            <li class="link">
                                <a href="classes/KeyValue.html" data-type="entity-link">KeyValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/SharedOptions.html" data-type="entity-link">SharedOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfile.html" data-type="entity-link">UserProfile</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GithubService.html" data-type="entity-link">GithubService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IdentityService.html" data-type="entity-link">IdentityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link">MessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/RequestInterceptor.html" data-type="entity-link">RequestInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Author.html" data-type="entity-link">Author</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CodeSearch.html" data-type="entity-link">CodeSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitResult.html" data-type="entity-link">CommitResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitSearch.html" data-type="entity-link">CommitSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Committer.html" data-type="entity-link">Committer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompanyResult.html" data-type="entity-link">CompanyResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompanySearch.html" data-type="entity-link">CompanySearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContentSearch.html" data-type="entity-link">ContentSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Credentials.html" data-type="entity-link">Credentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Devicon.html" data-type="entity-link">Devicon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dictionary.html" data-type="entity-link">Dictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GitResult.html" data-type="entity-link">GitResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GitTree.html" data-type="entity-link">GitTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICollection.html" data-type="entity-link">ICollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IconResult.html" data-type="entity-link">IconResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Languages.html" data-type="entity-link">Languages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PackageResult.html" data-type="entity-link">PackageResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PackageSearch.html" data-type="entity-link">PackageSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProjectResult.html" data-type="entity-link">ProjectResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProjectSearch.html" data-type="entity-link">ProjectSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RepoResult.html" data-type="entity-link">RepoResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RepoSearch.html" data-type="entity-link">RepoSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopicResult.html" data-type="entity-link">TopicResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TopicSearch.html" data-type="entity-link">TopicSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResult.html" data-type="entity-link">UserResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSearch.html" data-type="entity-link">UserSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VerificationModel.html" data-type="entity-link">VerificationModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});