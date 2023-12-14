<template> 
 <section>
  
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
      <router-link to="/teams/t2">go to team two</router-link>
    </ul>
  </section>
</template>

<script>
// import { watch } from 'vue';
import UserItem from '../users/UserItem.vue';

export default {
  inject:['teams','users'],
  components: {
    UserItem
  },
  data() {
    return {
      // teamName: 'Test',
      members: [
        // { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        // { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      ],
    };
   
  },
  methods:{
    laodcomponent(teamid){
      console.log(this.$route.params.teamid)
    const team= this.teams.find(id=>id.id === teamid);
    const teammember = team.members;
    console.log(teammember);
    const teamusers =[]
   for( const member of teammember){
    const item= this.users.find(user=> user.id == member);
    teamusers.push(item);
   }
   this.members = teamusers;
   this.teamName=team.name; 
    }
  },
  created(){
    this.laodcomponent(this.teamid);
    
   },
   props:['teamid'],
   watch:{
    teamid(id){
      this.laodcomponent(id);
    }
   }
,
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>