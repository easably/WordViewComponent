'use strict';

import alphabet from '../assets/chars-accordance.json'

export default class WordViewComponent {

    // allCharacters
    // index
    // alphabet
    // groups
    // language 
    
    constructor( allCharacters = [], index = 0, language = 'english') {
        // set props, set alphabet using language
        this.alphabet = alphabet;
        if (typeof allCharacters === 'string'){
            this.allCharacters = allCharacters.split('');
        }else if(typeof allCharacters === 'object'){
            this.allCharacters = allCharacters;
        }else {
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
        // return find group, that contains current character
        let curLang = this.alphabet[this.language];
        let curCharacter = this.allCharacters[this.index].char;
        if (!curLang || !curCharacter){
            return false
        }
        let upperCase = curCharacter === curCharacter.toUpperCase();
        let curGroup = curLang.groups.filter(g=>{
            return g.toUpperCase().indexOf(curCharacter.toUpperCase()) !== -1
        })[0];
        if (!curGroup){
            curGroup = this._createNewGroup(curLang.alphabet, curCharacter);
        }
        return upperCase ? curGroup.toUpperCase() : curGroup.toLowerCase();
    }
    
    _createNewGroup(str, curCharacter){
        let curGroup = curCharacter;
        for (let i = 0; i < 3;){
            let rand = this._chooseRandomCharFromString(str);
            if (curGroup.split('').every(e=>e.toUpperCase() !== rand.toUpperCase())){
                curGroup += rand;
                i++;
            }
        }
        return this._randomSortStr(curGroup);
    }

    _chooseRandomCharFromString(str){
        return str.charAt(Math.floor(Math.random()*str.length));
    }

    _randomSortStr(str){
        function compareRandom(a,b){
            return Math.random() - 0.5;
        }
        let arr = str.split('');
        arr.sort(compareRandom);
        return arr.join('');
    }

    openChar() {
        if (this.allCharacters[this.index]) {
            this.index++;
            this._openChar(this.index);
            if (this.index >= this.allCharacters.length) {
                return 1;
            }
            return this.getCurGroup();
        }
        return 0;
    }

    _openChar(i = this.index){
        let cur = this.allCharacters[i];
        let prev = this.allCharacters[i-1];
        if (prev){
            prev.element.classList.remove(this.activeClass);
            prev.element.classList.add(this.openClass);
            prev.element.textContent = prev.char;
        }
        if (cur){
            cur.element.classList.remove(this.hiddenClass);
            cur.element.classList.add(this.activeClass);
        }
    }

    _createAllCharacters(){
        this.allCharacters = this.allCharacters.map((character, i)=>{
            let element = document.createElement('span');
            element.classList.add(this.charClass)
            if (i<this.index){
                element.textContent = character;
                element.classList.add(this.openClass)
            }else if (i==this.index){
                element.textContent = this.hiddenSymbol;
                element.classList.add(this.activeClass)
            }else if (i>this.index){
                element.textContent = this.hiddenSymbol;
                element.classList.add(this.hiddenClass)
            }
            return {element: element, char: character}
        })
    }

    _create(){
        this.word = document.createElement('span');
        this.allCharacters.forEach(character=>{
            this.word.appendChild(character.element)
        })
    }

    addClass(className){
        this.word.classList.add(className);
    }

    get(){
        return this.word;        
    }
}