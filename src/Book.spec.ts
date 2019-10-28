import { Book } from './Book';
import { expect } from 'chai';
import 'mocha';

describe('Book construction', () => {

  it('optional values should not be required', () => {
    const book = new Book(1, "J.D. Salinger", "Catcher in the rye");
    expect(book.id).to.equal(1);
    expect(book.title).to.equal("Catcher in the rye");
    expect(book.author).to.equal("J.D. Salinger");
  });

  it('optional values should have the expected values', () => {
    const book = new Book(1, "J.D. Salinger", "Catcher in the rye");
    expect(book.available).to.equal(true);
    expect(book.borrower).to.equal(null);
  });

  it('optional values should be overriden', () => {
    const book = new Book(1, "J.D. Salinger", "Catcher in the rye", false, {id: 1, name: "Name"});
    expect(book.available).to.equal(false);
    // expect(book.borrower).to.null;
  });



});
