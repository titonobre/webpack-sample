import './content.component.scss';
import templateUrl from './content.component.html';

export const ContentComponent = {
    templateUrl,
    controller: class {
        constructor(resourcesService, mathService) {
            this.resourcesService = resourcesService;
            this.mathService = mathService;
            this.text = resourcesService.getContent();
            this.value = 0;
        }

        incrementValue() {
            this.value = this.mathService.add(this.value, 1);
        }
    }
};

ContentComponent.controller.$inject = ['ResourcesService', 'MathService'];
