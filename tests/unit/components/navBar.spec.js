import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';

import Vuex from 'vuex';
import Navbar from '@/components/Navbar/Navbar';

const localVue = createLocalVue();

localVue.directive('b-modal', {});

localVue.use(Vuex);

describe('Navbar.vue', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                user: {
                    namespaced: true,
                    getters: {
                        isLoggedIn: () => true
                    }
                }
            }
        })
    });

    it('should render the component wrapper', () => {
        const wrapper = shallowMount(Navbar, { 
            store, 
            localVue,
            stubs: {
                RouterLink: RouterLinkStub,
                'b-collapse': true,
                'b-btn-close': true
            }
        });
        const component = wrapper.find(Navbar);

        expect(component.is(Navbar)).toBe(true);
    });
});