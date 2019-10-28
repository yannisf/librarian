import Person from "./Person";
import {Library, ILibrary} from "./Library";

let library: ILibrary = new Library()

library.checkout(1, 1);
library.checkout(2, 1);
library.checkout(1, 1);
