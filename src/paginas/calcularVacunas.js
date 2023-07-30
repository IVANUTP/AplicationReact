import { useState } from "react";
import Validacion from "../componets/validacion";
import '../Estilos/style2.css';


function CalcularVacunas() {
  const [edad, setEdad] = useState("");
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const handleCalcular = (e) => {
    e.preventDefault();

    // Validar el campo de edad
    if (!edad) {
      setError("Por favor, ingresa tu edad");
      setResultado("");
      return;
    }

    const edadNum = parseInt(edad);

    // Validar que la edad sea un número válido
    if (isNaN(edadNum)) {
      setError("Por favor, ingresa una edad válida");
      setResultado("");
      return;
    }

    // Realizar el cálculo de la edad
    let text = "";
    if (edadNum >= 5 && edadNum <= 12) {
      text = "Es un niño";
    } else if (edadNum >= 13 && edadNum <= 17) {
      text = "Es un puberto";
    } else if (edadNum >= 18 && edadNum <= 25) {
      text = "Es un joven";
    } else if (edadNum >= 26 && edadNum <= 60) {
      text = "Es un adulto";
    } else if (edadNum > 60) {
      text = "Un anciano";
    }

    setError("");
    setResultado(text);
  };

  return (
    <div className="container1 text-center">
      <h1 className="text-center">Vacunas Covid</h1>
      <br></br>
      <form onSubmit={handleCalcular}>
        <div className=" text-center">
          <label className="edad">Solicita tu Edad:</label>
          <Validacion className="input"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            error={error}
          />
        </div>

        <div className="text-center mt-3">
          <button className="btn-custom btn-primary " type="submit">
            Calcular
          </button>
        </div>
      </form>

      {resultado && (
        <div className="text-center mt-3">
          <span>{resultado}</span>
        </div>
      )}
    </div>
  );
}

export default CalcularVacunas;