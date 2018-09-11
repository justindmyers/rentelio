import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils';

import Vuex from 'vuex';
import NavBar from '@/components/NavBar/NavBar';

const localVue = createLocalVue();

localVue.directive('b-modal', {});

localVue.use(Vuex);

describe('NavBar.vue', () => {
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
        const wrapper = shallowMount(NavBar, { 
            store, 
            localVue,
            stubs: {
                RouterLink: RouterLinkStub,
                'b-collapse': true,
                'b-btn-close': true
            }
        });
        const component = wrapper.find(NavBar);

        expect(component.is(NavBar)).toBe(true);
    });
});