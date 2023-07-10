import Button from "../components/Button";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";

export default function Home() {

  const clients = [
    new Client('Cláudio', 25, 'claudio@example.com', '1'),
    new Client('Edvan', 27, 'edvan@example.com', '2'),
    new Client('Charles', 35, 'charles@example.com', '3'),
    new Client('João', 24, 'charles@example.com', '4'),
  ]

  function selectedClient(client: Client) {
    console.log(client.name)
    // console.log(client.email)
  }
  
  function deletedClient(client: Client) {
    console.log(`excluir: ${client.id}`)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-green-900 to-emerald-900
      text-white
    `}>
      <Layout title="Cadastro">
        <div className="flex justify-end">
          <Button className="mb-4">
            New Client
          </Button>
        </div>
        <Table 
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        ></Table>
      </Layout>
    </div>
  )
}
