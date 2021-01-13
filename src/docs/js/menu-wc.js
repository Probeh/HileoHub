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
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-70d279cada42e7d29e8b562c94a4e26d"' : 'data-target="#xs-components-links-module-AccountModule-70d279cada42e7d29e8b562c94a4e26d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-70d279cada42e7d29e8b562c94a4e26d"' :
                                            'id="xs-components-links-module-AccountModule-70d279cada42e7d29e8b562c94a4e26d"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link">AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0ff4d0970d79ce7af1bc88fbf78d3899"' : 'data-target="#xs-components-links-module-AppModule-0ff4d0970d79ce7af1bc88fbf78d3899"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0ff4d0970d79ce7af1bc88fbf78d3899"' :
                                            'id="xs-components-links-module-AppModule-0ff4d0970d79ce7af1bc88fbf78d3899"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CloudServicesModule.html" data-type="entity-link">CloudServicesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CloudServicesModule-bc0d53a773c04f1dcca718c5ef26e4aa"' : 'data-target="#xs-components-links-module-CloudServicesModule-bc0d53a773c04f1dcca718c5ef26e4aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CloudServicesModule-bc0d53a773c04f1dcca718c5ef26e4aa"' :
                                            'id="xs-components-links-module-CloudServicesModule-bc0d53a773c04f1dcca718c5ef26e4aa"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CloudServicesRoutingModule.html" data-type="entity-link">CloudServicesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link">CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CompaniesModule-4c4bb0d068498e8ce03a360d6252459e"' : 'data-target="#xs-components-links-module-CompaniesModule-4c4bb0d068498e8ce03a360d6252459e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompaniesModule-4c4bb0d068498e8ce03a360d6252459e"' :
                                            'id="xs-components-links-module-CompaniesModule-4c4bb0d068498e8ce03a360d6252459e"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesRoutingModule.html" data-type="entity-link">CompaniesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnvironmentsModule.html" data-type="entity-link">EnvironmentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EnvironmentsModule-573154200f2e2fccf4d8b3f68f9fa733"' : 'data-target="#xs-components-links-module-EnvironmentsModule-573154200f2e2fccf4d8b3f68f9fa733"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnvironmentsModule-573154200f2e2fccf4d8b3f68f9fa733"' :
                                            'id="xs-components-links-module-EnvironmentsModule-573154200f2e2fccf4d8b3f68f9fa733"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnvironmentsRoutingModule.html" data-type="entity-link">EnvironmentsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FrameworksModule.html" data-type="entity-link">FrameworksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FrameworksModule-587577d3c16e07e46aa6dd4efd0ccf4b"' : 'data-target="#xs-components-links-module-FrameworksModule-587577d3c16e07e46aa6dd4efd0ccf4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FrameworksModule-587577d3c16e07e46aa6dd4efd0ccf4b"' :
                                            'id="xs-components-links-module-FrameworksModule-587577d3c16e07e46aa6dd4efd0ccf4b"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FrameworksRoutingModule.html" data-type="entity-link">FrameworksRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-c53b6d7aaaec38390f3b04afd6b804a0"' : 'data-target="#xs-components-links-module-HomeModule-c53b6d7aaaec38390f3b04afd6b804a0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-c53b6d7aaaec38390f3b04afd6b804a0"' :
                                            'id="xs-components-links-module-HomeModule-c53b6d7aaaec38390f3b04afd6b804a0"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IndustriesModule.html" data-type="entity-link">IndustriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IndustriesModule-2ac850a319c84abf33460fa8844c69c6"' : 'data-target="#xs-components-links-module-IndustriesModule-2ac850a319c84abf33460fa8844c69c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IndustriesModule-2ac850a319c84abf33460fa8844c69c6"' :
                                            'id="xs-components-links-module-IndustriesModule-2ac850a319c84abf33460fa8844c69c6"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IndustriesRoutingModule.html" data-type="entity-link">IndustriesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InsightsModule.html" data-type="entity-link">InsightsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InsightsModule-0c756de1ba0e9c304d1d19eec3549731"' : 'data-target="#xs-components-links-module-InsightsModule-0c756de1ba0e9c304d1d19eec3549731"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InsightsModule-0c756de1ba0e9c304d1d19eec3549731"' :
                                            'id="xs-components-links-module-InsightsModule-0c756de1ba0e9c304d1d19eec3549731"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InsightsRoutingModule.html" data-type="entity-link">InsightsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageModule.html" data-type="entity-link">LanguageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LanguageModule-5c44dbfbd4d02eb752820d5b0039ec83"' : 'data-target="#xs-components-links-module-LanguageModule-5c44dbfbd4d02eb752820d5b0039ec83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LanguageModule-5c44dbfbd4d02eb752820d5b0039ec83"' :
                                            'id="xs-components-links-module-LanguageModule-5c44dbfbd4d02eb752820d5b0039ec83"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LanguageRoutingModule.html" data-type="entity-link">LanguageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LanguagesModule.html" data-type="entity-link">LanguagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LanguagesModule-70e6d251d6455deb4e85bb8de7da8e2d"' : 'data-target="#xs-components-links-module-LanguagesModule-70e6d251d6455deb4e85bb8de7da8e2d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LanguagesModule-70e6d251d6455deb4e85bb8de7da8e2d"' :
                                            'id="xs-components-links-module-LanguagesModule-70e6d251d6455deb4e85bb8de7da8e2d"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LanguagesRoutingModule.html" data-type="entity-link">LanguagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LibrariesModule.html" data-type="entity-link">LibrariesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LibrariesModule-81efd21a525b35d6b72ada40201a89c9"' : 'data-target="#xs-components-links-module-LibrariesModule-81efd21a525b35d6b72ada40201a89c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LibrariesModule-81efd21a525b35d6b72ada40201a89c9"' :
                                            'id="xs-components-links-module-LibrariesModule-81efd21a525b35d6b72ada40201a89c9"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LibrariesRoutingModule.html" data-type="entity-link">LibrariesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoadingModule.html" data-type="entity-link">LoadingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoadingModule-287a966b68c297f79244c2df18c64a4a"' : 'data-target="#xs-components-links-module-LoadingModule-287a966b68c297f79244c2df18c64a4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoadingModule-287a966b68c297f79244c2df18c64a4a"' :
                                            'id="xs-components-links-module-LoadingModule-287a966b68c297f79244c2df18c64a4a"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoadingRoutingModule.html" data-type="entity-link">LoadingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-11cda0441c4277c8ef69c4d19a574d61"' : 'data-target="#xs-components-links-module-LoginModule-11cda0441c4277c8ef69c4d19a574d61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-11cda0441c4277c8ef69c4d19a574d61"' :
                                            'id="xs-components-links-module-LoginModule-11cda0441c4277c8ef69c4d19a574d61"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewModule.html" data-type="entity-link">OverviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OverviewModule-27b7da2f2a3f456ea179c8552783b176"' : 'data-target="#xs-components-links-module-OverviewModule-27b7da2f2a3f456ea179c8552783b176"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OverviewModule-27b7da2f2a3f456ea179c8552783b176"' :
                                            'id="xs-components-links-module-OverviewModule-27b7da2f2a3f456ea179c8552783b176"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewRoutingModule.html" data-type="entity-link">OverviewRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlatformsModule.html" data-type="entity-link">PlatformsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlatformsModule-1d3f1054c20d3105005e254e05fa2590"' : 'data-target="#xs-components-links-module-PlatformsModule-1d3f1054c20d3105005e254e05fa2590"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlatformsModule-1d3f1054c20d3105005e254e05fa2590"' :
                                            'id="xs-components-links-module-PlatformsModule-1d3f1054c20d3105005e254e05fa2590"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlatformsRoutingModule.html" data-type="entity-link">PlatformsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioModule.html" data-type="entity-link">PortfolioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortfolioModule-4015989d5fdeb33a5658fc5ff6846092"' : 'data-target="#xs-components-links-module-PortfolioModule-4015989d5fdeb33a5658fc5ff6846092"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortfolioModule-4015989d5fdeb33a5658fc5ff6846092"' :
                                            'id="xs-components-links-module-PortfolioModule-4015989d5fdeb33a5658fc5ff6846092"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortfolioRoutingModule.html" data-type="entity-link">PortfolioRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrivateModule.html" data-type="entity-link">PrivateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PrivateModule-fc9c043f9bdf7df68aaf0f88d8eb2775"' : 'data-target="#xs-components-links-module-PrivateModule-fc9c043f9bdf7df68aaf0f88d8eb2775"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrivateModule-fc9c043f9bdf7df68aaf0f88d8eb2775"' :
                                            'id="xs-components-links-module-PrivateModule-fc9c043f9bdf7df68aaf0f88d8eb2775"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrivateRoutingModule.html" data-type="entity-link">PrivateRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-dc2c246e64dfd45de08748febb4de1ab"' : 'data-target="#xs-components-links-module-ProfileModule-dc2c246e64dfd45de08748febb4de1ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-dc2c246e64dfd45de08748febb4de1ab"' :
                                            'id="xs-components-links-module-ProfileModule-dc2c246e64dfd45de08748febb4de1ab"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileRoutingModule.html" data-type="entity-link">ProfileRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link">PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-54688d28a27156b1e98b05665b4d2f8b"' : 'data-target="#xs-components-links-module-PublicModule-54688d28a27156b1e98b05665b4d2f8b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-54688d28a27156b1e98b05665b4d2f8b"' :
                                            'id="xs-components-links-module-PublicModule-54688d28a27156b1e98b05665b4d2f8b"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link">PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link">RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-2e4406f1d35dd5001c064a5001c9d585"' : 'data-target="#xs-components-links-module-RegisterModule-2e4406f1d35dd5001c064a5001c9d585"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-2e4406f1d35dd5001c064a5001c9d585"' :
                                            'id="xs-components-links-module-RegisterModule-2e4406f1d35dd5001c064a5001c9d585"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link">RegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoriesModule.html" data-type="entity-link">RepositoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RepositoriesModule-e6e637398406d0ec2094447d8cdb4f9b"' : 'data-target="#xs-components-links-module-RepositoriesModule-e6e637398406d0ec2094447d8cdb4f9b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RepositoriesModule-e6e637398406d0ec2094447d8cdb4f9b"' :
                                            'id="xs-components-links-module-RepositoriesModule-e6e637398406d0ec2094447d8cdb4f9b"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoriesRoutingModule.html" data-type="entity-link">RepositoriesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoryModule.html" data-type="entity-link">RepositoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RepositoryModule-9f41c4f8a524d364bbaad54e5ebdb0f9"' : 'data-target="#xs-components-links-module-RepositoryModule-9f41c4f8a524d364bbaad54e5ebdb0f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RepositoryModule-9f41c4f8a524d364bbaad54e5ebdb0f9"' :
                                            'id="xs-components-links-module-RepositoryModule-9f41c4f8a524d364bbaad54e5ebdb0f9"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepositoryRoutingModule.html" data-type="entity-link">RepositoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResourcesModule.html" data-type="entity-link">ResourcesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResourcesModule-15f0d54cce36e966736a1a9fbe202da7"' : 'data-target="#xs-components-links-module-ResourcesModule-15f0d54cce36e966736a1a9fbe202da7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResourcesModule-15f0d54cce36e966736a1a9fbe202da7"' :
                                            'id="xs-components-links-module-ResourcesModule-15f0d54cce36e966736a1a9fbe202da7"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumeModule.html" data-type="entity-link">ResumeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResumeModule-61418be1419031f5006ae18468371351"' : 'data-target="#xs-components-links-module-ResumeModule-61418be1419031f5006ae18468371351"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResumeModule-61418be1419031f5006ae18468371351"' :
                                            'id="xs-components-links-module-ResumeModule-61418be1419031f5006ae18468371351"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumeRoutingModule.html" data-type="entity-link">ResumeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link">SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-a88068e60ea0ef6abc9aadc24f69984f"' : 'data-target="#xs-components-links-module-SearchModule-a88068e60ea0ef6abc9aadc24f69984f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-a88068e60ea0ef6abc9aadc24f69984f"' :
                                            'id="xs-components-links-module-SearchModule-a88068e60ea0ef6abc9aadc24f69984f"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchRoutingModule.html" data-type="entity-link">SearchRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-a24b19f1bbad0f625f1be644f4807202"' : 'data-target="#xs-components-links-module-SharedModule-a24b19f1bbad0f625f1be644f4807202"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a24b19f1bbad0f625f1be644f4807202"' :
                                            'id="xs-components-links-module-SharedModule-a24b19f1bbad0f625f1be644f4807202"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShowcaseModule.html" data-type="entity-link">ShowcaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShowcaseModule-97fca230bfc36f71026e7f7cd2a49039"' : 'data-target="#xs-components-links-module-ShowcaseModule-97fca230bfc36f71026e7f7cd2a49039"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShowcaseModule-97fca230bfc36f71026e7f7cd2a49039"' :
                                            'id="xs-components-links-module-ShowcaseModule-97fca230bfc36f71026e7f7cd2a49039"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShowcaseRoutingModule.html" data-type="entity-link">ShowcaseRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SidenavModule.html" data-type="entity-link">SidenavModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidenavModule-3fd830755e755b7469c3c27975cccee5"' : 'data-target="#xs-components-links-module-SidenavModule-3fd830755e755b7469c3c27975cccee5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidenavModule-3fd830755e755b7469c3c27975cccee5"' :
                                            'id="xs-components-links-module-SidenavModule-3fd830755e755b7469c3c27975cccee5"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidenavRoutingModule.html" data-type="entity-link">SidenavRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SocialModule.html" data-type="entity-link">SocialModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SocialModule-4fbd283d71010ecf7454211314e58db8"' : 'data-target="#xs-components-links-module-SocialModule-4fbd283d71010ecf7454211314e58db8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SocialModule-4fbd283d71010ecf7454211314e58db8"' :
                                            'id="xs-components-links-module-SocialModule-4fbd283d71010ecf7454211314e58db8"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SocialRoutingModule.html" data-type="entity-link">SocialRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SoftwareModule.html" data-type="entity-link">SoftwareModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SoftwareModule-f6acb0aee3d27f5dca1e3a75a075ef1d"' : 'data-target="#xs-components-links-module-SoftwareModule-f6acb0aee3d27f5dca1e3a75a075ef1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SoftwareModule-f6acb0aee3d27f5dca1e3a75a075ef1d"' :
                                            'id="xs-components-links-module-SoftwareModule-f6acb0aee3d27f5dca1e3a75a075ef1d"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SoftwareRoutingModule.html" data-type="entity-link">SoftwareRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TimelineModule.html" data-type="entity-link">TimelineModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TimelineModule-a0c992b5e98da41a5760d42c0e96410f"' : 'data-target="#xs-components-links-module-TimelineModule-a0c992b5e98da41a5760d42c0e96410f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TimelineModule-a0c992b5e98da41a5760d42c0e96410f"' :
                                            'id="xs-components-links-module-TimelineModule-a0c992b5e98da41a5760d42c0e96410f"' }>
                                            <li class="link">
                                                <a href="components/AccountComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TimelineRoutingModule.html" data-type="entity-link">TimelineRoutingModule</a>
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
                                <a href="components/CloudServicesComponent.html" data-type="entity-link">CloudServicesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CompaniesComponent.html" data-type="entity-link">CompaniesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EnvironmentsComponent.html" data-type="entity-link">EnvironmentsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FrameworksComponent.html" data-type="entity-link">FrameworksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IndustriesComponent.html" data-type="entity-link">IndustriesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InsightsComponent.html" data-type="entity-link">InsightsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LabelComponent.html" data-type="entity-link">LabelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguageChartComponent.html" data-type="entity-link">LanguageChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguageComponent.html" data-type="entity-link">LanguageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguageResultComponent.html" data-type="entity-link">LanguageResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LanguagesComponent.html" data-type="entity-link">LanguagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LibrariesComponent.html" data-type="entity-link">LibrariesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoadingComponent.html" data-type="entity-link">LoadingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link">LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavigationComponent.html" data-type="entity-link">NavigationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OverviewComponent.html" data-type="entity-link">OverviewComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlatformsComponent.html" data-type="entity-link">PlatformsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PortfolioComponent.html" data-type="entity-link">PortfolioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PrivateComponent.html" data-type="entity-link">PrivateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link">ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PublicComponent.html" data-type="entity-link">PublicComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link">RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoriesComponent.html" data-type="entity-link">RepositoriesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoryChartComponent.html" data-type="entity-link">RepositoryChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoryComponent.html" data-type="entity-link">RepositoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoryListComponent.html" data-type="entity-link">RepositoryListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RepositoryResultComponent.html" data-type="entity-link">RepositoryResultComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResourcesComponent.html" data-type="entity-link">ResourcesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResumeComponent.html" data-type="entity-link">ResumeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link">SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ShowcaseComponent.html" data-type="entity-link">ShowcaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidenavComponent.html" data-type="entity-link">SidenavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SocialComponent.html" data-type="entity-link">SocialComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SoftwareComponent.html" data-type="entity-link">SoftwareComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimelineComponent.html" data-type="entity-link">TimelineComponent</a>
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
                                <a href="classes/AdobeProfile.html" data-type="entity-link">AdobeProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseModel.html" data-type="entity-link">BaseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/CodeLanguage.html" data-type="entity-link">CodeLanguage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Compress.html" data-type="entity-link">Compress</a>
                            </li>
                            <li class="link">
                                <a href="classes/Crypto.html" data-type="entity-link">Crypto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Encode.html" data-type="entity-link">Encode</a>
                            </li>
                            <li class="link">
                                <a href="classes/GitCommit.html" data-type="entity-link">GitCommit</a>
                            </li>
                            <li class="link">
                                <a href="classes/GithubProfile.html" data-type="entity-link">GithubProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/GoogleProfile.html" data-type="entity-link">GoogleProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/KeyValue.html" data-type="entity-link">KeyValue</a>
                            </li>
                            <li class="link">
                                <a href="classes/Knowledge.html" data-type="entity-link">Knowledge</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinkedinProfile.html" data-type="entity-link">LinkedinProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/MicrosoftProfile.html" data-type="entity-link">MicrosoftProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProviderOptions.html" data-type="entity-link">ProviderOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/Repository.html" data-type="entity-link">Repository</a>
                            </li>
                            <li class="link">
                                <a href="classes/RouterOptions.html" data-type="entity-link">RouterOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/SharedOptions.html" data-type="entity-link">SharedOptions</a>
                            </li>
                            <li class="link">
                                <a href="classes/TwitterProfile.html" data-type="entity-link">TwitterProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserAccount.html" data-type="entity-link">UserAccount</a>
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
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CloudService.html" data-type="entity-link">CloudService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompanyService.html" data-type="entity-link">CompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnvironmentService.html" data-type="entity-link">EnvironmentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FrameworkService.html" data-type="entity-link">FrameworkService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GithubService.html" data-type="entity-link">GithubService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IndustryService.html" data-type="entity-link">IndustryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link">LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LibraryService.html" data-type="entity-link">LibraryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link">LoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlatformService.html" data-type="entity-link">PlatformService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link">ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepositoryService.html" data-type="entity-link">RepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepositoryService-1.html" data-type="entity-link">RepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouterService.html" data-type="entity-link">RouterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidenavService.html" data-type="entity-link">SidenavService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SoftwareService.html" data-type="entity-link">SoftwareService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link">StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToasterService.html" data-type="entity-link">ToasterService</a>
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
                                <a href="interceptors/GithubInterceptor.html" data-type="entity-link">GithubInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HeaderInterceptor.html" data-type="entity-link">HeaderInterceptor</a>
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
                            <li class="link">
                                <a href="guards/ProfileResolver.html" data-type="entity-link">ProfileResolver</a>
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
                                <a href="interfaces/GithubResult.html" data-type="entity-link">GithubResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GithubSearch.html" data-type="entity-link">GithubSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GitResult.html" data-type="entity-link">GitResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GitSearch.html" data-type="entity-link">GitSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAddress.html" data-type="entity-link">IAddress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAdobeProfile.html" data-type="entity-link">IAdobeProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBaseModel.html" data-type="entity-link">IBaseModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICloudService.html" data-type="entity-link">ICloudService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICodeLanguage.html" data-type="entity-link">ICodeLanguage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICompany.html" data-type="entity-link">ICompany</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IContact.html" data-type="entity-link">IContact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEducation.html" data-type="entity-link">IEducation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEnvironment.html" data-type="entity-link">IEnvironment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IExperience.html" data-type="entity-link">IExperience</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFramework.html" data-type="entity-link">IFramework</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGitAuthor.html" data-type="entity-link">IGitAuthor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGitComitter.html" data-type="entity-link">IGitComitter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGitCommit.html" data-type="entity-link">IGitCommit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGitContent.html" data-type="entity-link">IGitContent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGithubProfile.html" data-type="entity-link">IGithubProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGoogleProfile.html" data-type="entity-link">IGoogleProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIndustry.html" data-type="entity-link">IIndustry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKeyValue.html" data-type="entity-link">IKeyValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IKnowledge.html" data-type="entity-link">IKnowledge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageCollection.html" data-type="entity-link">ILanguageCollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageInfo.html" data-type="entity-link">ILanguageInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILibrary.html" data-type="entity-link">ILibrary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILinkedinProfile.html" data-type="entity-link">ILinkedinProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMicrosoftProfile.html" data-type="entity-link">IMicrosoftProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INativeLanguageCollection.html" data-type="entity-link">INativeLanguageCollection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPlatform.html" data-type="entity-link">IPlatform</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProject.html" data-type="entity-link">IProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReferences.html" data-type="entity-link">IReferences</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRepository.html" data-type="entity-link">IRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRouterOptions.html" data-type="entity-link">IRouterOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISoftware.html" data-type="entity-link">ISoftware</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITechnology.html" data-type="entity-link">ITechnology</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITimeline.html" data-type="entity-link">ITimeline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITwitterProfile.html" data-type="entity-link">ITwitterProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserAccount.html" data-type="entity-link">IUserAccount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserProfile.html" data-type="entity-link">IUserProfile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVerification.html" data-type="entity-link">IVerification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IVersion.html" data-type="entity-link">IVersion</a>
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
                                <a href="interfaces/RepoResult.html" data-type="entity-link">RepoResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RepoSearch.html" data-type="entity-link">RepoSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SVGResult.html" data-type="entity-link">SVGResult</a>
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