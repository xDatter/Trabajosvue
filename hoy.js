// Ejercicios entre 15 y 20 de vue basico
let vueBasico={
    data(){
        return{ 
        // Arreglar el exponer antes de subir
            Exponer:"1",
            bancoSaldo:0,
            bancoCredito:1000,
            bancoOperar:"",
            bancoRegFecha:[],
            bancoRegHora:[],
            bancoRegMov:[],
            bancoRegMonto:[]

        }
    },
    methods:{

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
        let hoy=new Date();
        let year= hoy.getFullYear();
        let month= hoy.getMonth();
        let day= hoy.getDay();
        let hours=hoy.getHours();
        let minutes=hoy.getMinutes();
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

        if(this.bancoOperar<=0){
            alert("Monto a girar debe ser superior a $0");
            this.bancoOperar="";
            return;
        }
        if((this.bancoSaldo-this.bancoOperar)<=(-this.bancoCredito)){
            

            this.bancoOperar=(this.bancoCredito+this.bancoSaldo);
        }

        let hoy=new Date();
        let year= hoy.getFullYear();
        let month= hoy.getMonth();
        let day= hoy.getDay();
        let hours=hoy.getHours();
        let minutes=hoy.getMinutes();
        let fechaMov= `${year}/${month}/${day}`
        let horaMov=`${hours}:${minutes}`
        this.bancoRegMov.push("Giro");
        this.bancoRegMonto.push(this.bancoOperar);
        this.bancoRegFecha.push(fechaMov);
        this.bancoRegHora.push(horaMov);
        this.bancoSaldo-=this.bancoOperar;
        this.bancoOperar="";


       },



    }
}