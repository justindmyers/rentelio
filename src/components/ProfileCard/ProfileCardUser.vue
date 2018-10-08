<template>
    <ProfileCard>
        <template slot="image">
            <img src="//placehold.it/100/100" />
        </template>

        <h3 class="mb-1">{{ user.firstName }} {{ user.lastName }}</h3>
        <p>Landlord</p>

        <p class="mb-1">Mobile: <a :href="`tel:${user.phone}`">{{ user.phone }}</a></p>
        <p class="mb-0">Email: <a :href="`mailto:${user.email}`">{{ user.email }}</a></p>
    </ProfileCard>
</template>

<script>
    import ProfileCard from './ProfileCard';

    export default {
        components: {
            ProfileCard
        },
        props: {
            user: {
                required: true
            }
        }
    }
</script>
