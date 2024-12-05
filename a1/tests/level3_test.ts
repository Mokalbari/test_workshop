import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import type { Book } from "../../lib/types.ts";
import { library } from "../functions/level3.ts";
/*
    Rémi a enfin décidé de faire son CRUD.
    Il a créé des tests mais a oublié d'implémenter les fonctions.

    Cette approche est très courante dans le monde du développement.
    En effet, il est très fréquent de réaliser des tests avant de commencer à coder.
    Cela permet de se mettre d'accord sur le comportement attendu et de coder de manière orientée test.

    Dans une optique TDD, on écrira nos tests avant de commencer à coder.
    Ici vous allez devoir implémenter les fonctions manquantes.
    Tips : attention aux paramètres et aux valeurs de retour de la fonction.

    Pour tester ce fichier :
    deno task level3

*/

describe("Find books in a library", () => {
  const books: Book[] = [
    {
      id: 1,
      title: "CSS Master",
      author: "Florian 12",
    },
    {
      id: 2,
      title: "The Putt Party Master",
      author: "Florian 12",
    },
    {
      id: 3,
      title: "Props Master",
      author: "Abdou",
    },
  ];

  const { findABookByID, findBooksByAuthor } = library(books);

  it("finds a book by its ID", () => {
    expect(findABookByID(1)).toBe("CSS Master");
  });

  it("returns null if the book is not found", () => {
    expect(findABookByID(4)).toBeNull();
  });

  it("finds books by author", () => {
    expect(findBooksByAuthor("Florian 12")).toEqual([
      "CSS Master",
      "The Putt Party Master",
    ]);
  });

  it("returns an empty array if no books are found", () => {
    expect(findBooksByAuthor("Le Père Tomate")).toEqual([]);
  });
});
