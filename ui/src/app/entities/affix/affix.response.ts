export class AffixResponse {
    constructor(
        public isSuccess?: string,
        public message?: string,
        public affixList?: Array<any>
    ) {}
}