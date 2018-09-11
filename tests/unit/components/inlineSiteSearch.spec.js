import { shallowMount, createLocalVue } from '@vue/test-utils';

import Vuex from 'vuex';
import InlineSiteSearch from '@/components/InlineSiteSearch/InlineSiteSearch';

const localVue = createLocalVue();

localVue.directive('b-modal', {});

localVue.use(Vuex);

describe('InlineSiteSearch.vue', () => {
    it('should render the component wrapper', () => {
        const wrapper = shallowMount(InlineSiteSearch, {
            localVue,
            propsData: {
                formAction: '/submit'
            }
        });

        const component = wrapper.find(InlineSiteSearch);

        expect(component.is(InlineSiteSearch)).toBe(true);
    });
});