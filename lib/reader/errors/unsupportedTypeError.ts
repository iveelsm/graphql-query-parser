import * as util from 'util';

export default class UnsupportedTypeError extends Error {
  constructor(message: string = DEFAULT_MESSAGE, variables: Array<String> = []) {
    super(message);
    if(variables !== [] && message !== DEFAULT_MESSAGE) {
      this.message = util.format(message, variables);
    }
    Object.setPrototypeOf(this, UnsupportedTypeError.prototype);
  }
}

const DEFAULT_MESSAGE = "The type passed was unsupported";
