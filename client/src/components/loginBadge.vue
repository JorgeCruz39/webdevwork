<script setup lang="ts">
import { ref } from 'vue';
import { useSession,login } from '@/model/session';

const session = useSession();





</script>


<template>
        <div class="navbar-item" v-if="session.user">
            Welcome {{ session.user.name }}
            (<a @click="$event => session.user = null">Logout</a>)
        </div>
        <div class="navbar-item" v-else>
            <div class="button is-primary" @click="login" >
                <span class="icon">
                    <i class="fas fa-user"></i>
                </span>
                <span>Log in</span>
            </div>
            <div class="button is-primary">
                <span class="icon">
                    <i class="fas fa-user-plus"></i>
                </span>
                <span>Sign up</span>
            </div>
        </div>
</template>



<style scoped>

</style>