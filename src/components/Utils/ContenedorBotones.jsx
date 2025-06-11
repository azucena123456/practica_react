import { BotonCrearCuenta } from "./BotonCrearCuenta";
import { BotonInisioSecion } from "./BotonInisioSecion";

export const ContenedorBotones = () => {
  return (
    <div className="container mt-5">
      <div className="p-4 rounded bg-body-secondary shadow">
        <div className="row g-3 justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <BotonInisioSecion />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <BotonCrearCuenta />
          </div>
        </div>
      </div>
    </div>
  );
};
