/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import Client from "../core/Client"
import ClientIRepository from "../core/ClientIRepository"
import CollectionClient from "../database/CollectionClient"
import useTableOrForm from "./useTableOrForm"

export default function useClients(){
    const repo: ClientIRepository = new CollectionClient()

    const { tableVisible, showForm, showTable } = useTableOrForm()

    const [client, setClient] = useState<Client>(Client.emptyClient())
    const [clients, setClients] = useState<Client[]>([])

    useEffect(getAll, [])
  
    function getAll(){
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function selectedClient(client: Client) {
        setClient(client)
        showForm()
    }
    
    async function deletedClient(client: Client) {
        await repo.delete(client)
        getAll()
    }

    async function saveClient(client: Client){
        await repo.save(client)
        getAll()
    }
    
    function newClient(){
        setClient(Client.emptyClient())
        showForm()
    }

    return {
        client,
        clients,
        getAll,
        selectedClient,
        saveClient,
        deletedClient,
        newClient,
        tableVisible,
        showTable
    }
}