<template>
    <div class="p-about">
        <Hero>
            <template slot="image">
                <img class="h-mask-img" src="assets/placeholder.gif" v-lazy-img="'//placeimg.com/1200/600'" alt="Hero image" />

                <span class="h-mask is-dark"></span>
            </template>

            <h1 class="c-hero__heading h1">About</h1>
            <p class="c-hero__subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet diam ut est gravida, sed elementum turpis vehicula. </p>

            <a href="#" class="c-hero__cta c-cta btn btn-primary">Learn More</a>
        </Hero>

        <TextPromo></TextPromo>

        <FiftyFiftyImage>
            <template slot="image">
                <img src="assets/placeholder.gif" v-lazy-img="'//placeimg.com/600/600'" alt="" />
            </template>

            <h3 class="h-line-mark">Global Biotech Launches New Informative Website</h3>
            <p>A global BioTech firm partnered with XCentium to develop a patient information website to support a new medicine, which was first in it’s class. </p>
            <a href="#" class="c-cta btn btn-primary">Read More</a>
        </FiftyFiftyImage>

        <VideoPromo></VideoPromo>
    </div>
</template>

<script>
    import Hero from '../components/Hero/Hero.vue';
    import FiftyFiftyImage from '../components/FiftyFiftyImage/FiftyFiftyImage.vue';
    import Testimonial from '../components/Testimonial/Testimonial.vue';
    import TextPromo from '../components/TextPromo/TextPromo.vue';
    import VideoPromo from '../components/VideoPromo/VideoPromo.vue';
    import Tiles from '../components/Tiles/Tiles.vue';

    export default {
        name: 'about',
        components: {
            Hero,
            FiftyFiftyImage,
            Testimonial,
            TextPromo,
            VideoPromo,
            Tiles
        }
    };
</script>