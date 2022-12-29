
var formulario=document.getElementById("formulario1")
var PV=C/1-M
var C=document.getElementById("cantidad").value 
var M=document.getElementById("Porcentaje").value
var resultado=math.round(PV,1000)


/action_page.php.addEventListener("submit",final)

function terminacion(){
    alert ("Hola" +(document.getElementById("nombre_empleador").value) + "precio de venta del producto que deseas entregar a" (document.getElementById("nombre_usuario").value)+"de la compañía"+ (document.getElementById("nombre_empresa").value) +"es de"+ resultado+"Con esta venta la"+(document.getElementById("nombre_empresa").value)+"tendrá un margen de X%.”")
}


function validarempresa(){
    if(document.getElementById("nombre_empresa").value==string){
        return(True)
        }else{
            alert("No pudimos procesar el precio ya que no tenemos el nombre de la empresa")
        }
}
function validarinformacion(){
    if (document.getElementById("nombre_usuario").value == string){
        return True
    }else{
        alert("No pudimos procesar el precio ya que no tenemos el nombre del usuario")
    }
}
function validarcantidad(){
    if(document.getElementById("cantidad").valeue==number){
        return True
    }else{
        alert("No pudimos procesar el precio ya que no tenemos el Numero de cantidad")
    }
}
function validarporcentaje(){
    if (document.getElementById("Porcentaje").value ==number){
        return True
    }else{
        alert("No pudimos procesar el precio ya que no tenemos el Numero de porcentaje")
        
    }
}
function validarsuministrado(){
    if(validarinformacion==True){
        return(validarempresa)        
        }if(validarempresa==True){
            return(validarcantidad)
        }if(validarcantidad()==True){
            return(validarporcentaje)
           }if (validarporcentaje==True){
            return True
           }
}

function final(){
    if (validarsuministrado==True){
        return terminacion
    }

}

