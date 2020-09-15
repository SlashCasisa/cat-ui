<template>
<div>
    <Topnav />
    <div class="banner">
        <h1>Cat-UI</h1>
        <h2>一个基于vue3.0的UI库</h2>
        <p class="actions">
            <a class="actions-item" href="https://github.com/SlashCasisa/gulu-ui">Github</a>
            <router-link class="actions-item" to="/doc">开始</router-link>
        </p>
    </div>
    <div class="features">
        <ul class="features-list">
            <li class="features-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-Vue"></use>
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li class="features-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-typescript"></use>
                </svg>
                <h3>基于 TypeScript </h3>
                <p>源代码采用 TypeScript 语法</p>
            </li>
            <li class="features-item">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>推荐使用</h3>
                <p>每个组件的样式好看、代码易读、上手容易</p>
            </li>
        </ul>
    </div>

</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss">
.banner {
    background: linear-gradient(90deg, rgba(197, 196, 238, 1) 0%, rgba(140, 102, 215, 0.7) 35%, rgba(122, 83, 202, 0.7) 100%);
    padding-top: 50px;
    text-align: center;
    color: rgb(92, 44, 187);
    clip-path: ellipse(80% 60% at 50% 40%);
    padding: 10vh 0px;

    .actions {
        display: flex;
        justify-content: center;
        padding: 10px 0px;

        >a {
            background: rgb(122, 83, 202);
            color: #fff;
            padding: 5px 10px;
            margin-right: 20px;
            border-radius: 5px;
            width: 110px;

            &:hover {
                background: rgb(122, 83, 202);
            }
        }
    }
}

.features {
    margin: 64px auto;
    width: 400px;

    @media (min-width: 800px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    .features-list {
        display: flex;
        flex-wrap: wrap;
    }

    .features-item {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
        align-content: space-between;
        grid-template-areas: "icon title""icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;

        >svg {
            grid-area: icon;
            width: 64px;
            height: 64px;
        }

        >h3 {
            grid-area: title;
            font-size: 28px;
        }

        >p {
            grid-area: text;
        }
    }

}
</style>
