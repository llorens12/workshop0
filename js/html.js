/**
 * Created by Llorenç on 30/09/2015.
 */
(function() {

    document.writeln('<input type="text" name="number" id="introducido"/>');

    var btn = document.createElement("button");
    btn.onclick = function(){
        calcular(document.getElementById("introducido").value)
    };


    btn.appendChild(document.createTextNode("Calcular"));

    document.body.appendChild(btn);

}());
