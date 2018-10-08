import userApi from '@/api/users';

export default {
    actions: {
        async fetch({ dispatch }) {
            try {
                const response = await userApi.getUsers();
    
                dispatch('create', { data: response });

            } catch(ex) {
                // eslint-disable-next-line
                console.log(ex);
            }
        }
    }
}