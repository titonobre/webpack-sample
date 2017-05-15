import * as loremIpsum from 'lorem-ipsum';

export class ResourcesService {
    constructor() {
    }

    public getHeader(): string {
        return loremIpsum({ count: 1, units: 'sentences', sentenceUpperBound: 7 });
    }

    public getContent(): string {
        return loremIpsum({ count: 2, units: 'paragraphs' });
    }

    public getContent2(): string {
        return loremIpsum({ count: 1, units: 'paragraphs' });
    }
}
