<template>
    <b-dropdown variant="outline-secondary" right v-if="user.isLandlord && user.isTenant">
        <template slot="button-content">
            <i class="far fa-eye"></i>{{ viewType }}
        </template>

        <b-dropdown-item @click="onClick('tenant')">Tenant</b-dropdown-item>
        <b-dropdown-item @click="onClick('landlord')">Landlord</b-dropdown-item>
    </b-dropdown>
</template>

<script>
    import bDropdown from 'bootstrap-vue/es/components/dropdown/dropdown';
    import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item';

    export default {
        name: 'NavbarUserToggle',
        components: {
            bDropdown,
            bDropdownItem
        },
        methods: {
            onClick(type) {
                this.$store.commit('user/setUserViewType', type);

                this.$router.push({ name: `${type}-dashboard` });
            }
        },
        computed: {
            user() {
                return this.$store.getters['user/currentUser'];
            },
            viewType() {
                return this.$store.getters['user/userViewType'];
            }
        }
    }
</script>
