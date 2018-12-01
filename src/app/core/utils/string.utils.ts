export class StringUtils {
  private results = [];
  private string: string = '';

  constructor() {}
  
  private findBetween(text1: string, text2: string) {
    if (this.string.indexOf(text1) < 0 || this.string.indexOf(text2) < 0)
      return false;
    let SP = this.string.indexOf(text1) + text1.length;
    let s1 = this.string.substr(0, SP);
    let s2 = this.string.substr(SP);
    let TP = s1.length + s2.indexOf(text2);
    return this.string.substring(SP, TP);
  }

  private removeBetween(sub1: string, sub2: string) {
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0)
      return false;
    let removal = sub1 + this.findBetween(sub1, sub2) + sub2;
    this.string = this.string.replace(removal, '');
  }

  private getAllResults(sub1: string, sub2: string) {
    // first check to see if we do have both substrings
    if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;

    // find one result
    let result = this.findBetween(sub1, sub2);
    // push it to the results array
    this.results.push(result);
    // remove the most recently found one from the string
    this.removeBetween(sub1, sub2);

    // if there's more substrings
    if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
      this.getAllResults(sub1, sub2);
    } else return;
  }

  getBetween(string: string, sub1: string, sub2: string) {
    this.results = [];
    this.string = string;
    this.getAllResults(sub1, sub2);
    return this.results;
  }
}
