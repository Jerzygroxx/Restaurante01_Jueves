export const MenuListar = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{width:"5%"}}>#</th>
                <th style={{width:"30%"}}>Plato</th>
                <th style={{width:"25%"}}>Acompañamiento</th>
                <th style={{width:"20%"}} className="text-center">Precio</th>
                <th style={{width:"20%"}}>Region</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >1</td>
                <td>Bandeja paisa</td>
                <td>Con Aguacate</td>
                <td className="text-center">35000</td>
                <td>Andina</td>
              </tr>
              <tr>
                <td >2</td>
                <td>Ajiaco</td>
                <td>Arroz y patacones</td>
                <td className="text-center">25000</td>
                <td>Andina</td>
              </tr>
              <tr>
                <td >3</td>
                <td>Sancocho</td>
                <td>Guarapo</td>
                <td className="text-center">15000</td>
                <td>Caribe</td>
              </tr>
              <tr>
                <td >4</td>
                <td>Tungo de Platano</td>
                <td>Suero</td>
                <td className="text-center">12000</td>
                <td>Orinoquia</td>
              </tr>
              <tr>
                <td >5</td>
                <td>Sopa de Cangrejo</td>
                <td>Mariscos</td>
                <td className="text-center">50000</td>
                <td>Pacifico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
