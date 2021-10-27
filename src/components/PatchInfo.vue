<template>
   <div class='home'>
       <v-container>
         <v-row>
            <v-col cols='2'></v-col>
           <v-col cols='2'>
<v-btn color="blue lighten-2" :to="{ name: 'ByPatch', params: { p: 'euw1120'}}">View Patch EUW 11.20 </v-btn>
           </v-col>
                                 <v-col cols='2'>
<v-btn color="blue lighten-2" :to="{ name: 'ByPatch', params: { p: 'euw1121'}}">View Patch EUW 11.21 </v-btn>
           </v-col>
                      <v-col cols='2'>
 <v-btn color="red lighten-1" :to="{ name: 'ByPatch', params: { p: 'kr1120'}}">View Patch KR 11.20</v-btn>
           </v-col>

                                 <v-col cols='2'>
<v-btn color="red lighten-1" :to="{ name: 'ByPatch', params: { p: 'kr1121'}}">View Patch KR 11.21</v-btn>
           </v-col>     
         </v-row>
    <v-row>
      <v-col cols='3'></v-col>
      <v-col cols='6' class='text-h5 center-nobg'><v-btn color="warning" target="_blank" href='https://docs.google.com/document/d/1-TrcBlRSmB5uMcnLHCVaGhvzHlTjI60JjPU0gthd5Ws/edit?usp=sharing'>Analysis</v-btn></v-col>
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
  <v-data-table
    :headers="headers"
    :items="playerData"
    :items-per-page="15"
    class="elevation-1"
        :search="search"
  >
<template v-slot:item.patch="{ item }">
              <v-btn color="green lighten-3" :to="{ name: 'ByChamp', params: { c: item.champ }}">
    View Champion
  </v-btn>
    </template>
   
</v-data-table>
         </v-col>
         </v-row>
    </v-container>
    </div>

</template>

<script>
import players from '../task2return.json'
export default {
  name: 'PatchInfo',
  components: {
         
        },
        data: () => ({
        search: '',
           playerData: [],
           headers: [
          {
            text: 'Champion',
            align: 'start',
            sortable: true,
            value: 'champ',
          },
          { text: 'Compare Champion by Patch', value: 'patch', sortable:true },
        ],
            
        }),
        methods: {
          checkData: function() {
            this.playerData = players['euw1120'];
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
