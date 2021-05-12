Vue.component("T_casella",{
            data(){return{
                sing:"",
            }},
            template:`<div class="ele" @click="tic">{{sing}}</div>`,
            methods:{
                tic: function(){
                    if(this.sing==""&&casella.turno=="×"){
                        
                        this.sing=casella.turno;
                        this.$emit(casella.turno="○");
                    }
                    if(this.sing==""&&casella.turno=="○"){
                        
                        this.sing=casella.turno;
                        this.$emit(casella.turno="×");
                    }
                }
            }

        })

      /* ○× */

       let casella = new Vue({
            el:"#app",
            data:{
                turno:"×"
            },

            methods:{
                cambio:function(){
                    if(this.turno=="×"){this.turno="○"}
                    if(this.turno=="○"){this.turno="×"}
                }
            }
        }
        )
