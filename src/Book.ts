import Person from "./Person";

export interface IBook {
    id: number,
    author: string,
    title: string
}

export class Book implements IBook {

  constructor(
      public id: number,
      public author: string,
      public title: string,
      public available: boolean = true,
      public borrower: Person | null = null) {
  }

  toString(): string {
    return `Book[${this.id}: ${this.title} (${this.author})]`
  }

}
