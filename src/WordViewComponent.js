'use strict';

import alphabet from '../assets/chars-accordance.json'

export default class WordViewComponent {

    constructor(allCharacters = [], index = 0, language = 'english') {
        // set props, set alphabet using language
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

        this.uniqueClass = 'easy-lang-word__';
        this.charClass = this.uniqueClass + 'char'
        this.openClass = this.uniqueClass + 'visible';
        this.activeClass = this.uniqueClass + 'active';
        this.hiddenClass = this.uniqueClass + 'hidden';
        this.hiddenSymbol = '•';

        this.word = undefined;
        this._createAllCharacters();
        this._create();
    }



    getCurGroup() {
        let curLang = this.alphabet[this.language];
        let curCharacter = this.allCharacters[this.index].char;
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

    _updateCharsState(){
        this.allCharacters.forEach((c,i)=>{
            if (i < this.index) {
                this._setStateOnChar(c,'open');
            } else if (i == this.index) {
                this._setStateOnChar(c,'active')
            } else if (i > this.index) {
                this._setStateOnChar(c,'hidden')
            }
        })
    }

    _setStateOnChar(character, state) {
        if (character.state === state) return;
        character.element.classList.remove(this.activeClass, this.openClass, this.hiddenClass);
        character.state = state;
        switch (state) {
            case 'open':
                character.element.classList.add(this.openClass);
                character.element.textContent = character.char;
                break;
            case 'hidden':
                character.element.classList.add(this.hiddenClass);
                character.element.textContent = this.hiddenSymbol;
                break;
            case 'active':
                character.element.classList.add(this.activeClass);
                character.element.textContent = this.hiddenSymbol;
                break;
        }
    }

    openWord(){
        this.index = this.allCharacters.length;
        this._updateCharsState();
        return 1;
    }

    hiddenWord(){
        this.index = 0;
        this._updateCharsState();
        return this.getCurGroup();
    }

    _createAllCharacters() {
        this.allCharacters = this.allCharacters.map((character, i) => {
            let element = document.createElement('span');
            let state = undefined;
            element.classList.add(this.charClass)
            if (i < this.index) {
                element.textContent = character;
                element.classList.add(this.openClass)
                state = 'open';
            } else if (i == this.index) {
                element.textContent = this.hiddenSymbol;
                element.classList.add(this.activeClass)
                state = 'active';
            } else if (i > this.index) {
                element.textContent = this.hiddenSymbol;
                element.classList.add(this.hiddenClass)
                state = 'hidden';
            }
            return {
                element: element,
                char: character,
                state: state
            }
        })
    }

    _create() {
        this.word = document.createElement('span');
        this.allCharacters.forEach(character => {
            this.word.appendChild(character.element)
        })
    }

    addClass(className) {
        this.word.classList.add(className);
    }

    get() {
        return this.word;
    }
}