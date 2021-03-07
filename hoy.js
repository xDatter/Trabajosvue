// Ejercicios entre 15 y 20 de vue basico
let vueBasico={
    data(){
        return{ 
        // Arreglar el exponer antes de subir
            Exponer:"2",
    // Ejer 15------------------------------------
            bancoSaldo:0,
            bancoCredito:1000,
            bancoOperar:"",
            bancoRegFecha:[],
            bancoRegHora:[],
            bancoRegMov:[],
            bancoRegMonto:[],
    // Ejer 16------------------------------------
            calVisor:"",
            calOperar:"",






        }
    },
    methods:{
        // Ejer 15------------------------------------

        abonar(){
            this.bancoOperar=Number(this.bancoOperar);
            if(this.bancoOperar<=0){
                alert("Monto a abonar debe ser superior a $0");
                this.bancoOperar="";
                return;
            }
            if(this.bancoOperar>1000000){
                alert("El monto máximo permitido para abonar es de $1.000.000 por operación");
                this.bancoOperar="";
                return;
            }
            let hoy=new Date();let year= hoy.getFullYear();let month= hoy.getMonth();let day= hoy.getDay();let hours=hoy.getHours();let minutes=hoy.getMinutes();
            let fechaMov= `${year}/${month}/${day}`
            let horaMov=`${hours}:${minutes}`
            this.bancoRegMov.push("Abono");
            this.bancoRegMonto.push(this.bancoOperar);
            this.bancoRegFecha.push(fechaMov);
            this.bancoRegHora.push(horaMov);
            this.bancoSaldo+=this.bancoOperar;
            this.bancoOperar="";
       },

        girar(){
            this.bancoOperar=Number(this.bancoOperar);
            if((this.bancoSaldo-this.bancoOperar)<=(-this.bancoCredito)){
                this.bancoOperar=(this.bancoCredito+this.bancoSaldo);
            }
            if(this.bancoOperar<=0){
                this.bancoOperar="";
                return;
            }
            let hoy=new Date();let year= hoy.getFullYear();let month= hoy.getMonth();let day= hoy.getDay();let hours=hoy.getHours();let minutes=hoy.getMinutes();
            let fechaMov= `${year}/${month}/${day}`
            let horaMov=`${hours}:${minutes}`
            this.bancoRegMov.push("Giro");
            this.bancoRegMonto.push(this.bancoOperar);
            this.bancoRegFecha.push(fechaMov);
            this.bancoRegHora.push(horaMov);
            this.bancoSaldo-=this.bancoOperar;
            this.bancoOperar="";
       },
        // Ejer 16------------------------------------
        
        calClear(){
            this.calOperar="";
            this.calVisor="";
        },

        calExp(calNumero){
            calNumero = Number(this.calOperar);
            if(!Number(calNumero)){
                this.calOperar="";
                return;
            }
            this.calVisor=calNumero*calNumero;
            this.calOperar="";
        },

        calRaiz(calNumero){
            calNumero = Number(this.calOperar);
            if(!Number(calNumero)){
                this.calOperar="";
                return;
            }
            if(calNumero<0){
                return;
            }
            this.calVisor= Math.sqrt(calNumero);
            this.calOperar="";

        },

        calFact(calNumero){
            calNumero = Number(this.calOperar);
            if(!Number(calNumero)){
                this.calOperar="";
                return;
            }
            if(calNumero<0){
                return;
            }
            let i;
            let f=1;
            for(i=1;i<=calNumero;i++){f*=i;}
            this.calVisor= f;
            this.calOperar="";



        },








    },
    computed:{
        // Ejer 15------------------------------------

        btnDisable(){
            return this.bancoSaldo<=(-this.bancoCredito)? true:false;       
        },

        bancoMensajeColor1(){
            return this.bancoSaldo<=(-this.bancoCredito)? "bgRo":"bgAz";  
        },

        bancoMensajeColor2(){
            return this.bancoSaldo>=-1000 & this.bancoSaldo<-500? "bgAm":"bgAz";  
        },
        bancoMensajeColor3(){
            return this.bancoSaldo>=0 & this.bancoSaldo<500? "bgAz":"bgVe";  
        },

        // Ejer 16------------------------------------
        calVisorOn(){
            return this.calVisor==""? false:true;
        },
        calVisorOff(){
            return this.calVisor==""? true:false;
        },
        caldisableNeg(){
            return this.calOperar<0? true:false;
        }
    }
}