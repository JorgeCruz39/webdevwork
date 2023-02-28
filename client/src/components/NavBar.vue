<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>



<template>
    <nav class="navbar is-primary">
        <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item " href="index.html">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="112" height="28" /> 
            </a>
            <a class="navbar-burger" data-target="navbarExampleTransparentExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            </div>
            
            <div class="navbar-menu">
            <div class="navbar-start">
                <RouterLink class="navbar-item" to="/">Home</RouterLink>
                <RouterLink class="navbar-item" to="/about">About</RouterLink>
                <div class="navbar-item has-dropdown is-hoverable">
                    <div class="navbar-link">
                        Docs
                    </div>
                    <div class="navbar-dropdown">
                        <div class="navbar-item">1</div>
                        <div class="navbar-item">1</div>
                        <div class="navbar-item">1</div>
                        <div class="navbar-item">1</div>
                        <div class="navbar-item">1</div>
                        <hr class="navbar-divider">
                        <div class="navbar-item">1</div>
                        <div class="navbar-item has-background-primary has-text-white">1</div>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <div class="buttons">
                            <button class="bd-tw-button button">
                                <span class="icon">
                                    <i class="fab fa-twitter"></i>
                                </span>
                                <span>
                                    Tweet
                                </span>
                            </button>
                            <button class="button is-primary">
                                <span class="icon">
                                    <i class="fas fa-download"></i>
                                </span>
                                <span>
                                    Download
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </nav>
</template>



<style scoped>

</style>