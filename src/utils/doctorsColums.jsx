import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('id', {
        cell: info => info.getValue(),
        header: () => <span>#</span>
    }),
    columnHelper.accessor('documento', {
        cell: info => info.getValue(),
        header: () => <span>Documento</span>
    }),
    columnHelper.accessor('nombres', {
        cell: info => info.getValue(),
        header: () => <span>Nombres</span>
    }),
    columnHelper.accessor('apellidos', {
        cell: info => info.getValue(),
        header: () => <span>Apellidos</span>
    }),
    columnHelper.accessor('email', {
        cell: info => info.getValue(),
        header: () => <span>Email</span>
    }),
    columnHelper.accessor('num_celular', {
        cell: info => info.getValue(),
        header: () => <span># Celular</span>
    }),
    columnHelper.accessor('ciudad', {
        cell: info => info.getValue(),
        header: () => <span>Ciudad</span>
    }),
    columnHelper.accessor('direccion', {
        cell: info => info.getValue(),
        header: () => <span>Dirección</span>
    }),
    columnHelper.accessor('estado', {
        cell: info => info.getValue(),
        header: () => <span>Estado</span>
    })
]

export default columns