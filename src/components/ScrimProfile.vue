<template>
      <div>
      <v-container class='profile'>
        <v-row>        <v-col cols='3'><v-btn to='/scrims' elevation='2' color='#02894b' dark><v-icon
        left
        dark
        tile
      >
        mdi-arrow-left
      </v-icon>Return</v-btn></v-col>
        <v-col cols='6' class='text-h3 center' style='margin:1rem'>Match {{game}}</v-col>
        </v-row>
        <v-row><v-col cols='3'></v-col>
        <v-col cols='6' class='center-nobg'>
              <v-dialog
      v-model="dialog"
      width="750"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Custom Metric Calculations
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Custom Metric
        </v-card-title>

        <v-card-text>
          I took the average XP, CS, and Gold at 10 and 15min for each role (generated from the scrim games - small sample) and divided the player's stats by the average to give a number that would be above or below 1 and then summing them while also adding Kills, .5 Assists, subtracting deaths. <br />
          By Role: (CS/CSAvg) + (XP/XPAvg) + (Gold/GoldAVG) + Kills + (1/2)Assists - Deaths <br />
          For Support, I replaced CS with Vision Score for VS/VSAvg, as support cs can vary based on starting item<br/>
          Support: (VS/VSAvg) + (XP/XPAvg) + (Gold/GoldAVG) + Kills + (1/2)Assists - Deaths <br />
          I do think that I'm sort of double counting gold here with kills and gold both accounting for points - I'd probably revise in time.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            text
            @click="dialog = false"
          >
            Cool!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-col>
        </v-row>
        <v-row><v-col cols='3'></v-col>
        <v-col cols='6' class='text-h4 center-nobg' style='margin:1rem'>Stats at 10 Minutes</v-col>
        </v-row>
  <v-data-table
    :headers="headers"
    :items="stats10"
    :items-per-page="10"
    class="elevation-1"
    dense
    multi-sort
  >
    <template v-slot:item.dmgpergold="{ item }">
            {{item.dmgpergold.toFixed(2)}}
    </template>
    <template v-slot:item.minionsKilled="{ item }">
            {{item.minionsKilled.toFixed(0)}}
    </template>
    <template v-slot:item.visionScore="{ item }">
            {{item.visionScore.toFixed(2)}}
    </template>
        <template v-slot:item.totalDamageDealtToTurrets="{ item }">
            {{item.totalDamageDealtToTurrets.toFixed(0)}}
    </template>
        <template v-slot:item.totalDamageDealtChampions="{ item }">
            {{item.totalDamageDealtChampions.toFixed(0)}}
    </template>
            <template v-slot:item.iota="{ item }">
            {{item.iota.toFixed(2)}}
    </template>
      <template v-slot:item.csd="{ item }">
            {{item.csd.toFixed(0)}}
    </template>
          <template v-slot:item.name="{ item }">
           <router-link :to="{ name: 'ScrimPlayer', params: { p: item.name }}">{{item.name}}</router-link>
    </template>
  </v-data-table>
        <v-row><v-col cols='3'></v-col>
        <v-col cols='6' class='text-h4 center-nobg' style='margin:1rem'>Stats at 15 Minutes</v-col>
        </v-row>
  <v-data-table
    :headers="headers"
    :items="stats15"
    :items-per-page="10"
    class="elevation-1"
    dense
    multi-sort
  >
    <template v-slot:item.dmgpergold="{ item }">
            {{item.dmgpergold.toFixed(2)}}
    </template>
    <template v-slot:item.minionsKilled="{ item }">
            {{item.minionsKilled.toFixed(0)}}
    </template>
    <template v-slot:item.visionScore="{ item }">
            {{item.visionScore.toFixed(2)}}
    </template>
        <template v-slot:item.totalDamageDealtToTurrets="{ item }">
            {{item.totalDamageDealtToTurrets.toFixed(0)}}
    </template>
        <template v-slot:item.totalDamageDealtChampions="{ item }">
            {{item.totalDamageDealtChampions.toFixed(0)}}
    </template>
        <template v-slot:item.iota="{ item }">
            {{item.iota.toFixed(2)}}
    </template>
          <template v-slot:item.csd="{ item }">
            {{item.csd.toFixed(0)}}
    </template>
              <template v-slot:item.name="{ item }">
           <router-link :to="{ name: 'ScrimPlayer', params: { p: item.name }}">{{item.name}}</router-link>
    </template>
  </v-data-table>
      </v-container>
      </div>
</template>

<script>
import players from '../task3_dumps.json'
export default {
  name: 'ScrimProfile',
  components: {},
        data: () => ({
          dialog: false,
          player: null,
          game: null,
          stats10: [],
          stats15: [],
           headers: [
          /*{
            text: 'Team',
            align: 'start',
            sortable: true,
            value: 'team',
          },
          */
          { text: 'Role', value: 'role', sortable:true },
          { text: 'Name', value: 'name', sortable:true },
          { text: 'Champion', value: 'champion', sortable:true },
          { text: 'CSD', value: 'csd', sortable:true },
          { text: 'GD', value: 'gd', sortable:true },
          { text: 'XPD', value: 'xpd' },
          { text: 'Custom Metric', value: 'iota' },
          { text: 'DMG Per Gold', value: 'dmgpergold' },
          { text: 'Kills', value: 'championsKilled' },
          { text: 'Assists', value: 'assists' },
          { text: 'Deaths', value: 'numDeaths' },
          { text: 'CS', value: 'minionsKilled' },
          { text: 'Damage to Turrets', value: 'totalDamageDealtToTurrets' },
          { text: 'Damage', value: 'totalDamageDealtChampions' },
          { text: 'Gold', value: 'totalGold' },
          { text: 'XP', value: 'experience' },
          { text: 'Vision Score', value: 'visionScore', sortable:true  },
          { text: 'Wards Killed', value: 'wardKilled' },
          { text: 'Wards Placed', value: 'wardPlaced' }
        ],
            
          
        }),
        methods: {
          calculateIOTA: function(stats, time) {
            let gold, cs, xp = 0;
            let role = stats['role'];
            if(role == "Top") {
              if(time == 15) {
                gold = stats['totalGold']/5592;
                cs = stats['minionsKilled']/105;
                xp = stats['experience']/6735;
                return [gold,cs,xp]
              } else if(time == 10){
                gold = stats['totalGold']/3377;
                cs = stats['minionsKilled']/68;
                xp = stats['experience']/4310;
                return [gold,cs,xp]
              }
            }
            else if(role == "Jungle") {
              if(time == 15) {
                gold = stats['totalGold']/5943;
                cs = stats['minionsKilled']/79;
                xp = stats['experience']/5906;
                return [gold,cs,xp]
              } else if(time == 10){
                gold = stats['totalGold']/3732;
                cs = stats['minionsKilled']/54;
                xp = stats['experience']/3450;
                return [gold,cs,xp]
              }
            }
            else if(role == "Mid") {
              if(time == 15) {
                gold = stats['totalGold']/5967;
                cs = stats['minionsKilled']/122;
                xp = stats['experience']/7018;
                return [gold,cs,xp]
              } else if(time == 10){
                gold = stats['totalGold']/3616;
                cs = stats['minionsKilled']/78;
                xp = stats['experience']/4396;
                return [gold,cs,xp]
              }
            }
            else if(role == "Bottom") {
              if(time == 15) {
                gold = stats['totalGold']/6049;
                cs = stats['minionsKilled']/117;
                xp = stats['experience']/5808;
                return [gold,cs,xp]
              } else if(time == 10){
                gold = stats['totalGold']/3547;
                cs = stats['minionsKilled']/72;
                xp = stats['experience']/3370;
                return [gold,cs,xp]
              }
            }
            else if(role == "Support") {
              if(time == 15) {
                  gold = stats['totalGold']/3818;
                  cs = stats['visionScore']/18;
                  xp = stats['experience']/3680;
                  return [gold,cs,xp]
              } else if(time == 10){
                  gold = stats['totalGold']/2506;
                  cs = stats['visionScore']/7;
                  xp = stats['experience']/2313;
                  return [gold,cs,xp]
              }
            }
          },
          checkData: function() {
            this.game = this.$route.params.u;
            let u = this.$route.params.u;
            let stats10t = [];
            let stats15t = [];
            //let statsFinal = [];
            let vm = this;
            players.forEach(function(m) {
              if(m['gameId'] == u){
                
                for (const [key, value] of Object.entries(m['teamOne'])) {
                  value['stats10']['name'] = key
                  value['stats10']['champion'] = value['champion']
                  value['stats10']['role'] = value['role']
                  value['stats10']['iota'] = (vm.calculateIOTA(value['stats10'],10).reduce((partial_sum, a) => partial_sum + a,0) + value['stats10']['championsKilled'] + (value['stats10']['assists'])/2 - value['stats10']['numDeaths'])
                
                  value['stats15']['name'] = key
                  value['stats15']['champion'] = value['champion']
                  value['stats15']['role'] = value['role']
                  value['stats15']['iota'] = (vm.calculateIOTA(value['stats15'],15).reduce((partial_sum, a) => partial_sum + a,0) + value['stats15']['championsKilled'] + (value['stats15']['assists'])/2 - value['stats15']['numDeaths'])

                  stats10t.push(value['stats10']);
                  stats15t.push(value['stats15']);
                }
              

              for (const [key, value] of Object.entries(m['teamTwo'])) {
                  value['stats10']['name'] = key
                  value['stats10']['champion'] = value['champion']
                  value['stats10']['role'] = value['role']
                  value['stats10']['iota'] = (vm.calculateIOTA(value['stats10'],10).reduce((partial_sum, a) => partial_sum + a,0) + value['stats10']['championsKilled'] + (value['stats10']['assists'])/2 - value['stats10']['numDeaths'])
                  value['stats15']['name'] = key
                  value['stats15']['champion'] = value['champion']
                  value['stats15']['role'] = value['role']
                  value['stats15']['iota'] = (vm.calculateIOTA(value['stats15'],15).reduce((partial_sum, a) => partial_sum + a,0) + value['stats15']['championsKilled'] + (value['stats15']['assists'])/2 - value['stats15']['numDeaths'])

                  stats10t.push(value['stats10']);
                  stats15t.push(value['stats15']);
                }
              }
            })
            this.stats10 = stats10t;
            this.stats15 = stats15t;
            console.log(this.stats15)
          },
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
