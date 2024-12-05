import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { helloWorld } from "./hello-world.ts";

/**
 * // TEST SIMPLE //
 *
 * // Comprendre le fonctionnement d'un test
 *
 * Dans cet exemple, nous utilisons le runtime **Deno**,
 * qui propose un support natif pour les testsen JavaScript et TypeScript.
 * Cela dit, les principes de base restent applicables à d'autres bibliothèques comme Jest ou Jasmine.
 *
 * // Décryptage de la syntaxe :
 * it("description du test", () => { ... });
 *
 * 1. **Description** : La première étape est de décrire ce que vous testez.
 *    Cette description doit être en anglais et suffisamment claire pour être comprise sans lire le code.
 *
 * 2. **Assertion** : À l'intérieur de la fonction, vous écrivez des assertions pour vérifier le comportement attendu.
 *    Une assertion compare un résultat réel avec un résultat attendu en utilisant des méthodes comme `expect`.
 *    La liste des assertions disponible pour la librarie qu'on utilise : https://jsr.io/@std/expect
 *    On y trouve : toBe, .not.toBe, toBeFalsey, toBeNull, toThrow... La liste est longue.
 *
 *    Ici, le test vérifie si la fonction `helloWorld` retourne bien la chaîne `"Hello, World!"`.
 *    Si ce n'est pas le cas, le test échoue et retourne une erreur décrivant ce qui ne correspond pas.
 */

it("says hello world", () => {
  expect(helloWorld()).toBe("Hello World");
});

/**
 * // BATTERIE DE TESTS //
 * Parfois, on veut faire des tests très similaires ou faire passer une batterie de tests à une fonction
 * Pour tester ses limitations. Plutôt que d'aller dans VSCode et de rentrer plein de valeurs et de tester pour voir
 * si ça marche comme on veut, on peut créer des test qui vont faire ça pour nous.
 *
 * Dans ce cas, on créer une batterie de tests qui va se charger de jouer toute la série de tests
 * describe("ce que doit faire ma batterie de tests", () => {}) + une fonction qui va jouer tous les tests
 * Ensuite, on enveloppe tous les it dans ce describe.
 */

describe("the helloWorld function", () => {
  it("says hello world", () => {
    expect(helloWorld()).toBe("Hello World");
  });

  it("always return hello world in the good format", () => {
    expect(helloWorld()).not.toBe("hello world");
  });
});

/**
 * Pour lancer vos tests, ouvrez la console et écrivez :
 * deno test a1/hello-world_test.ts
 * 
 * Vous devriez voir :
 * 
 * running 2 tests from ./a1/hello-world_test.ts // 2 tests car 1 test individuel + 1 batterie de test
 * says hello world ... ok (0ms) // Ca c'est votre test individuel
 * the helloWorld function ... // Ca c'est la batterie de tests
 *      says hello world ... ok (1ms)
 *      always return hello world in the good format ... ok (0ms)
 * the helloWorld function ... ok (1ms)

ok | 2 passed (2 steps) | 0 failed (3ms) // les 2 tests sont ok 
 */
