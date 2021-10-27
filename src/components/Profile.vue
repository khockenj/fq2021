<template>
      <div>
      <v-container class='profile'>
        
        <v-row>
          <v-col cols='3'><v-btn to='/' elevation='2' color='#02894b' dark><v-icon
        left
        dark
        tile
      >
        mdi-arrow-left
      </v-icon>Return</v-btn></v-col>
          <v-col cols='6' class='center-nobg'>
            <p class='text-h4'>{{player}} ({{playerData.ign}})</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class='center-nobg' style='padding:0px;margin:0px'>
            <p class='text-h5'>{{playerData.role}}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols='3'></v-col>
          <v-col class='center' cols='3'>
        <v-img
  max-height="200"
  max-width="200"
  :src="require(`../assets/${playerData.team}.png`)"
  style='margin:auto;'
></v-img>
          </v-col>
          <v-col class='center' cols='3' style='padding:0px'>
<apexchart type="radialBar" height="210"  :options="chartOptions" :series="series" ></apexchart>
          </v-col>
        </v-row>

<v-row>
        <v-col class='center-nobg'>
          <p class='text-h5'>Champion Statistics</p>
        </v-col>
        </v-row>
<v-row>
          <v-col class='center'>
        
  <v-data-table
    :headers="champHeaders"
    :items="playerData.champData"
    :items-per-page="20"
    class="elevation-1"
    :sort-by="['totalGames']"
    :sort-desc="[true]"
    dense
    multi-sort
  >
            <template v-slot:item.kda="{ item }">
            {{item.kda.toFixed(1)}}
    </template>

    <template v-slot:item.cspm="{ item }">
            {{item.cspm.toFixed(1)}}
    </template>

    <template v-slot:item.wpm="{ item }">
            {{item.wpm.toFixed(2)}}
    </template>
    <template v-slot:item.dpm="{ item }">
            {{item.dpm.toFixed(0)}}
    </template>
    <template v-slot:item.dpmgpm="{ item }">
            {{item.dpmgpm.toFixed(2)}}
    </template>
         <template v-slot:item.fbPercent="{ item }">
            {{item.fbPercent.toFixed(2)*100}}%
    </template>
         <template v-slot:item.wr="{ item }">
            <v-chip
        :color="getWinrateColor(item.wr)"
        dark
      >
         {{item.wr.toFixed(2)*100}}%
      </v-chip>
           
    </template>
  </v-data-table>
          </v-col>
</v-row>
        <v-row>
        <v-col class='center-nobg'>
          <p class='text-h5'>Matches</p>
        </v-col>
        </v-row>
        <v-row> <v-col cols='3'></v-col>
          <v-col class='center-half' cols='6'><v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search Table"
        single-line
        hide-details
      ></v-text-field></v-col>
        </v-row>
        <v-row>
          <v-col class='center'>
        
  <v-data-table
    :headers="matchHeaders"
    :items="playerData.matchData"
    :items-per-page="50"
    class="elevation-1"
    dense
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="matchId"
    show-expand
    multi-sort
    :search="search"
    group-by="date"
  >
  
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <v-container>
          <v-row>
            <v-col cols='3' class='center'>Runes</v-col>
            <v-col cols='3' class='center'>Summoners</v-col>
            <v-col cols='3' class='center'>Item Build</v-col>
          </v-row>
          <v-row>
            <v-col style='display:flex;text-align:center;' cols='3'>
            <v-col v-for='r in item.runes' v-bind:key='r' style='padding:0' ><v-img :src="require(`../assets/runes/${clearText(r)}.png`)" style='max-width:40px;'></v-img></v-col>
            <v-col v-bind:key='s' v-for='s in item.shards' style='padding:0' > <v-img :src="require(`../assets/runes/${clearText(s)}.png`)" style='max-width:40px;'></v-img></v-col>
            </v-col>
            <v-col style='display:flex' cols='3'>
            <v-img contain v-bind:key='r' v-for='r in item.summoners' :src="require(`../assets/summoners/${clearText(r)}.png`)" style='max-width:50px;margin-left:5px;margin-right:5px;'></v-img>
            </v-col>
            <v-col style='display:flex' cols='4'>
            <!--<v-img v-bind:key='r' v-for='r in item.summoners' :src="require(`../assets/summoners/${clearText(r)}.png`)" style='max-width:40px;'></v-img>-->
            <v-col v-bind:key='i' v-for='i in item.finalItems'>{{i}}</v-col>
            </v-col>
          </v-row>
        </v-container>
      </td>
    </template>
      <template v-slot:item.result="{ item }">
      <v-chip
        :color="getWinColor(item.result)"
        dark
      >
        {{ item.result }}
      </v-chip>
    </template>
<template v-slot:item.fb="{ item }">
      <v-chip
        :color="item.fb ? 'green':'red'"
        dark
      >
        {{ item.fb ? 'Y' :'N' }}
      </v-chip>
    </template>
          <template v-slot:item.kda="{ item }">
            {{item.kda.toFixed(1)}}
    </template>

    <template v-slot:item.cspm="{ item }">
            {{item.cspm.toFixed(1)}}
    </template>

    <template v-slot:item.wpm="{ item }">
            {{item.wpm.toFixed(2)}}
    </template>
    <template v-slot:item.dpm="{ item }">
            {{item.dpm.toFixed(0)}}
    </template>
    <template v-slot:item.dpmgpm="{ item }">
            {{item.dpmgpm.toFixed(2)}}
    </template>
        <template v-slot:item.gameLength="{ item }">
            {{item.gameLength.toFixed(1)}}
    </template>

  </v-data-table>
</v-col>
        </v-row>
      </v-container>
      </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import players from '../return.json'
export default {
  name: 'Profile',
  components: {
          apexchart: VueApexCharts,
        },
        data: () => ({
          player: null,
          search: '',
                  expanded: [],
        singleExpand: false,
          series: [0],
          playerData: null,
          chartOptions: {
            chart: {
              height: 200,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: '70%',
                }
              },
            },
            labels: ['Winrate'],
          },
           matchHeaders: [
          {
            text: 'Role',
            align: 'start',
            sortable: true,
            value: 'position',
          },
          { text: 'Patch', value: 'patch', sortable:true },
          { text: 'Result', value: 'result', sortable:true },
          { text: 'Date', value: 'date', sortable:true },
          { text: 'Champion', value: 'champ', sortable:true },
          { text: 'Vs.', value: 'matchup', sortable:true },
          { text: 'KDA', value: 'kda' },
          { text: 'First Blood Participation', value: 'fb' },
          { text: 'CS Per Min.', value: 'cspm' },
          { text: 'Damage Per Min.', value: 'dpm' },
          { text: 'Wards Per Min.', value: 'wpm' },
          { text: 'DPM/GPM', value: 'dpmgpm' },
          { text: 'Kills', value: 'kills' },
          { text: 'Deaths', value: 'deaths' },
          { text: 'Assists', value: 'assists' },
          { text: 'CS', value: 'cs', sortable:true  },
          { text: 'Game Length', value: 'gameLength' },
          { text: 'Damage', value: 'damage' },
          { text: 'Gold', value: 'gold' },
          { text: 'Wards', value: 'wards' },
        ],
            champHeaders: [
          { text: 'Champion', value: 'champ', sortable:true, align: 'start'},
          { text: 'KDA', value: 'kda' },
          { text: 'Winrate', value: 'wr' },
          { text: 'Wins', value: 'w' },
          { text: 'Losses', value: 'l' },
          { text: 'Total Games', value: 'totalGames'},
          { text: 'First Blood Participation', value: 'fbPercent' },
          { text: 'CS Per Min.', value: 'cspm' },
          { text: 'Damage Per Min.', value: 'dpm' },
          { text: 'Wards Per Min.', value: 'wpm' },
          { text: 'DPM/GPM', value: 'dpmgpm' },
        
        ],
          
        }),
        methods: {
          checkData: function() {
            this.player = this.$route.params.u;
            this.playerData = players[this.player];
            this.series = [(this.playerData.wr*100).toFixed(0)];
            console.log(this.playerData);
          },
          getWinColor(results) {
            if(results == 'W') return 'green'
            else return 'red'
          },
           getWinrateColor(wr) {
            if(wr >= 0.5) return 'green'
            else return 'red'
          },
          clearText(t) {
            return t.replace(/\W/g, '').toLowerCase();
          },
          dateFix(d) {
            return Date.parse(d).toLocaleString().split(',')[0];
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
