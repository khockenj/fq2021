<template>
   <div class='home'>
       <v-container>
           <v-row>
               <v-col cols='12' class='text-h3 center'>Wards</v-col>
           </v-row>
           <v-row>
               <v-col cols='12'>
                    <v-img
max-width="1000px"
style="margin:auto;"
  :src="require(`../assets/maps/wards/${m}.png`)"
></v-img>
               </v-col>
           </v-row>
           <v-row>
               <v-col cols='12' class='text-h3 center'>Jungle Kill Participation</v-col>
           </v-row>
           <v-row>
               <v-col cols='12'>
                    <v-img
max-width="1000px"
style="margin:auto;"
  :src="require(`../assets/maps/jgkill/${m}.png`)"
></v-img>
               </v-col>
           </v-row>
           <v-row>
               <v-col cols='12' class='text-h3 center'>Deaths</v-col>
           </v-row>
           <v-row>
               <v-col cols='12'>
                    <v-img
max-width="1000px"
style="margin:auto;"
  :src="require(`../assets/maps/deaths/${m}.png`)"
></v-img>
               </v-col>
           </v-row>

            <v-row>
               <v-col cols='12' class='text-h3 center'>Jungle First Pathing</v-col>
           </v-row>
           <v-row>
               <v-col cols='12'>
                    <v-img
max-width="1000px"
style="margin:auto;"
  :src="require(`../assets/maps/firstPathing/${m}.png`)"
></v-img>
               </v-col>
           </v-row>
       </v-container>
  
    </div>

</template>

<script>
export default {
  name: 'HeatMaps',
  components: {
          
        },
        data: () => ({
            //data1: [[554,581], [557,345], [335,269], [194,457], [329,650]],
            //data2: [[14180,14271], [14176,14506], [14398,14582], [14539,14394], [14404,14201]]
            m: null
        }),
        methods: {
          checkData: function() {
            this.m = this.$route.params.m;

            /* let vm = this;
            var canvas = document.getElementById("rift");
            var ctx = canvas.getContext("2d");
            var background = new Image();
            background.src = require(`../assets/rift2_new.jpg`);
            function fix(coord) {
                return 1600-(coord/10);
            }
            // Make sure the image is loaded first otherwise nothing will draw.
            background.onload = function(){
                ctx.drawImage(background,0,0,1600,1600);   
                vm.data1.forEach(function(c){
                    ctx.fillStyle = "#FF0000";
                    console.log(fix(c[1]))
                    ctx.fillRect(c[0]/10,fix(c[1]),10,10);
            })
                vm.data2.forEach(function(c){
                    ctx.fillStyle = "#FF0000";

                    ctx.fillRect(c[0]/10,fix(c[1]),10,10);
            })
            }
            */
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
canvas{
    margin:1rem;
}
</style>
