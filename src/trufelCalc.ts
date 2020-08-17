/* ядро системы */
import Core from './Sys/Core';
import { TrufelMaker } from "./Trufel/TrufelMaket";
import { TrufelVozd } from './Trufel/TrufelVozd';


const core = new Core();




const trm = new TrufelMaker(core, 5);

const tv = new TrufelVozd(core);
console.log(tv.fGetMassaPercent());
console.log(tv.fGetMassa());
tv.fSetMassa(20);
console.log(tv.fGetMassa());
console.log(tv.fPrintIngredientsTotalPrice());

