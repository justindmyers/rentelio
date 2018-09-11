import { shallowMount } from '@vue/test-utils';
import IconNav from '@/components/IconNav/IconNav';

describe('IconNav.vue', () => {
    let component;
    const wrapper = shallowMount(IconNav);

    beforeEach(() => {
        component = wrapper.find(IconNav);
    });

    it('should render the component wrapper', () => {
        expect(component.is(IconNav)).toBe(true);
    });
});