import { shallowMount } from '@vue/test-utils';
import FiftyFiftyIcon from '@/components/FiftyFiftyIcon/FiftyFiftyIcon';

describe('FiftyFiftyIcon.vue', () => {
    let component;
    const wrapper = shallowMount(FiftyFiftyIcon);

    beforeEach(() => {
        component = wrapper.find(FiftyFiftyIcon);
    });

    it('should render the component wrapper', () => {
        expect(component.is(FiftyFiftyIcon)).toBe(true);
    });
});