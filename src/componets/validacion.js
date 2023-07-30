import React, { useState } from "react";

function Validacion({ value, onChange, error }) {
    return (
      <div>
        <input type="text" value={value} onChange={onChange} />
        {error && <div className="error">{error}</div>}
      </div>
    );
  }
  
export default Validacion;