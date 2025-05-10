import { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel } from "@tanstack/react-table";
import FormDoctor from "@/pages/doctors/FormDoctor";
import DoctorDetail from "@/pages/doctors/DoctorDetail";
import columnsDoctors from "@/utils/doctorsColums";
import { getDoctorById, getDoctors } from "@/services/doctors.js";
import "./stylesheet/Doctors.css";

const Doctors = () => {
  const [doctor, setDoctor] = useState(null);
  const [doctors, setDoctors] = useState(null);
  const [activateForm, setActivateForm] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState(false);
  const [action, setAction] = useState('');
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 })

  useEffect(() => {
    if (!doctors) {
      setDoctors(getDoctors());
    }
  }, []);

  const handleAddDoctor = () => {
    setAction('add');
    setActivateForm(true);
  }

  const handleEditDoctor = (doctorId) => {
    setAction('edit');
    setDoctor(getDoctorById(doctors, doctorId));
    setActivateForm(true);
  }

  const handleViewDoctor = (doctorId) => {
    setDoctor(getDoctorById(doctors, doctorId));
    setDoctorDetails(true);
  }

  const table = useReactTable({
    data: doctors,
    columns: columnsDoctors,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })

  return (
    <section className="doctors-wrapper">
      <div className="doctors-container">
        <header className="doctors-header">
          <span>Doctores</span>
          <button className="doctors-btn" onClick={handleAddDoctor}>
            Agregar nuevo doctor
          </button>
        </header>

        { doctors && <>
          <article className="doctors-table-header">
            <select value={table.getState().pagination.pageSize}
                    onChange={(event) => table.setPageSize(Number(event.target.value))}>
              {[5, 10, 15].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Mostrar {pageSize}
                </option>
              ))}
            </select>

            <span className="doctors-table-pagination">
              <button className="doctors-table-btn_pagination"
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}>
                {'<'}
              </button>
              <span>{table.getState().pagination.pageIndex + 1}</span>
              <button className="doctors-table-btn_pagination"
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}>
                {'>'}
              </button>
            </span>
          </article>
        
          <table className="doctors-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(
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
                      {cell.column.id === 'estado' ? 
                        <article className="doctors-table-state_col">
                          <span className={`doctors-table-state_${cell.getValue() === 'Activo' ? 'active' : 'inactive'}`}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </span>
                          <span className='doctors-table-btns'>
                            <button className='doctors-table-btn' onClick = {() => handleViewDoctor(row.original.id)}>V</button>
                            <button className='doctors-table-btn' onClick = {() => handleEditDoctor(row.original.id)}>E</button>
                          </span>
                        </article> : 
                        flexRender(cell.column.columnDef.cell, cell.getContext())
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>}

        {activateForm && <>
          {action === 'add' && <FormDoctor doctors={doctors} 
                                           setDoctors={setDoctors} 
                                           setActivateForm={setActivateForm} />
          }
          {action === 'edit' && <FormDoctor doctors={doctors} 
                                            setDoctors={setDoctors} 
                                            setActivateForm={setActivateForm} 
                                            data={doctor} />
          }
        </>
        }

        {doctorDetails && <DoctorDetail doctor={doctor} setDoctorDetails={setDoctorDetails} />}
      </div>
    </section>
  );
};

export default Doctors;
