import { useState, useEffect, use } from "react";
import { useReactTable } from "@tanstack/react-table";
import {
  getDoctorById,
  getDoctors,
  addDoctor,
  updateDoctorById,
  deleteDoctorById,
} from "@/services/doctors.js";
import "./stylesheet/Doctors.css";

const Doctors = () => {
  const [doctor, setDoctor] = useState(null);
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    if (!doctors) {
      setDoctors(getDoctors());
    }
  }, []);

  //   const columnHelper = createColumnHelper()

  // const columns = [
  //   columnHelper.accessor('id', {
  //     cell: info => info.getValue(),
  //     header: () => <span>#</span>
  //   }),
  //   columnHelper.accessor('id', {
  //     cell: info => info.getValue(),
  //     header: () => <span>#</span>
  //   }),
  //   columnHelper.accessor('id', {
  //     cell: info => info.getValue(),
  //     header: () => <span>#</span>
  //   }),
  //   columnHelper.accessor('id', {
  //     cell: info => info.getValue(),
  //     header: () => <span>#</span>
  //   }),
  //   columnHelper.accessor('id', {
  //     cell: info => info.getValue(),
  //     header: () => <span>#</span>
  //   }),
  // ]

  //   const table = useReactTable({
  //     data: doctors,
  //     columns,
  //     getCoreRowModel: getCoreRowModel(),
  //   })

  return (
    <section className="doctors-wrapper">
      <div className="doctors-container">
        <header className="doctors-header">
          <span>Doctores</span>
          <button className="doctors-btn">Agregar nuevo doctor</button>
        </header>

        {doctors?.map((doctor) => (
          <span
            key={`doctor-${doctor.id}`}
          >{`Nombres: ${doctor.nombres}`}</span>
        ))}

        {/* {console.log(getDoctorById(doctors, 3))}
        {console.log(updateDoctorById(doctors, 3, { id: 30 }))}
        {console.log(deleteDoctorById(doctors, 1))}
        {console.log(
          addDoctor(doctors, {
            id: 1,
            documento: "123456789",
            nombres: "Ana",
            apellidos: "García",
            email: "ana.garcia@email.com",
            num_celular: "3001234567",
            ciudad: "Bogotá",
            direccion: "Calle 1 # 2-3",
            estado: "Activo",
          })
        )} */}
        {/* <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </section>
  );
};

export default Doctors;
