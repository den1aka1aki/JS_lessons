class Dictionary{
    #name;
    #words;
    constructor(name) {

        this.#name = name;
        this.#words = {};
    }
    get mainName(){
        return this.#name;
    }
    // set setMainName (#name){
    //     return this.#name;
    // }
    get allWords(){
        return this.#words;
    }
    // addNewWord(wordKey, worObj){
    //     this.#words.;
    // }
    add(word, description) {
        if (!this.mainName.hasOwnProperty(word)) {
            this.allWords[word] = {word, description};
        }
    }
    remove (word){
        delete this.allWords[word];
    };

    get(word){
        return this.allWords[word];
    };

    showAllWords(){
        for (let key in this.allWords){
            console.log(`${key} - ${this.allWords[key].description}`)
        }

    };


}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
    "Веб-разработчик",
    "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);



 //dictionary.remove("JavaScript");
console.log(dictionary.showAllWords());



class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);

    }
    add (word, description)
    {
        if (!this.allWords.hasOwnProperty(word)) {
            this.allWords[word] = {word, description, isDifficult:true};
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

console.log(hardWordsDictionary.showAllWords());



