  import React, { useState } from 'react';
  import '../Estilos/style1.css';
  function Calculadora() {
    const [displayValue, setDisplayValue] = useState('0');

    const handleNumberClick = (number) => {
      setDisplayValue((prevDisplayValue) => {
        // Concatenar el número seleccionado al valor actual del display
        return prevDisplayValue === '0' ? number.toString() : prevDisplayValue + number.toString();
      });
    };

    const handleOperatorClick = (operator) => {
      setDisplayValue((prevDisplayValue) => {
        // Si el último carácter del display es un operador, reemplazarlo con el nuevo operador seleccionado
        const lastChar = prevDisplayValue.charAt(prevDisplayValue.length - 1);
        if (isOperator(lastChar)) {
          return prevDisplayValue.slice(0, -1) + operator;
        }
        // Concatenar el operador seleccionado al valor actual del display
        return prevDisplayValue + operator;
      });
    };

    const handleEqualsClick = () => {
      setDisplayValue((prevDisplayValue) => {
        // Evaluar la expresión matemática en el display usando la función eval
        try {
          const result = eval(prevDisplayValue);
          // Redondear el resultado a 2 decimales si es un número decimal
          return parseFloat(result.toFixed(2)).toString();
        } catch (error) {
          // Manejar errores de evaluación de la expresión
          return 'Error';
        }
      });
    };

    const handleClearClick = () => {
      setDisplayValue('0');
    };

    const isOperator = (char) => {
      // Verificar si el carácter es un operador (+, -, *, /)
      return ['+', '-', '*', '/'].includes(char);
    };

    return (
      
      <div className="calculator container  ">   
      <div className="display card mb-2 text-center  text-white"><span className='resul'>{displayValue}</span></div>
      <div className="keypad card-body ">
        <div className="row">
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(7)}>7</button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(8)}>8</button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(9)}>9</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleOperatorClick('/')}>÷</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(4)}>4</button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(5)}>5</button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(6)}>6</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleOperatorClick('*')}>×</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(1)}>1</button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(2)}>2</button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(3)}>3</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleOperatorClick('-')}>−</button>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <button className="btn btn-primary btn-block" onClick={() => handleNumberClick(0)}>0</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleOperatorClick('.')}>.</button>
          </div>
          <div className="col-3">
            <button className="btn btn-success btn-block" onClick={handleEqualsClick}>=</button>
          </div>
          <div className="col-3">
            <button className="btn btn-dark btn-block" onClick={() => handleOperatorClick('+')}>+</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-danger btn-block" onClick={handleClearClick}>Clear</button>
          </div>
        </div>
      </div>
    </div>  
    );
  }

export default Calculadora;
