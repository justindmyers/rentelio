<template>
    <div class="p-about">
        <Hero>
            <template slot="image">
                <lazy-img placeholder="assets/placeholder.gif" src="//placeimg.com/1200/600"></lazy-img>

                <span class="h-mask is-dark"></span>
            </template>

            <h1 class="c-hero__heading h1">About</h1>
            <p class="c-hero__subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet diam ut est gravida, sed elementum turpis vehicula. </p>

            <a href="#" class="c-hero__cta c-cta btn btn-primary">Learn More</a>
        </Hero>

        <TextPromo></TextPromo>

        <FiftyFiftyImage>
            <template slot="image">
                <lazy-img placeholder="assets/placeholder.gif" src="//placeimg.com/1200/600"></lazy-img>
            </template>

            <h3 class="h-line-mark">Global Biotech Launches New Informative Website</h3>
            <p>A global BioTech firm partnered with XCentium to develop a patient information website to support a new medicine, which was first in it’s class. </p>
            <a href="#" class="c-cta btn btn-primary">Read More</a>
        </FiftyFiftyImage>

        <VideoPromo></VideoPromo>
    </div>
</template>

<script>
    import lazyImg from '@/components/lazyImg';
    import Hero from '../components/Hero/Hero.vue';
    import FiftyFiftyImage from '../components/FiftyFiftyImage/FiftyFiftyImage.vue';
    import Testimonial from '../components/Testimonial/Testimonial.vue';
    import TextPromo from '../components/TextPromo/TextPromo.vue';
    import VideoPromo from '../components/VideoPromo/VideoPromo.vue';
    import Tiles from '../components/Tiles/Tiles.vue';

    export default {
        name: 'about',
        components: {
            lazyImg,
            Hero,
            FiftyFiftyImage,
            Testimonial,
            TextPromo,
            VideoPromo,
            Tiles
        }
    };
</script>