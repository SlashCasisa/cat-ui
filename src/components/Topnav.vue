<template>
<div class="topnav">
    <div class="logo">LOgo</div>
    <div class="menu">
        <div class="menu-item">menu1</div>
        <div class="menu-item">menu2</div>
    </div>
</div>
</template>

<style lang="scss">
.topnav {
    border-bottom: 1px solid #ccc;
    background: pink;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .menu {
        display: flex;

        .menu-item {
            padding-left: 10px;
        }
    }
}
</style>
