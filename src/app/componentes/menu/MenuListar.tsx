import { useState } from "react";
import { Plato } from "../../modelos/Platos";
import { ARREGLO_PLATOS } from "../../mocks/Plato-mocks";
import { AREEGLO_PLATOS_REGION } from "../../utilidades/dominio/DomRegion";

export const MenuListar = () => {
  const [arrplatos] = useState<Plato[]>(ARREGLO_PLATOS);

  const obtenerNombre = (valor: string) => {
    for (const objRegion of AREEGLO_PLATOS_REGION) {
      if (objRegion.codRegion === valor) return objRegion.nombreRegion;
    }
  };

  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Codigo</th>
                <th style={{ width: "30%" }}>Nombre lato</th>
                <th style={{ width: "25%" }}>Precio</th>
                <th style={{ width: "20%" }}>Region</th>
                <th style={{ width: "20%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrplatos.map((miPlat: Plato) => (
                <tr key={miPlat.codPlato} className="aling-middle">
                  <td>{miPlat.codPlato}</td>
                  <td>{miPlat.nombrePlato}</td>
                  <td>{miPlat.precioPlato}</td>
                  <td>{obtenerNombre(miPlat.regionPlato)}</td>
                  <td>
                    <img src={miPlat.imagenPlatoBase64} alt={miPlat.nombrePlato} className="imagenListado" />
                    {miPlat.imagenPlato}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
