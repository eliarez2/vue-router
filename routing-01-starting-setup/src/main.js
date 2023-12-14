import { createApp } from 'vue';
import { createRouter  } from 'vue-router';
import { createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from  './components/teams/TeamMembers.vue';
import App from './App.vue';

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {name:'teams',path:'/',  redirect:'/teams'},
        {path:'/teams', component: TeamsList ,children:[
            {name:'team-member', path:':teamid', component: TeamMember, props:true},
        ]},
        
        {path:'/users', component: UsersList},
        {path:'/:notfound(.*)', component: TeamsList},
    ],
    scrollBehavior(){
        return{left:0 , top:0}
    },
       
});
router.beforeEach(function(to,from,next){
    console.log(to);
    console.log(from);
    next(true);

})

console.log(router)
const app = createApp(App)
app.use(router);
app.mount('#app');
