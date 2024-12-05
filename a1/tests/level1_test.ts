import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { add } from "../functions/level1.ts";

/**
 * // Ecritures de tests pour les fonctions mathématiques
 *
 * Pour chaque fonction mathématique, vous devrez :
 * - Ecrire au moins 3 tests
 * - Décrire ce que vous testez
 * - Écrire des assertions pour vérifier le comportement attendu
 *
 * Pensez à tester les valeurs limites, les valeurs négatives, les valeurs spéciales (division par 0, par ex.)
 * Un test doit couvrir tous les cas de figure.
 *
 *
 * POUR TESTER CE FICHIER :
 * deno task level1
 *
 */

describe("Math operations", () => {
  it("adds two numbers together", () => {
    expect(add(2, 3)).toBe(5);
  });

  /**
   * vos tests ici
   */
});
