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
                                            'data-target="#components-links-module-AppModule-c7cb717fae8d54ab63ce217c99a4a6c4"' : 'data-target="#xs-components-links-module-AppModule-c7cb717fae8d54ab63ce217c99a4a6c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c7cb717fae8d54ab63ce217c99a4a6c4"' :
                                            'id="xs-components-links-module-AppModule-c7cb717fae8d54ab63ce217c99a4a6c4"' }>
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
                                            'data-target="#components-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' : 'data-target="#xs-components-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' :
                                            'id="xs-components-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' }>
                                            <li class="link">
                                                <a href="components/IdentityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IdentityComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' : 'data-target="#xs-injectables-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' :
                                        'id="xs-injectables-links-module-IdentityModule-8a68eece0445921e32dfe8269860971f"' }>
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
                                <a href="modules/PackageModule.html" data-type="entity-link">PackageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PackageModule-3890f494be9d33727f0975164870118f"' : 'data-target="#xs-components-links-module-PackageModule-3890f494be9d33727f0975164870118f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PackageModule-3890f494be9d33727f0975164870118f"' :
                                            'id="xs-components-links-module-PackageModule-3890f494be9d33727f0975164870118f"' }>
                                            <li class="link">
                                                <a href="components/PackageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PackageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-429ea551d7854e91c9e927581037afb2"' : 'data-target="#xs-components-links-module-ProfileModule-429ea551d7854e91c9e927581037afb2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-429ea551d7854e91c9e927581037afb2"' :
                                            'id="xs-components-links-module-ProfileModule-429ea551d7854e91c9e927581037afb2"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModule.html" data-type="entity-link">ProjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProjectModule-4666ad794a06b6f141982ba24b1cdccc"' : 'data-target="#xs-components-links-module-ProjectModule-4666ad794a06b6f141982ba24b1cdccc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProjectModule-4666ad794a06b6f141982ba24b1cdccc"' :
                                            'id="xs-components-links-module-ProjectModule-4666ad794a06b6f141982ba24b1cdccc"' }>
                                            <li class="link">
                                                <a href="components/ProjectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProjectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoryModule.html" data-type="entity-link">RepositoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RepositoryModule-cc8b7b69af9498e1b7ea3db44fd28bb4"' : 'data-target="#xs-components-links-module-RepositoryModule-cc8b7b69af9498e1b7ea3db44fd28bb4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RepositoryModule-cc8b7b69af9498e1b7ea3db44fd28bb4"' :
                                            'id="xs-components-links-module-RepositoryModule-cc8b7b69af9498e1b7ea3db44fd28bb4"' }>
                                            <li class="link">
                                                <a href="components/RepositoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepositoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-490308164d537e444a11f24337056641"' : 'data-target="#xs-injectables-links-module-SharedModule-490308164d537e444a11f24337056641"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-490308164d537e444a11f24337056641"' :
                                        'id="xs-injectables-links-module-SharedModule-490308164d537e444a11f24337056641"' }>
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
                                <a href="components/CodeResultComponent.html" data-type="entity-link">CodeResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CodeSearchComponent.html" data-type="entity-link">CodeSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CommitSearchComponent.html" data-type="entity-link">CommitSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GithubComponent.html" data-type="entity-link">GithubComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IssueSearchComponent.html" data-type="entity-link">IssueSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LabelSearchComponent.html" data-type="entity-link">LabelSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PackageResultComponent.html" data-type="entity-link">PackageResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PackageSearchComponent.html" data-type="entity-link">PackageSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectResultComponent.html" data-type="entity-link">ProjectResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectSearchComponent.html" data-type="entity-link">ProjectSearchComponent</a>
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
                                <a href="interfaces/CodeSearch.html" data-type="entity-link">CodeSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitResult.html" data-type="entity-link">CommitResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitResult-1.html" data-type="entity-link">CommitResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommitSearch.html" data-type="entity-link">CommitSearch</a>
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
                                <a href="interfaces/Dictionary.html" data-type="entity-link">Dictionary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GitSearch.html" data-type="entity-link">GitSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PackageResult.html" data-type="entity-link">PackageResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PackageSearch.html" data-type="entity-link">PackageSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Params.html" data-type="entity-link">Params</a>
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
                                <a href="interfaces/TreeSearch.html" data-type="entity-link">TreeSearch</a>
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