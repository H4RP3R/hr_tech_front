<template>
<div class="nav-wrapper box-shadow">
    <nav>
        <router-link to="/">Main</router-link>
        <span v-if="userData.is_hr_staff">
            <router-link to="/admin">Admin</router-link>
        </span>
        <span v-if="userData.is_hr_staff">
            <router-link to="/poll-stats">Poll Stats</router-link>
            <router-link to="/question-stats">Question Stats</router-link>
            <router-link to="/user-stats">User Stats</router-link>
        </span>
        <span v-else>
            <router-link to="/my-stats">My Statistics</router-link>
        </span>
        <span v-if="token">
            <a href="" v-on:click="logout">Logout</a>
        </span>
        <span v-else>
            <router-link to="/login">Login</router-link>
        </span>
    </nav>
</div>
</template>

<script>
export default {
    name: 'nav-bar',

    methods: {
        logout: function() {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        }
    },

    props: ['token', 'userData']
}
</script>

<style scoped>
.nav-wrapper {
    width: 100%;
    text-transform: uppercase;
    font-family: 'Comfortaa', cursive;
    font-size: 18px;
    padding: 18px 0;
    margin-bottom: 6px;
    position: fixed;
    top: 0;
    background: rgba(255, 255, 255, 0.92);
    z-index: 5;
}

nav {
    min-width: 960px;
    max-width: 1140px;
    margin: auto;
    /* text-align: left; */
}

a {
    color: rgba(85, 76, 185, 0.9);
    text-decoration: none;
    margin: 0 12px;
}

a:hover {
    color: rgba(0, 0, 0, 0.9);
}
</style>
