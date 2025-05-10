import { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from "@tanstack/react-table";
import columnsPokemons from "@/utils/pokemonsColumns";
import { getMoves } from "@/services/pokemons.js";
import "./stylesheet/Pokemons.css";

const Pokemons = () => {
  const [sorting, setSorting] = useState([]);
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setMovements(await getMoves(5));
    }

    getData();
  }, []);

  const table = useReactTable({
    data: movements,
    columns: columnsPokemons,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <section className="pokemons-wrapper">
      <div className="pokemons-container">
        <header className="pokemons-title">Charmeleon</header>
        {movements.length === 103 && 
          <table className="pokemons-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                      {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted()] ?? null}
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
          </table>
        }
      </div>
    </section>
  );
};

export default Pokemons;
