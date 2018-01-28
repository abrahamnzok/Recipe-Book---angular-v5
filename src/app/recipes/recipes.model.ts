
export class Recipes {

  private _name: string;
  private _description: string;
  private _src: string;

  constructor(name: string, description: string, src: string) {
    this._name = name;
    this._description = description;
    this._src = src;
  }

  getName(): string {
    return this._name;
  }

  setName(value: string) {
    this._name = value;
  }
  getSrc(): string {
    return this._src;
  }

  setSrc(value: string) {
    this._src = value;
  }
  getDescription(): string {
    return this._description;
  }

  setDescription(value: string) {
    this._description = value;
  }
}
