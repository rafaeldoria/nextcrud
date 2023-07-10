import Client from '../core/Client';
import { IconDelete, IconEdit } from './Icons';

interface TableProps {
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.selectedClient || props.deletedClient

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">#</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                <th className="text-left p-4">Email</th>
                {showActions ? <th className="text-center p-4">Action</th> : false}
            </tr>
        )
    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={i}
                className={`${i%2 === 0 ? 'bg-green-200': 'bg-green-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    <td className="text-left p-4">{client.email}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.selectedClient ? (
                    <button onClick={() => props.selectedClient?.(client)} className={`
                        flex justify-center items-center
                        text-blue-800 rounded-full p-2 m-1
                        hover:bg-sky-200 
                    `}>
                        {IconEdit}
                    </button>
                ) : false}

                {props.deletedClient ? (
                    <button onClick={() => props.deletedClient?.(client)} className={`
                        flex justify-center items-center
                        text-red-800 rounded-full p-2 m-1
                        hover:bg-stone-200 
                    `}>
                        {IconDelete}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-200
                bg-gradient-to-r from-green-600 to-emerald-900
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}