
class Dictionary{

    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, description) {
        if (!this.words.hasOwnProperty(word)) {
            this.words[word] = {word, description};
        }
    }
    remove (word){
      delete this.words[word];
    };

    get(key){
    return this.
        words[key].word + this.words[key].description;
    };

    showAllWords(){
        for (let key in this.words){
            console.log(`${key} - ${this.words[key].description}`)
        }

    };


}
const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
    "Веб-разработчик",
    "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
console.log(dictionary.get('Веб-разработчик'));


 dictionary.remove("JavaScript");
 dictionary.showAllWords();



class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);

    }
    add (word, description)
    {
        if (!this.words.hasOwnProperty(word)) {
            this.words[word] = {word, description, isDifficult:true};
        }
    }
}
const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
    "дилетант",
    "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
    "неологизм",
    "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
    "квант",
    "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();


