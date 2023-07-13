import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {

  const {
    client,
    clients,
    selectedClient,
    deletedClient,
    newClient,
    saveClient,
    tableVisible,
    showTable
  } = useClients()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-green-900 to-emerald-900
      text-white
    `}>
      <Layout title="Cadastro">
        {tableVisible ? (
        <>
          <div className="flex justify-end">
            <Button className="mb-4" 
              onClick={newClient}
            >
              New Client
            </Button>
          </div>
          <Table 
            clients={clients}
            selectedClient={selectedClient}
            deletedClient={deletedClient}
          />
        </>
        ): (
          <Form 
            client={client}
            changeClient={saveClient}
            canceled={showTable}
          />
        )}
      </Layout>
    </div>
  )
}
