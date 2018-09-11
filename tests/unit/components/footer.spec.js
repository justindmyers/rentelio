import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer';

describe('Footer.vue', () => {
    let component;
    const wrapper = shallowMount(Footer);

    beforeEach(() => {
        component = wrapper.find(Footer);
    });

    it('should render the component wrapper', () => {
        expect(component.is(Footer)).toBe(true);
    });
});