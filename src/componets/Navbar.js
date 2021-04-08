import React from 'react'
import {Link} from 'react-router-dom';
import img from './Img/logo.png'
import {SidebarData} from './SidebarData';
import {TopbarData} from './TopbarData';
import {SecondarybarData} from './SecondarybarData';
import './Navbar.css';



function Navbar() {
    return (
        <>
    <nav className="navbar"> 
         <img className="logo" src={img}/>
         <h1 className="dual-logo">
             Dual
         </h1>
         <h1 className="bank-logo">Bank</h1>
        
    <div className="nav-logo">
           
        <div className="cc">      
            <ul>
                <h3 className="parag"> Conta Corrente  </h3> 
                <select className="select" name="agencia" id="conta">           
                    <option value="Corrente">Ag. 00005-1 C.C. 00000000000000000020-1</option>
                    <option value="Poupança">Ag. 00005-1 C.C. 01010010001000010000-2</option>
                    <option value="Ed.Suzano">Ag. 00005-1 C.C. 000000000000015-1</option>
                    <option value="Cond. Gullermo">Ag. 00005-1 C.C. 00000000000000017-1</option>
                    <option value="Res. Figma Ômega">Ag. 00005-1 C.C. 0000000000000000019-1</option>
                </select>
            </ul>   
        </div>    
             
    </div> 
        <div className="input-type"> 
            <div className="saldonav">
                <ul>
                    <h3 className="parag" > Saldo</h3>
                    <select  className="select" name="agencia" id="conta">
                    <option value="">Exibir</option>
                    <option value="valor">R$ 40.000,00</option>      
                    </select>
                </ul>
            </div>       
        </div>

        <div className="nav-logo2">
             
            <ul className='navlogo2'>
            <input className="search" type='search' placeholder="Pesquisar"/>
            {SecondarybarData.map((item, index) =>{
                    return(
                    <li key={index} className={item.cName}>
                         <Link to={item.path}>
                             <span> {item.title}</span>
                             {item.icon}
                         </Link>
                    </li>       
            
                    )          
                })}

            </ul>
        </div>
        
    </nav>

        <nav className={"navbar-menu-top"}> 
           <ul className='menu-top-bars'>
            {TopbarData.map((item, index) =>{
                    return(
                    <li key={index} className={item.cName}>
                         <Link to={item.path}>
                             {item.icon}
                             <span> {item.title}</span>
                         </Link>
            </li>    
            
                    )   
                           
            })}
    
            </ul>
        </nav>
                                                       
            <nav className={'nav-menu'}>
                <ul className='nav-menu-items'>
                {SidebarData.map((item, index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                } )}
                </ul>
            </nav>

        </>
    )
}

export default Navbar
