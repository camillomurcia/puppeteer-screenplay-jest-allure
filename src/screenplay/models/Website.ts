export class Website {
  nameWebsite!: string;
  urlWebsite!: string;

  setNameWebsite(nameWebsite: string) {
    this.nameWebsite = nameWebsite;
  }

  setUrlWebsite(urlWebsite: string) {
    this.urlWebsite = urlWebsite;
  }

  getNameWebsite(): string {
    return this.nameWebsite;
  }

  getUrlWebsite(): string {
    return this.urlWebsite;
  }

  toObject() {
    return {
      nameWebsite: this.nameWebsite,
      urlWebsite: this.urlWebsite
    };
  }

  serialize() {
    return JSON.stringify(this.toObject());
  }

  static fromJSON(serialized: string): Website {
    const website: ReturnType<Website['toObject']> = JSON.parse(serialized);
    const objWebsite: Website = new Website();
    objWebsite.setNameWebsite(website.nameWebsite);
    objWebsite.setUrlWebsite(website.urlWebsite);
    return objWebsite;
  }
}
