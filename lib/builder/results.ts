

export default class Results {
  private result: string;
  private currentTemplates: CurrentTemplates;

  constructor() {
    this.result = "";
    this.currentTemplates = {
      query: new Set(),
      fragment: new Set()
    }
  }

  addQuery(identifier:string, query: string): Results {
    if(!this.currentTemplates.query.has(identifier)) {
      this.currentTemplates.query.add(identifier);
      this.result += query += "\n\n";
    }
    return this;
  }

  addFragment(identifier: string, fragment: string): Results {
    if(!this.currentTemplates.fragment.has(identifier)) {
      this.currentTemplates.fragment.add(identifier);
      this.result += fragment += "\n\n";
    }
    return this;
  }

  build(): string {
    return this.result;
  }
}

interface CurrentTemplates {
  query: Set<string>,
  fragment: Set<string>
}