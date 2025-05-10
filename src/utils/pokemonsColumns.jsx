import { createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('move', {
        cell: info => info.getValue(),
        header: () => <span>Movimiento</span>
    })
]

export default columns