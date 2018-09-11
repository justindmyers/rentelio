import router from '@/routing';

/**
 * Vue-router Unit Tests
 * 
 * We need to mock the Vuex store in each test in order to make sure the router
 * has the correct user data for each test. jest.mock does not allow you to use
 * any variables outside of the current scope so we must use require() for Vue
 * Vuex in each test.
 * 
 */
describe('Router', () => {
    beforeEach(() => {
        jest.resetModules();
    });

    it('should be in history mode', () => {
        expect(router.mode).toEqual('history');
    });

    it('should call next when auth is required and user is logged in', () => {
        jest.mock('@/store/index', () => {
            const Vue = require('vue');
            const Vuex = require('vuex');
        
            Vue.use(Vuex);
        
            const getters = {
                currentUser: () => ({
                    isLandlord: true,
                    isTenant: false
                }),
                isLoggedIn: () => true,
                isPendingAuth: () => false
            };
        
            return new Vuex.Store({
                modules: {
                    user: {
                        namespaced: true,
                        getters 
                    }
                }
            });
        });

        const beforeEach = require('@/routing/router.js').beforeEach;

        const to = {
            matched: [{
                meta: {
                    requiresAuth: true
                }
            }]
        };

        const next = jest.fn();

        beforeEach(to, undefined, next);

        expect(next).toHaveBeenCalled();
    });

    it('should redirect to login if auth is required and user is guest', () => {
        jest.mock('@/store/index', () => {
            const Vue = require('vue');
            const Vuex = require('vuex');
        
            Vue.use(Vuex);
        
            const getters = {
                currentUser: () => ({
                    isLandlord: false,
                    isTenant: false
                }),
                isLoggedIn: () => false,
                isPendingAuth: () => false
            };
        
            return new Vuex.Store({
                modules: {
                    user: {
                        namespaced: true,
                        getters 
                    }
                }
            });
        });

        const beforeEach = require('@/routing/router.js').beforeEach;

        const to = {
            matched: [{
                meta: {
                    requiresAuth: true
                }
            }]
        };

        const next = jest.fn();

        beforeEach(to, undefined, next);

        expect(next).toHaveBeenCalledWith(expect.objectContaining({
            path: '/login'
        }));
    });

    it('should redirect to unauthorized if landlord type is required and user is not landlord', () => {
        jest.mock('@/store/index', () => {
            const Vue = require('vue');
            const Vuex = require('vuex');
        
            Vue.use(Vuex);
        
            const getters = {
                currentUser: () => ({
                    isLandlord: false,
                    isTenant: true
                }),
                isLoggedIn: () => true,
                isPendingAuth: () => false
            };
        
            return new Vuex.Store({
                modules: {
                    user: {
                        namespaced: true,
                        getters 
                    }
                }
            });
        });

        const beforeEach = require('@/routing/router.js').beforeEach;

        const to = {
            matched: [{
                meta: {
                    requiresAuth: true,
                    isLandlord: true
                }
            }]
        };

        const next = jest.fn();

        beforeEach(to, undefined, next);

        expect(next).toHaveBeenCalledWith(expect.objectContaining({
            name: 'unauthorized'
        }));
    });

    it('should redirect to unauthorized if tenant type is required and user is not tenant', () => {
        jest.mock('@/store/index', () => {
            const Vue = require('vue');
            const Vuex = require('vuex');
        
            Vue.use(Vuex);
        
            const getters = {
                currentUser: () => ({
                    isLandlord: true,
                    isTenant: false
                }),
                isLoggedIn: () => true,
                isPendingAuth: () => false
            };
        
            return new Vuex.Store({
                modules: {
                    user: {
                        namespaced: true,
                        getters 
                    }
                }
            });
        });

        const beforeEach = require('@/routing/router.js').beforeEach;

        const to = {
            matched: [{
                meta: {
                    requiresAuth: true,
                    isTenant: true
                }
            }]
        };

        const next = jest.fn();

        beforeEach(to, undefined, next);

        expect(next).toHaveBeenCalledWith(expect.objectContaining({
            name: 'unauthorized'
        }));
    });
})