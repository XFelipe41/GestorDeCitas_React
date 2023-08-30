import Pasiente from "./Pasiente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto scrollbar-hide ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-gray-200">
            Listado Pacientes{" "}
          </h2>
          <p className="text-xl mt-5 mb-10 text-center text-gray-200">
            Administra tus {""}
            <span className="text-lime-400 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Pasiente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-gray-200">
            No hay pacientes{" "}
          </h2>
          <p className="text-xl mt-5 mb-10 text-center text-gray-200">
            Comienza agregando pacientes {""}
            <span className="text-lime-400 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
