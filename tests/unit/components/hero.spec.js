import { shallowMount } from '@vue/test-utils';
import Hero from '@/components/Hero/Hero';

describe('Hero.vue', () => {
    let component;
    const wrapper = shallowMount(Hero);

    beforeEach(() => {
        component = wrapper.find(Hero);
    });

    it('should render the component wrapper', () => {
        expect(component.is(Hero)).toBe(true);
    });
});