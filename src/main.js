import './assets/styles.css';

import * as angular from 'angular';
import { AppModule } from './app/app.module';

angular.element(() => angular.bootstrap(document, [AppModule.name]));
