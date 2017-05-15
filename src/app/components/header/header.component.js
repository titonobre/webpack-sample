import './header.component.css';
import templateUrl from './header.component.html';

export const HeaderComponent = {
    templateUrl,
    controller: class {
        constructor(resourcesService) {
            this.phrase = resourcesService.getHeader();
        }
    }
};

HeaderComponent.controller.$inject = ['ResourcesService'];
