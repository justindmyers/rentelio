<template>
    <div class="p-home">
        <Hero>
            <template slot="image">
                <img src="assets/placeholder.gif" v-lazy-img="'/images/Rectangle.png'" alt="Hero image" />

                <span class="h-mask is-medium"></span>
            </template>

            <h1 class="c-hero__heading h1">Renting Made Easy.</h1>
        </Hero>

        <FiftyFiftyIcon background="linear-gradient(212.32deg, rgba(100,185,175,1) 0%, rgba(153,210,203,1) 100%)">
            <template slot="image">
                <img src="assets/placeholder.gif" v-lazy-img="'/images/Phone-Tenant.png'" alt="" />
            </template>

            <h3>Tenants</h3>
            <p>The simplest way to manage your rent payments and maintenance requests.</p>
        </FiftyFiftyIcon>

        <FiftyFiftyIcon opposite background="#fff" font-color="#333" end>
            <template slot="image">
                <img src="assets/placeholder.gif" v-lazy-img="'/images/Phone-Landlord.png'" alt="" />
            </template>

            <h3>Landlords</h3>
            <p>The easiest way to manage all your properties and stay in contact</p>
            <a href="#">See Pricing</a>
        </FiftyFiftyIcon>

        <Testimonial>
            <template slot="image">
                <img src="//i.pravatar.cc/300" />
            </template>

            <blockquote>
                <p>“Communication was a breeze when I needed to get my sink checked out”</p>
            </blockquote>

            <div class="c-testimonial__name">- Janet</div>
        </Testimonial>

        <Testimonial opposite>
            <template slot="image">
                <img src="//i.pravatar.cc/300?1" />
            </template>

            <blockquote>
                <p>“Communication was a breeze when I needed to get my sink checked out”</p>
            </blockquote>

            <div class="c-testimonial__name">- Janet</div>
        </Testimonial>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar/NavBar.vue';
    import Hero from '../components/Hero/Hero.vue';
    import FiftyFiftyIcon from '../components/FiftyFiftyIcon/FiftyFiftyIcon.vue';
    import FiftyFiftyImage from '../components/FiftyFiftyImage/FiftyFiftyImage.vue';
    import Footer from '../components/Footer/Footer.vue';
    import Testimonial from '../components/Testimonial/Testimonial.vue';
    import TextPromo from '../components/TextPromo/TextPromo.vue';
    import VideoPromo from '../components/VideoPromo/VideoPromo.vue';
    import Tiles from '../components/Tiles/Tiles.vue';

    export default {
        name: 'app',
        components: {
            NavBar,
            Hero,
            FiftyFiftyIcon,
            FiftyFiftyImage,
            Footer,
            Testimonial,
            TextPromo,
            VideoPromo,
            Tiles
        }
    };
</script>