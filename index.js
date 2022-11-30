import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
//const cliente2 = new Cliente();
//cliente2.nome = "Alice";
//cliente2.cpf = 88822233309;

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);

ContaCorrenteRicardo.depositar(500);

const ContaCorrente2 = new ContaCorrente(1001, cliente2);




ContaCorrenteRicardo.transferir(200, ContaCorrente2);

console.log(ContaCorrenteRicardo);
console.log(ContaCorrente2);
