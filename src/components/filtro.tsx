

const filtro = (texto:string, palabras:string):string => {
    
    var palabrasArray: string[] = palabras.split(','); //Se insertan las palabras a bloquear en un array.
    var textoAux:string=texto;

    if((palabrasArray.length==1)&&(palabrasArray[0]=='')){//Si no se insertaron palabras a bloquear se devuelve el texto tal cual llegó.
        palabrasArray=[];
    }

    for(var i=0; i < palabrasArray.length; i++) {

        let regex = new RegExp( "\\S*"+palabrasArray[i]+"\\S*\\s" + "|" +  "\\S*"+palabrasArray[i]+"\\S*", "gim" );

        var palabrasAblock:string[] = texto.match(regex)!;//Se obtienen todas las palabras que cumplen con regex y se insertan en un array.

        if(palabrasAblock != null){//Si las palabras a bloquear no existen en el texto, éste se retorna tal cual llegó.  
            for(var j=0; j<palabrasAblock.length; j++){
                textoAux = textoAux.replace(palabrasAblock[j],'');//Se quitan todas las palabras a bloquear en el texto.
            }
        }

    }
 
    return textoAux;

}

export default filtro;