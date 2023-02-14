import { HashManager } from "../services/HashManager";
import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {
    TABLE_NAME = ""
    
    printError = (error: any) => { console.log(error.sqlMessage || error.message) }

    createTables = async () =>{
        await BaseDatabase.connection.raw(`
            DROP TABLE IF EXISTS clients,admins,clients_address;

            CREATE TABLE IF NOT EXISTS clients(
                cpf VARCHAR(11) PRIMARY KEY,
                rg VARCHAR(10) UNIQUE NOT NULL,
                name VARCHAR(100) NOT NULL,
                birthdate DATE NOT NULL,
                phone VARCHAR(15) NOT NULL UNIQUE
            );

            CREATE TABLE IF NOT EXISTS clients_address(
                id VARCHAR(100) PRIMARY KEY,
                client_cpf VARCHAR(11) NOT NULL,
                FOREIGN KEY (client_cpf) REFERENCES clients(cpf),
                country VARCHAR(100) NOT NULL,
                state VARCHAR(100) NOT NULL,
                city VARCHAR(100) NOT NULL,
                zipcode VARCHAR(100) NOT NULL,
                street VARCHAR(100) NOT NULL,
                address_number INT NOT NULL,
                address_line_2 VARCHAR(100)
            );
            CREATE TABLE IF NOT EXISTS admins(
                id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL
            )
        `)
        .then(() => { console.log("Successfully created tables") })
        .catch(this.printError)     
    }

    insertData = async ()=>{0
        const hashManager = new HashManager()
        
        await BaseDatabase.connection.raw(`
            INSERT INTO clients (cpf,rg,name,birthdate,phone) VALUES ("22510171194","385139664","Débora Mariah Lopes","1993-02-11","+5511985694911");
            INSERT INTO clients (cpf,rg,name,birthdate,phone) VALUES ("25537887037","387889838","Mariana Alícia Rodrigues","1993-01-14","+5568988435274");
            INSERT INTO clients (cpf,rg,name,birthdate,phone) VALUES ("23552202200","171267072","Maria Manuela Farias","1993-01-23","+55995232770");
            INSERT INTO clients_address (id, client_cpf,country,state,city,zipcode,street,address_number) VALUES ("0973d628-ab21-11ed-afa1-0242ac120002", "22510171194","brazil","SP","São Paulo","08235770","Avenida Coronel Alves e Rocha Filho",704);
            INSERT INTO clients_address (id, client_cpf,country,state,city,zipcode,street,address_number, address_line_2) VALUES ("762db28e-ab21-11ed-afa1-0242ac120002", "25537887037","brazil","AC","Rio Branco","69901172","Travessa Dourado",415, "casa 102");
            INSERT INTO clients_address (id, client_cpf,country,state,city,zipcode,street,address_number) VALUES ("cd24283e-ab21-11ed-afa1-0242ac120002", "23552202200","brazil","CE","Fortaleza","60863180","Rua N",917); 
        `)
        .then(() => { console.log("successfully migrated tables") })
        .catch(this.printError)  
    }

    closeConnection = () => { BaseDatabase.connection.destroy() }
}

const migrations = new Migrations()

migrations
.createTables()
.then(migrations.insertData)
.finally(migrations.closeConnection)

