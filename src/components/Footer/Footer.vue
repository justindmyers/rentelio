<template>
    <footer class="footer">
        <div class="footer__content">
            <div class="container container-fluid">
                <a class="footer__logo" href="/">
                    <img src="@/assets/logo-footer.svg" alt="XCentium Logo">
                </a>

                <ul class="footer__nav">
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">Rates</a>
                    </li>

                    <li>
                        <a href="#">About</a>
                    </li>

                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <p class="footer__copyright">&copy;2018 Rentelio. All rights reserved.</p>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .footer {
        padding: 0;

        &__content {
            padding: rem-calc(30) 0 0;
            margin: 0 -15px;
            background: #535D68;
            text-align: center;
            color: $white;
        }

        &__nav {
            display: flex;
            justify-content: center;
            list-style: none;
            padding: rem-calc(30) 0;
            margin: 0;
            
            a {
                font-size: rem-calc(14);
                padding: 0 rem-calc(20);
                display: block;
                color: $white;
                text-decoration: none;
            }
        }

        &__copyright {
            padding: rem-calc(10) rem-calc(15);
            margin: 0;
            font-size: rem-calc(14);
            text-align: center;
        }

        &__logo {
            img{
                max-width: 135px;
            }
        }
    }
</style>
