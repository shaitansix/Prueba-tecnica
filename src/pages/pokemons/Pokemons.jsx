import { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel, flexRender, getSortedRowModel } from "@tanstack/react-table";
import { IconEye, IconSortAZ, IconSortZA } from "@tabler/icons-react";
import PokemonDetail from "@/pages/pokemons/PokemonDetail";
import columnsPokemons from "@/utils/pokemonsColumns";
import { getMoves, getInfo } from "@/services/pokemons.js";
import "./stylesheet/Pokemons.css";

const Pokemons = () => {
  const [sorting, setSorting] = useState([]);
  const [info, setInfo] = useState(null);
  const [movements, setMovements] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setInfo(await getInfo(5));
      setMovements(await getMoves(5));
    }

    getData();
  }, []);

  const handleViewInfo = () => {
    setPokemonDetails(true);
  }

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
        <header className="pokemons-header">
          <span className="pokemons-title">Charmeleon</span>
          <button className="pokemons-btn" onClick={handleViewInfo}>
            <IconEye size={20} stroke={1.2} />
          </button>
        </header>
        {movements && 
          <article className="pokemons-table-wrapper">
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
                          asc: <IconSortAZ size={20} stroke={1.2} />,
                          desc: <IconSortZA size={20} stroke={1.2} />,
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
          </article>
        }

        {pokemonDetails && <PokemonDetail pokemon={info} setPokemonDetails={setPokemonDetails} />}
      </div>
    </section>
  );
};

export default Pokemons;
