<template>
    <div class="p-request-support container">
        <div class="l-dashboard__section">
            <h1 class="h3 mb-4">Request Maintenance</h1>

            <form>
                <div class="input-group mb-4">
                    <label for="title">Need Help With</label>
                    <input id="title" class="form-control" name="title" placeholder="Leaving sink" />
                </div>

                <div class="input-group mb-4">
                    <label for="date">Since when?</label>
                    <input id="date" class="form-control" name="date" placeholder="ex: last week, 2 days ago, etc." />
                </div>

                <div class="input-group mb-4">
                    <label for="message">Have more information?</label>
                    <textarea id="message" class="form-control" name="message" placeholder="up to 280 characters" />
                </div>

                <div class="input-group mb-4">
                    <label for="message" class="mb-3">Have a photo? (optional)</label>

                    <div class="c-image-upload">
                        <img src="//placeimg.com/80/80/any" />
                        <span>image812341.jpg</span>
                        <button>x</button>
                    </div>

                    <div class="c-image-upload">
                        <img src="//placeimg.com/80/80/any" />
                        <span>image812341.jpg</span>
                        <button>x</button>
                    </div>

                    <div class="c-image-upload">
                        Upload a photo
                    </div>
                </div>

                <div class="input-group">
                    <button class="btn btn-lg btn-primary btn-block">Send Request</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RequestSupport'
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-image-upload {
        display: flex;
        align-items: center;
        margin-bottom: rem-calc(10);

        img {
            margin-right: 15px;
            border-radius: 4px;
            border: 1px solid $gray-400;
        }

        span {
            flex: 1;
        }

        .btn {
            background: none;
            border: none;
            color: $black;
        }
    }
</style>
