<template>
    <b-dropdown variant="outline-secondary" right>
        <template slot="button-content">
            <i class="far fa-eye"></i>Landlord
        </template>

        <b-dropdown-item>Tenant</b-dropdown-item>
        <b-dropdown-item>Landlord</b-dropdown-item>
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
        }
    }
</script>
