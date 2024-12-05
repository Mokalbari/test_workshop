import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { library } from "../functions/level3.ts";

/*
    Rémi a enfin décidé de faire son CRUD.
    Il a créé des tests mais a oublié d'implémenter les fonctions.

    Cette approche est très courante dans le monde du développement.
    En effet, il est très fréquent de réaliser des tests avant de commencer à coder.
    Cela permet de se mettre d'accord sur le comportement attendu et de coder de manière orientée test.

    Dans une optique TDD, on écrira nos tests avant de commencer à coder.
    Ici vous allez devoir implémenter les fonctions manquantes.
    La fonction library doit être implémentée de manière à ce que les tests passent.
    Tips : attention aux paramètres et aux valeurs de retour de la fonction.
*/

describe("Find books in a library", () => {
  const books = [
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
      title: "CRUD Master",
      author: "Abdou",
    },
  ];

  const { findABookByID, findBooksByAuthor } = library(books);

  it("finds a book by its ID", () => {
    expect(findABookByID(1)).toBe("CSS Master");
  });

  it("finds books by author", () => {
    expect(findBooksByAuthor("Florian 12")).toBe([
      "CSS Master",
      "The Putt Party Master",
    ]);
  });
});
