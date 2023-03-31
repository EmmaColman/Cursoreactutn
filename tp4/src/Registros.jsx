
import Regristros from "./Registros";

function Registros() {
  return (
    <div>
      <form>
        <div>
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" />
        </div>
        <div>
          <label>Telefono</label>
          <input type="text" />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="text" />
        </div>
        <div>
          <label>Confirmar contraseña</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Registros;
