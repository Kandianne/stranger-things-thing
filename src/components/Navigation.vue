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
    padding: auto 30px;
    ul {    
        display: flex;
        justify-content: flex-end;
        li {
            padding: 0px 15px;
            text-transform: uppercase;
            font-size: .75em;
            a {
                &:hover {
                    color: white;
                }
            }
        }
    }
}
</style>