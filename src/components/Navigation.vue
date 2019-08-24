<template>
    <div class="nav">
        <ul>
            <li>
                <router-link to="/">Inspiration</router-link>
            </li>|
            <li>
                <router-link to="/gallery">Gallery</router-link>
            </li>|
            <li>
                <router-link to="/episodes">Episodes</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.nav {
    ul {
        display: flex;
        justify-content: flex-end;
    }
}
</style>