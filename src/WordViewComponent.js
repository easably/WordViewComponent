'use strict';

import alphabet from '../assets/chars-accordance.json'

export class CharComponent {
    constructor(symbol, state) {
        this.symbol = symbol;
        this.state = undefined;
        this.element = undefined;

        this.charClass = 'easy-lang-char'
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
    constructor(allCharacters = [], index = 0, language = 'english') {
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
        this._createAllCharacters();
        this._create();
    }

    getCurGroup() {
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

    openWord() {
        this.index = this.allCharacters.length;
        this._updateCharsState();
        return 1;
    }

    hiddenWord() {
        this.index = 0;
        this._updateCharsState();
        return this.getCurGroup();
    }

    _createAllCharacters() {
        this.allCharacters = this.allCharacters.map((character, i) => {
            let char;
            if (i < this.index) {
                char = new CharComponent(character, 'open')
            } else if (i == this.index) {
                char = new CharComponent(character, 'active')
            } else if (i > this.index) {
                char = new CharComponent(character, 'hidden')
            }
            return char;
        })
    }

    _create() {
        this.word = document.createElement('span');
        this.allCharacters.forEach(char => {
            this.word.appendChild(char.element)
        })
    }

    addClass(className) {
        this.word.classList.add(className);
    }

    get() {
        return this.word;
    }
}

export default class MultiWordViewComponent{
    constructor(allCharacters , index , language ){
        this.allCharacters = allCharacters;
        this.index = index;
        this.language = language;
        this.classList = [];

        this.wordComponents = [];
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

    hiddenWord(){
        let response;
        this.wordComponents.forEach(c=>{
            response = c.hiddenWord();
        })
        return response
    }

    addClass(className){
        this.classList.push(className);
        this.wordComponents.forEach(c=>{
            c.addClass(className)
        })
    }

    get(){
        let word = new WordViewComponent(this.allCharacters,this.index,this.language);
        this.classList.forEach(className=>{
            word.addClass(className);
        })
        this.wordComponents.push(word)
        return word.get();
    }
}