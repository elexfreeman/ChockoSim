/* ядро системы */
import Core from './Sys/Core';
import { TrufelMaker } from "./Trufel/TrufelMaket";


const core = new Core();




const trm = new TrufelMaker(core, 5);
trm.fGetIngredientsToralPrice();