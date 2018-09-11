import { shallowMount } from '@vue/test-utils';
import Testimonial from '@/components/Testimonial/Testimonial';

describe('Testimonial.vue', () => {
    let component;
    const wrapper = shallowMount(Testimonial);

    beforeEach(() => {
        component = wrapper.find(Testimonial);
    });

    it('should render the component wrapper', () => {
        expect(component.is(Testimonial)).toBe(true);
    });
});