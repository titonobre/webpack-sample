import './other.component.less';

import templateUrl from './other.component.html';

interface IOtherComponentBindings {
    text: string;
    value: number;
    onClick: () => any;
}

interface IOtherComponentController extends IOtherComponentBindings {
    handleClick(): void;
}

export class OtherComponentController implements IOtherComponentController {

    public text: string;
    public value: number;
    public onClick: () => any;

    constructor() {
        this.text = '';
        this.value = 0;
    }

    handleClick(): void {
        this.onClick();
    }
}

export class OtherComponent {

    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            text: '@',
            value: '<',
            onClick: '&'
        };
        this.controller = OtherComponentController;
        this.templateUrl = templateUrl;
    }
}
