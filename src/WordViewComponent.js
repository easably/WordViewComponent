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
    }

    getCurGroup() {
        // return find group, that contains current character
        let curLang = this.alphabet[this.language];
        let curCharacter = this.allCharacters[this.index];
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
            if (this.index >= this.allCharacters.length) {
                return 1;
            }
            return this.getCurGroup();
        }
        return 0;
    }
}