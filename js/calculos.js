//Bucles
function calcular(number){

    const MULTIPLO = 7;
    var aray = [];

        for(i=1;i<=number;i++){
            if(numerosPrimos(i)||acabadosSiete(i))aray.push(i);
        }
        for(n=0;n<aray.length;n++){
            document.write("</br>"+aray[n]);
        }


//Funciones
    function numerosPrimos(numero){
        if(numero % MULTIPLO == 0) return true;
        else return false;
    };

    function acabadosSiete(numero){
        if(numero.toString().charAt(numero.toString().length-1) == MULTIPLO)return true;
    };
};
/**
     * Created by Llorenç on 30/09/2015.
     */
