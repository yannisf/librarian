import Person from "./Person";
import { IBook } from "./Book";
import { Library, ILibrary } from "./Library";

let library: ILibrary = new Library();

library.checkout(1, 1);
library.checkout(2, 1);
library.checkout(1, 1);
library.checkout(3, 2);
library.checkout(3,1)
library.checkin(3)
library.checkout(3,1)
library.checkin(5)
library.checkin(1)
library.checkin(2)
library.checkin(3)
library.checkin(3)

