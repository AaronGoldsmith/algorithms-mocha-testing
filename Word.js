modules.export = class Word{
  constructor(word){
    this.word = word;
  }
  reverse(){
    return this._reverse(this.word);
  }
  _reverse(w){
    let str = ""
    if(w.length()<1){
      return w;
    }
    str+=this.getLast();
    return this._reverse(w.split(w.length-1,1))

  }

}