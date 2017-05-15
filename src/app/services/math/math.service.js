export class MathService {
    add(...values) {
        return values.reduce((total, value) => total + value, 0);
    }
}
