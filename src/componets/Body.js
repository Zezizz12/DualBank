import React from 'react'
import './Body.css';




function Body(){


return(
<div className="Body">
    <div className="saldo">
    <h3 className="parag"> Saldo Bancario</h3>
        <ul>

       <li><input className="botao" type="button" value="Imprimir"/></li> 

       <li><input className="botao" type="button" value="Baixar"/></li>

       <li><input className="botao" type="button" value="Compartilhar"/> </li>
       
        </ul>
        
    </div>

    <div className="botoes">

                    <h3 className="parag" > Data do Saldo</h3>
                    <select  className="select" name="agencia" id="conta">
                        <option value="data">07/12/2020</option>
                        <option value="data">08/12/2020</option>    
                        <option value="data">09/12/2020</option>
                        <option value="data">10/12/2020</option>
                        <option value="data">11/12/2020</option>  
                    </select>

        <h5> Saldo Atualizado as 00:00 </h5>

                    <select  className="select" name="agencia" id="conta">
                    <option value="saldo">Saldo Disponivel R$40.000,00</option>
                    <option value="saldo">Disponibilizado R$20.000,00</option>
                    <option value="saldo">Distribuido R$12.050,00</option>
                    </select>
    </div>
    

</div>
    )

}



   
export default Body