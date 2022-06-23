class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }


  
  /**
   * Creates token objects for player
   * @param     {number}    num - Number of token objects to be created
   * @returns   {Array}     An array of the newly created token objects
   */
  createTokens(num) {
    const tokens = [];
    for (let i = 0; i < num.length; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }


  /**
   * Gets the active token ny returning the first token in the array of unused tokens
   * @return {array} Array of unused tokens.
   */
  get unusedTokens() {
    return this.tokens.filter((token) => !token.dropped);
  }
  /**
   * Gets the active token byy returning the first token in the array of unused tokens
   * @return {Object} First token object in the array of unused tokens.
   */

  get activeToken() {
    return this.unusedTokens[0];
  }
}
