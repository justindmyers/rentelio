import { shallowMount } from '@vue/test-utils';
import Listing from '@/components/Listing/Listing';

describe('Listing.vue', () => {
    let component;
    const wrapper = shallowMount(Listing, {
        propsData: {
            type: 'test',
            titleKey: 'title',
            dateKey: 'date',
            list: []
        }
    });

    beforeEach(() => {
        component = wrapper.find(Listing);
    });

    it('should render the component wrapper', () => {
        expect(component.is(Listing)).toBe(true);
    });
});