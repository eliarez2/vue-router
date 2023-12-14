<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
  },
  data() {
    return {
      
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u5', 'u4', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Elia Rezk', role: 'Engineer' },
        { id: 'u2', fullName: 'Abdallah Saeed', role: 'Engineer' },
        { id: 'u3', fullName: 'Hamza Ahmed', role: 'Engineer' },
        { id: 'u4', fullName: 'Hazem Abdelstar', role: 'Consultant' },
        { id: 'u5', fullName: 'Hazme Elrawi', role: 'Consultant' },
        { id: 'u1', fullName: 'Ahmed Saaed', role: 'Srum Master' },
      ],
    };
    

  },
 
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };

  },
 

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>