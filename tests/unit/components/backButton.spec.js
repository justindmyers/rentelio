import { shallowMount } from '@vue/test-utils';
import BackButton from '@/components/BackButton/BackButton';

describe('BackButton.vue', () => {
    let component;
    const wrapper = shallowMount(BackButton, {
        mocks: { 
            $router: {
                go: jest.fn()
            } 
        }
    });

    beforeEach(() => {
        component = wrapper.find(BackButton);
    });

    it('should render the component wrapper', () => {
        expect(component.is(BackButton)).toBe(true);
    });

    it('should be of type="button"', () => {
        expect(component.attributes('type')).toBe('button');
    });

    it('should call $router.go when clicked', () => {
        const spy = jest.spyOn(wrapper.vm.$router, 'go');

        component.trigger('click');

        expect(spy).toHaveBeenCalledWith(-1);
    });
});