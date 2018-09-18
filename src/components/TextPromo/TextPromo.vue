<template>
    <div class="c-hero c-text-promo">
        <div class="c-hero__container">
            <div class="c-hero__media h-placeholder-image h-placeholder-image--bg">
                <lazy-img placeholder="assets/placeholder.gif" src="assets/text-promo-back.svg" alt="Hero image"></lazy-img>
            </div>

            <div class="c-hero__content-container">
                <div class="container container-fluid">
                    <div class="row">
                        <div class="col-md-12 c-hero-center">
                            <div class="c-hero__content">
                                <h2 class="h-line-mark large-mark c-hero__heading">Super Long Headline Text for Full Width Promo</h2>
                                <p class="c-hero__subheading">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                                <a href="#" class="c-hero__cta c-cta btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import lazyImg from '@/components/lazyImg';

    export default {
        name: 'TextPromo',
        components: {
            lazyImg
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-text-promo{
        .c-hero{
            &__content{
                max-width: 100%;
                padding: 6rem 0;
            }

            &__content-container{
                padding-bottom: 0rem;
            }
        }
    }
</style>
