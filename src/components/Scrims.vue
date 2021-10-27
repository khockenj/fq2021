<template>
   <div class='home'>
       <v-container>
  <v-data-table
    :headers="headers"
    :items="playerData"
    :items-per-page="15"
    class="elevation-1"
  >
  <template v-slot:item.win="{ item }">
      <v-tooltip bottom v-if="item['win'] == '?'" >
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-help
        </v-icon>
      </template>
      <span>Incomplete Data</span>
    </v-tooltip>
    <div v-if="item['win'] != '?'" >{{item['win'] == 100 ? item['blueTeam']:item['redTeam']}}</div>
  </template>

      <template v-slot:item.gameID="{ item }">
            <router-link :to="{ name: 'ScrimProfile', params: { u: item.gameID }}">{{item.gameID}}</router-link>
    </template>

     <template v-slot:item.bs="{ item }">
           <v-btn color="green lighten-3" :to="{ name: 'HeatMaps', params: { m: item.gameID}}">Heatmaps</v-btn>
    </template>
</v-data-table>
    </v-container>
    </div>

</template>

<script>
import players from '../task3_dumps.json'
export default {
  name: 'Scrims',
  components: {
         
        },
        data: () => ({
           playerData: [],
           headers: [
          { text: 'Match', value: 'gameID', sortable:true,  align: 'start'},
          { text: 'Heatmaps', value: 'bs', sortable:false},
          { text: 'Blue Team', value: 'blueTeam', sortable:true, },
          { text: 'Red Team', value: 'redTeam', sortable:true },
          { text: 'Winner', value: 'win', sortable:true },
        ],
            
        }),
        methods: {
          checkData: function() {

          let pd = []
          players.forEach(function(m) {
            let x = {'bs': Math.random(), 'blueTeam':Object.keys(m['teamOne'])[0].split(" ")[0], 'redTeam': Object.keys(m['teamTwo'])[0].split(" ")[0], 'gameID': m['gameId'], 'win': m['teamOne'][Object.keys(m['teamOne'])[0]]['statsFinal']['win']  };
            if(m['gameId'] && m['gameId'] != "2054091" && m['gameId'] != "2072956") pd.push(x);
          });
          this.playerData = pd;
          console.log(this.playerData);
        }
        },
        mounted: function () {
          this.checkData();
        }

}
</script>

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
