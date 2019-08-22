'use strict';

import alphabet from '../assets/chars-accordance.json'

export class CharComponent {
    constructor(symbol, state, charClass) {
        this.symbol = symbol;
        this.state = undefined;
        this.element = undefined;

        this.charClass = charClass || 'char'
        this.openClass = this.charClass + '__' + 'visible';
        this.activeClass = this.charClass + '__' + 'active';
        this.hiddenClass = this.charClass + '__' + 'hidden';
        this.hiddenSymbol = '•';

        this._create();
        this.setStateOnChar(state);
    }

    _create() {
        this.element = document.createElement('span');
        this.element.classList.add(this.charClass);
    }

    setStateOnChar(state = this.state) {
        if (this.state === state) return;
        this.element.classList.remove(this.activeClass, this.openClass, this.hiddenClass);
        this.state = state;
        switch (state) {
            case 'open':
                this.element.classList.add(this.openClass);
                this.element.textContent = this.symbol;
                break;
            case 'hidden':
                this.element.classList.add(this.hiddenClass);
                this.element.textContent = this.hiddenSymbol;
                break;
            case 'active':
                this.element.classList.add(this.activeClass);
                this.element.textContent = this.hiddenSymbol;
                break;
        }
    }
}

export class WordViewComponent {
    constructor(allCharacters = [], index = 0, language = 'english', classes = {char:'', word:''}) {
        this.alphabet = alphabet;
        if (typeof allCharacters === 'string') {
            this.allCharacters = allCharacters.split('');
        } else if (typeof allCharacters === 'object') {
            this.allCharacters = allCharacters;
        } else {
            this.allCharacters = [];
        }

        this.index = index >= 0 ? index : 0;
        this.language = this.alphabet[language] ? language : 'english';

        this.word = undefined;
        this._createAllCharacters(classes.char);
        this._create(classes.word);
    }

    getCurSymbol() {
        if(!this.allCharacters[this.index]) return;
        return this.allCharacters[this.index].symbol;
    }

    getCurGroup() {
        if(!this.allCharacters[this.index]) return;
        let curLang = this.alphabet[this.language];
        let curCharacter = this.allCharacters[this.index].symbol;
        if (!curLang || !curCharacter) {
            return false
        }
        let upperCase = curCharacter === curCharacter.toUpperCase();
        let curGroup = curLang.groups.filter(g => {
            return g.toUpperCase().indexOf(curCharacter.toUpperCase()) !== -1
        })[0];
        if (!curGroup) {
            curGroup = this._createNewGroup(curLang.alphabet, curCharacter);
        }
        return upperCase ? curGroup.toUpperCase() : curGroup.toLowerCase();
    }

    _createNewGroup(str, curCharacter) {
        let curGroup = curCharacter;
        for (let i = 0; i < 3;) {
            let rand = this._chooseRandomCharFromString(str);
            if (curGroup.split('').every(e => e.toUpperCase() !== rand.toUpperCase())) {
                curGroup += rand;
                i++;
            }
        }
        return this._randomSortStr(curGroup);
    }

    _chooseRandomCharFromString(str) {
        return str.charAt(Math.floor(Math.random() * str.length));
    }

    _randomSortStr(str) {
        function compareRandom(a, b) {
            return Math.random() - 0.5;
        }
        let arr = str.split('');
        arr.sort(compareRandom);
        return arr.join('');
    }

    openChar() {
        if (this.allCharacters[this.index]) {
            this.index++;
            this._updateCharsState();
            if (this.index >= this.allCharacters.length) {
                return 1;
            }
            return this.getCurGroup();
        }
        return 0;
    }

    _updateCharsState() {
        this.allCharacters.forEach((char, i) => {
            if (i < this.index) {
                char.setStateOnChar('open');
            } else if (i == this.index) {
                char.setStateOnChar('active')
            } else if (i > this.index) {
                char.setStateOnChar('hidden')
            }
        })
    }

    setIndexOnWord(index){
        this.index = index;
        this._updateCharsState();
    }

    openWord() {
        this.setIndexOnWord(this.allCharacters.length);
        return 1;
    }

    hiddenWord() {
        this.setIndexOnWord(0);
        return this.getCurGroup();
    }

    _createAllCharacters(charClass) {
        this.allCharacters = this.allCharacters.map((character, i) => {
            let char;
            if (i < this.index) {
                char = new CharComponent(character, 'open', charClass)
            } else if (i == this.index) {
                char = new CharComponent(character, 'active', charClass)
            } else if (i > this.index) {
                char = new CharComponent(character, 'hidden', charClass)
            }
            return char;
        })
    }

    _create(className) {
        this.word = document.createElement('span');
        this.word.className = className;
        this.allCharacters.forEach(char => {
            this.word.appendChild(char.element)
        })
    }

    get() {
        return this.word;
    }
}

export default class MultiWordViewComponent{
    constructor(allCharacters = [], index = 0, language = 'english', classes = {char:'',word:''}){
        this.allCharacters = allCharacters;
        this.index = index;
        this.language = language;
        this.classes= classes;
        this.wordComponents = [];
    }

    getCurSymbol(){
        return this.wordComponents[0].getCurSymbol();
    }

    getCurGroup(){
        return this.wordComponents[0].getCurGroup();
    }

    openChar() {
        let response;
        this.wordComponents.forEach(c=>{
            response = c.openChar();
        })
        return response
    }

    openWord(){
        let response;
        this.wordComponents.forEach(c=>{
            response = c.openWord();
        })
        return response
    }

    setIndexOnWord(i){
        let response;
        this.wordComponents.forEach(c=>{
            response = c.setIndexOnWord(i);
        })
        return response
    }

    hiddenWord(){
        let response;
        this.wordComponents.forEach(c=>{
            response = c.hiddenWord();
        })
        return response
    }

    get(){
        let word = new WordViewComponent(this.allCharacters,this.index,this.language,this.classes);
        this.wordComponents.push(word)
        return word.get();
    }
}