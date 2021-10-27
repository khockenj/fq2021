<template>
   <div class='home'>
       <v-container>
           <v-row>
          <v-col cols='3'><v-btn to='/patchInfo' elevation='2' color='#02894b' dark><v-icon
        left
        dark
        tile
      >
        mdi-arrow-left
      </v-icon>Return</v-btn></v-col>
           <v-col cols='6' class='text-h2 center' style='margin-top:1rem;margin-bottom:1rem;'>{{server}} - {{patch}}</v-col>
           <v-col cols='3'></v-col>
           </v-row>
           <v-row><v-col cols='3'></v-col>
         <v-col cols='6'>
           <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Table"
        single-line
        hide-details
      ></v-text-field>
         </v-col>
           </v-row>
  <v-data-table
    :headers="headers"
    :items="playerData"
    :items-per-page="20"
    class="elevation-1"
    dense
    :search="search"
  >

    <template v-slot:item.wr="{ item }">
        {{(item.wr*100).toFixed(0)}}%
    </template>

<template v-slot:item.dpm="{ item }">
        {{item.dpm.toFixed(0)}}
    </template>

<template v-slot:item.kda="{ item }">
        {{item.kda.toFixed(2)}}
    </template>

<template v-slot:item.dpmgpm="{ item }">
        {{item.dpmgpm.toFixed(2)}}
    </template>
<template v-slot:item.cspm="{ item }">
        {{item.cspm.toFixed(2)}}
    </template>
<template v-slot:item.gameLength="{ item }">
        {{item.gameLength.toFixed(2)}} min
    </template>
</v-data-table>
    </v-container>
    </div>

</template>

<script>
import players from '../task2return.json'
export default {
  name: 'ByPatch',
  components: {
         
        },
        data: () => ({
           playerData: [],
           search: '',
           patch: null,
           headers: [
          {
            text: 'Champ',
            align: 'start',
            sortable: true,
            value: 'champ',
          },
          { text: 'Winrate', value: 'wr', sortable:true},
          { text: 'KDA', value: 'kda', sortable:true },
          { text: 'DPM', value: 'dpm', sortable:true},
          { text: 'DMG/GOLD', value: 'dpmgpm', sortable:true},
          { text: 'CSPM', value: 'cspm', sortable:true},
          { text: 'Game Length', value: 'gameLength', sortable:true},
          { text: 'Games Played', value: 'totalGames', sortable:true}
        ],
            
        }),
        methods: {
          checkData: function() {
            let patch, server = null;
            if(this.$route.params.p.includes('euw')) server = "EUW";
            else if(this.$route.params.p.includes('kr')) server = "KR";

            if(this.$route.params.p.includes('1120')) patch = "11.20"
            else if(this.$route.params.p.includes('1121')) patch = "11.21"
            this.patch = patch;
            this.server = server;
            this.playerData = players[this.$route.params.p];

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
