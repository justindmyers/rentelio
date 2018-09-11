import { shallowMount } from '@vue/test-utils';
import ProfileCard from '@/components/ProfileCard/ProfileCard';

describe('ProfileCard.vue', () => {
    let component;
    const wrapper = shallowMount(ProfileCard);

    beforeEach(() => {
        component = wrapper.find(ProfileCard);
    });

    it('should render the component wrapper', () => {
        expect(component.is(ProfileCard)).toBe(true);
    });
});