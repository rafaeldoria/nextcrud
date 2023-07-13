import {
    QueryDocumentSnapshot,
    SnapshotOptions,
    collection,
    doc,
    deleteDoc,
    setDoc,
    addDoc,
    getDoc,
    getDocs
} from "firebase/firestore";
import { db } from "./config"
import Client from "../core/Client"
import ClientIRepository from "../core/ClientIRepository"

export default class CollectionClient implements ClientIRepository{
     
    #conversor = {
        toFirestore(client: Client){
            return {
                name: client.name,
                age: client.age,
                email: client.email,
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Client{
            const dados = snapshot.data(options);
            return new Client(dados.name, dados.age, dados.email, snapshot.id)
        }
    }

    async save(client: Client): Promise<Client> {
        if (client?.id) {
            await setDoc(doc(this.collection(), client.id), client)

            return client
        } else {
            const docRef = await addDoc(this.collection(), client)
            const doc = await getDoc(docRef)

            return doc.data()
        }
    }
    
    async delete(client: Client): Promise<void> {
        return deleteDoc(doc(this.collection(), client.id))
    }
    
    async getAll(): Promise<Client[]> {
        const queryDoc = await getDocs(this.collection())
        return queryDoc.docs.map(doc => doc.data()) ?? []
    }

    private collection() {
        return collection(db, 'clients').withConverter(this.#conversor)
    }
}