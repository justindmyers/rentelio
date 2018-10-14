<template>
    <div class="p-messages l-dashboard">
        <div class="container">
            <div class="l-dashboard__section">
                <h1 class="h3 mb-3">Select Property</h1>

                <ul class="l-grid">
                    <li class="l-grid__col">
                        <div class="">property 1</div>
                    </li>
                    <li class="l-grid__col">property 2</li>
                    <li class="l-grid__col">property 3</li>
                    <li class="l-grid__col">property 4</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .l-grid {
        list-style-type: none;
        margin: 0 -15px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;

        &__col {
            flex: 0 0 calc(50% - 20px);
            background: #efefef;
            margin: 10px;
        }
    }
</style>

