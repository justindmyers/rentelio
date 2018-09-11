import { shallowMount } from '@vue/test-utils';
import FiftyFiftyImage from '@/components/FiftyFiftyImage/FiftyFiftyImage';

describe('FiftyFiftyImage.vue', () => {
    let component;
    const wrapper = shallowMount(FiftyFiftyImage);

    beforeEach(() => {
        component = wrapper.find(FiftyFiftyImage);
    });

    it('should render the component wrapper', () => {
        expect(component.is(FiftyFiftyImage)).toBe(true);
    });
});