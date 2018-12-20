<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">



                <div class="card mb-3 mt-3" v-for="item in list">
                    <div class="card-header" v-bind:href="item.slug" v-text="item.title"></div>

                    <div class="card-body">
                        <p class="card-text" v-text="item.body"></p>
                    </div>
                </div>

                <infinite-loading @infinite="infiniteHandler"></infinite-loading>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                page: 0
            };
        },
        methods: {
            infiniteHandler($state){
                //conectar al servidor
            }
        }
    }
</script>
