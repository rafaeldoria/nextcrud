import Client from "./Client";

export default interface ClientIRepository {
    save(client: Client): Promise<Client>
    delete(client: Client): Promise<void>
    getAll(): Promise<Client[]>
}