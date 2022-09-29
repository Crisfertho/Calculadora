import React, {useState} from 'react';


const Calculadora = () => {

  const [resultado,setResultado]=useState('');

  const Clickeo=(e)=>{
  
      setResultado(resultado.concat(e.target.value))
}

   const BorrarTodo=()=>{
    setResultado("");
   }

   const Limpiar=()=>{
    
      setResultado(resultado.slice(0, - 1));
   
    }
    

   const Calcular=()=>{
    try {
      setResultado(eval(resultado).toString());
   
   } catch (error) {
    setResultado("ERROR")
   }
   }

  return (
    <div className='contenedor'>
      <input type="text" placeholder="0" id="pantalla" value={resultado}/>
      <input className="button" type="button" value="7" onClick={Clickeo}/>
      <input className="button" type="button" value="8" onClick={Clickeo}/>
      <input className="button" type="button" value="9" onClick={Clickeo}/>
      <input className="button resaltar" type="button" value="+" onClick={Clickeo}/>
      <input className="button" type="button" value="4" onClick={Clickeo}/>
      <input className="button" type="button" value="5" onClick={Clickeo}/>
      <input className="button" type="button" value="6" onClick={Clickeo}/>
      <input className="button resaltar" type="button" value="-" onClick={Clickeo}/>
      <input className="button" type="button" value="1" onClick={Clickeo}/>
      <input className="button" type="button" value="2" onClick={Clickeo}/>
      <input className="button" type="button" value="3" onClick={Clickeo}/>
      <input className="button resaltar" type="button" value="*" onClick={Clickeo}/>
      <input className="button" type="button" value="0" onClick={Clickeo}/>
      <input className="button" type="button" value="." onClick={Clickeo}/>
      <input className="button" type="button" value="C" onClick={Limpiar}/>
      <input className="button resaltar" type="button" value="/" onClick={Clickeo}/>
      <input type="button" value="CA" className="button clear" onClick={BorrarTodo}/>
      <input type="button" value="=" className="button igual" onClick={Calcular}/>
    </div>
  );
}

export default Calculadora;

