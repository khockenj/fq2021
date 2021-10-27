<template>
   <div class='home'>
       <v-container>
  <v-data-table
    :headers="headers"
    :items="playerData"
    :items-per-page="15"
    class="elevation-1"
  >
   <template v-slot:item.wr="{ item }">
            {{(item.wr*100).toFixed(0)}}%
    </template>
    <template v-slot:item.name="{ item }">
            <router-link :to="{ name: 'Profile', params: { u: item.name }}">{{item.name}}</router-link>
    </template>

</v-data-table>
    </v-container>
    </div>

</template>

<script>
import players from '../return.json'
export default {
  name: 'Home',
  components: {
         
        },
        data: () => ({
           playerData: [],
           headers: [
          {
            text: 'Team',
            align: 'start',
            sortable: true,
            value: 'team',
          },
          { text: 'Role', value: 'role', sortable:true },
          { text: 'Name', value: 'name', sortable:true },
          { text: 'IGN', value: 'ign', sortable:true },
          { text: 'Winrate', value: 'wr', sortable:true },
        ],
            
        }),
        methods: {
          checkData: function() {
            for (const [key, value] of Object.entries(players)) {
            this.playerData.push({name: key, team: value['team'], role: value['role'], ign: value['ign'], wr: value['wr']});
            }
            console.log(this.playerData);
          }  
        },
        mounted: function () {
          this.checkData();
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profile {
  max-width:50%;
  text-align:center;
  margin:auto;
}
.center {
  text-align:center;
  vertical-align:center;
  background-color:#DDDDDD;
  border-radius:25px;
  margin:5px;
}
.center-half {
  text-align:center;
  vertical-align:center;
  background-color:#CCC;
  border-radius:25px;
}
.center-nobg {
  text-align:center;
  vertical-align:center;
}
</style>
