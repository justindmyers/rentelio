import { shallowMount, createLocalVue } from '@vue/test-utils';
import Register from '@/pages/Register';
import VeeValidate from 'vee-validate';
import axe from 'axe-core';

const localVue = createLocalVue();

localVue.use(VeeValidate);

describe('Register.vue', () => {
    let component;

    it('should render the component wrapper', () => {
        const wrapper = shallowMount(Register, {
            localVue,
            sync: false
        });

        component = wrapper.find(Register);

        expect(component.is(Register)).toBe(true);
    });

    it('should call dispatch and router.push in register', () => {
        const wrapper = shallowMount(Register, {
            localVue,
            sync: false,
            mocks: {
                $router: {
                    push: jest.fn()
                },
                $store: {
                    dispatch: jest.fn()
                },
                processForm: jest.fn()
            }
        });
        
        // Set the form data
        wrapper.setData({
            username: 'test@test.com',
            password: 'test',
            confirmPassword: 'test'
        });

        // const form = wrapper.find('form');
        // const processForm = jest.spyOn(wrapper.vm, 'processForm');
        // const register = jest.spyOn(wrapper.vm, 'register');
        const routerPush = jest.spyOn(wrapper.vm.$router, 'push');
        const dispatch = jest.spyOn(wrapper.vm.$store, 'dispatch');

        // Manually call the register function
        wrapper.vm.register().then(() => {
            expect(dispatch).toHaveBeenCalled();
            expect(routerPush).toHaveBeenCalledWith({ name: 'confirm-account' });
        });
        //wrapper.vm.validator.validateAll.mockResolvedValue(true);
    });

    describe('Accessibility', () => {
        it('should have no accessibility errors', (done) => {

            // Attaching to document to get the DOM node
            shallowMount(Register, {
                localVue,
                sync: false,
                attachToDocument: true
            });

            axe.run(document.querySelector('.p-register'), (err, { violations }) => {
                expect(err).toBe(null);
                expect(violations).toHaveLength(0);

                done();
            });
        });
    });
});