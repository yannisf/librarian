import * as _ from "lodash";
import { Book, IBook } from "./Book";
import Person from "./Person";
import * as jsonBooks from "./data/books.json";
import * as jsonPersons from "./data/persons.json";

export interface ILibrary {
  checkin(bookId: number): void;
  checkout(bookId: number, personId: number): IBook | undefined;
}

export class Library implements ILibrary {
  private books: Book[];
  private persons: Person[];

  constructor() {
    this.books = _.map(jsonBooks, r => new Book(r.id, r.author, r.title));
    console.info(`Loaded [${this.books.length}] books into registry`);
    this.persons = jsonPersons;
    console.info(`Loaded [${this.persons.length}] persons into registry`);
  }

  checkin(bookId: number) {
    let book: Book | undefined = this.findBook(bookId);
    if (book) {
        if (!book.available) {
            console.info(`Returning ${book}`);
            book.available = true;
            book.borrower = null;
        } else {
            console.warn(`${book} already available`);
        }
    }
  }

  checkout(bookId: number, personId: number): IBook | undefined {
    let person: Person | undefined = this.findPerson(personId);
    if (!person) {
        throw `Person[id:${personId}] not found`
    }

    let book: Book | undefined = this.findBook(bookId);
    if (book) {
      if (book.available) {
        console.info(`${person.name} is checking out ${book.toString()}`);
        return this.processCheckout(person, book);
      } else {
        console.warn(`${book.toString()} is not available (checked out by ${_.get(book, 'borrower.name')})`);
      }
    } else {
      console.warn(`Book[id:${bookId}] not found`);
    }
  }

  private findBook(bookId: number): Book | undefined {
    let book = _.find(this.books, b => b.id == bookId);
    if (!book) {
      console.warn(`Book[id:${bookId}] not found`);
    } else {
      return book;
    }
  }

  private findPerson(personId: number): Person | undefined {
    let person = _.find(this.persons, p => p.id == personId);
    if (!person) {
      console.warn(`Person[id:${personId}] not found`);
    } else {
      return person;
    }
  }

  private processCheckout(person: Person, book: Book) {
    book.available = false;
    book.borrower = person;
    return _.cloneDeep(_.pick(book, ["id", "title", "author"]));
  }
}
