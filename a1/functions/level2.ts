/* READONLY - Rien à faire sur cette fonction */
export function userToolbox() {
  const makeADiscordUsername = (username: string) => {
    if (!username) return null;
    return `@${username.toLowerCase()}`;
  };
  const isAbove18ButNotAbove100 = (age: number) => {
    return age > 18 && age < 100;
  };

  return { makeADiscordUsername, isAbove18ButNotAbove100 };
}
