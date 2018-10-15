<template>
    <ProfileCard>
        <template slot="image">
            <img :src="user.profile.image" />
        </template>

        <h3 class="mb-1">{{ user.profile.firstName }} {{ user.profile.lastName }}</h3>
        <p>Landlord</p>

        <p class="mb-1">Mobile: <a :href="`tel:${user.profile.phone}`">{{ user.profile.phone }}</a></p>
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
