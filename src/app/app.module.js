import * as angular from 'angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header';
import { ContentComponent } from './components/content';
import { OtherComponent } from './components/other';
import { MathService } from './services/math';
import { ResourcesService } from './services/resources';

export const AppModule = angular
    .module('app', [])
    .service('MathService', MathService)
    .service('ResourcesService', ResourcesService)
    .component('app', AppComponent)
    .component('header', HeaderComponent)
    .component('content', ContentComponent)
    .component('other', new OtherComponent())
    ;
