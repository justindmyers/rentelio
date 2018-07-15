<template>
    <div class=" l-featured">
        <div class="container-fluid">
            <div class="row">
                <div class="col pb-5">
                    <h2 class="h-line-mark large-mark">Latest From Our Team</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-md l-featured-col">
                    <div class="c-featured-image">
                        <img src="assets/featured-people-image.jpg" alt="Featured People" />
                    </div>

                    <p class="h4">Using Razor Layouts With Insite Emails</p>
                    <p class="mb-0">By <a href="#0">Aaron Bickle</a></p>
                    <p><a class="secondary-color-text" href="#0">Read Article</a></p>
                </div>

                <div class="col-md l-featured-col">
                    <div class="c-featured-image">
                        <img src="assets/featured-people-image.jpg" alt="Featured People" />
                    </div>

                    <p class="h4">Using Razor Layouts With Insite Emails</p>
                    <p class="mb-0">By <a href="#0">Aaron Bickle</a></p>
                    <p><a class="secondary-color-text" href="#0">Read Article</a></p>
                </div>

                <div class="col-md l-featured-col">
                    <div class="c-featured-image">
                        <img src="assets/featured-people-image.jpg" alt="Featured People" />
                    </div>

                    <p class="h4">Using Razor Layouts With Insite Emails</p>
                    <p class="mb-0">By <a href="#0">Aaron Bickle</a></p>
                    <p><a class="secondary-color-text" href="#0">Read Article</a></p>
                </div>

                <div class="col-md l-featured-col">
                    <div class="c-featured-image">
                        <img src="assets/featured-people-image.jpg" alt="Featured People" />
                    </div>

                    <p class="h4">Using Razor Layouts With Insite Emails</p>
                    <p class="mb-0">By <a href="#0">Aaron Bickle</a></p>
                    <p><a class="secondary-color-text" href="#0">Read Article</a></p>
                </div>
            </div>

            <div class="row">
                <div class="col-md pt-4">
                    <a href="#" class="c-hero__cta c-cta btn btn-primary">View More Blog Posts</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeaturedPeople'
    }
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .l-featured{
        padding: 4rem 1rem 4rem 3rem;
    }

    .c-featured-image{
        img{
            border-radius: 50%;
            width: 160px;
            height: 160px;
            margin-bottom: 3rem;

        }
    }

    .l-featured-col{
        max-width: 350px;
        margin: 0 auto;
    }

    @include media-breakpoint-down(md) {
        .l-featured{
            padding: 2rem 15px 2rem 15px;
        }

        .l-featured-col{
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
</style>
