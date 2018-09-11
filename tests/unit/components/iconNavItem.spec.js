import { shallowMount } from '@vue/test-utils';
import IconNavItem from '@/components/IconNav/IconNavItem';

describe('IconNavItem.vue', () => {
    let component;
    const wrapper = shallowMount(IconNavItem);

    beforeEach(() => {
        component = wrapper.find(IconNavItem);
    });

    it('should render the component wrapper', () => {
        expect(component.is(IconNavItem)).toBe(true);
    });
});