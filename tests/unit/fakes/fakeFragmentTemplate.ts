import { FragmentTemplate } from "../../../lib/templates";


export default class FakeFragmentTemplate {
    private cacheKey: string;
    private fragment: string;

    constructor({ cacheKey, fragment }: {cacheKey: string; fragment: string}) {
        this.cacheKey = cacheKey;
        this.fragment = fragment;
    }

    create() {
        return new FragmentTemplate(this.cacheKey, this.fragment);
    }
}