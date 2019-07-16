import chai from "chai"
import {expect} from "chai"
import WordViewComponent from "../src/WordViewComponent"

chai.Assertion.addProperty('uppercase', function () {
    var obj = this._obj;
    new chai.Assertion(obj).to.be.a('string');
  
    this.assert(
        obj === obj.toUpperCase() // adapt as needed
      , 'expected #{this} to be all uppercase'    // error message when fail for normal
      , 'expected #{this} to not be all uppercase'  // error message when fail for negated
    );
  });

describe("WordViewComponent: ", () => {
    describe("Empty constructor", () => {
        const WVC = new WordViewComponent();
        it("allCharachters should be empty array", () => {
            expect(WVC.allCharacters).to.eql([])
        })
        it("index should be equally 0", () => {
            expect(WVC.index).to.equal(0)
        })
        it("language should be equally 'english'", () => {
            expect(WVC.language).to.equal('english')
        })
        it("currentGroup should be return false", () => {
            expect(WVC.getCurGroup()).to.equal(false)
        })
        it("openChar should be return 0", () => {
            expect(WVC.openChar()).to.equal(0)
        })
    })
    describe("Only string text on constructor", () => {
        const WVC = new WordViewComponent('tEsT');
        it("allCharachters should be array", () => {
            expect(WVC.allCharacters).to.eql(['t','E','s','T'])
        })
        it("index should be equally 0", () => {
            expect(WVC.index).to.equal(0)
        })
        it("language should be equally 'english'", () => {
            expect(WVC.language).to.equal('english')
        })
        it("currentGroup should be return group", () => {
            expect(WVC.getCurGroup()).to.equal('rtfg')
        })
        it("openChar should be return next group. if end - 1", () => {
            expect(WVC.openChar()).to.equal('EAIO')
            expect(WVC.openChar()).to.equal('qwsd')
            expect(WVC.openChar()).to.equal('RTFG')
            expect(WVC.openChar()).to.equal(1)
        })
    })
    describe("text in Array and index=2 on constructor", () => {
        const WVC = new WordViewComponent(['t','E','s','T'], 2);
        it("allCharachters should be array", () => {
            expect(WVC.allCharacters).to.eql(['t','E','s','T'])
        })
        it("index should be equally 2", () => {
            expect(WVC.index).to.equal(2)
        })
        it("language should be equally 'english'", () => {
            expect(WVC.language).to.equal('english')
        })
        it("currentGroup should be return group", () => {
            expect(WVC.getCurGroup()).to.equal('qwsd')
        })
        it("openChar should be return next group. if end - 1", () => {
            expect(WVC.openChar()).to.equal('RTFG')
            expect(WVC.openChar()).to.equal(1)
        })
    })
    describe("text and index=-5 and language=rus on constructor", () => {
        const WVC = new WordViewComponent('теСТ', -5, 'russian');
        it("allCharachters should be array", () => {
            expect(WVC.allCharacters).to.eql(['т','е','С','Т'])
        })
        it("index should be equally 0", () => {
            expect(WVC.index).to.equal(0)
        })
        it("language should be equally 'russian'", () => {
            expect(WVC.language).to.equal('russian')
        })
        it("currentGroup should be return group", () => {
            expect(WVC.getCurGroup()).to.equal('тцдш')
        })
        it("openChar should be return next group. if end - 1", () => {
            expect(WVC.openChar()).to.have.lengthOf(4)
            expect(WVC.openChar()).to.have.lengthOf(4)
            expect(WVC.openChar()).to.equal("ТЦДШ")
            expect(WVC.openChar()).to.equal(1)
        })
    })
    describe("text and unknown index and language on constructor", () => {
        const WVC = new WordViewComponent('engLish', undefined, 'belarussian');
        it("allCharachters should be array", () => {
            expect(WVC.allCharacters).to.eql(['e','n','g','L','i','s','h'])
        })
        it("index should be equally 0", () => {
            expect(WVC.index).to.equal(0)
        })
        it("language should be equally 'english'", () => {
            expect(WVC.language).to.equal('english')
        })
        it("currentGroup should be return group", () => {
            expect(WVC.getCurGroup()).to.equal('eaio')
        })
        it("openChar should be return next group. if end - 1", () => {
            expect(WVC.openChar()).to.have.lengthOf(4)
        })
    })



    describe("Test create new alpabet group", ()=>{
        const WVC = new WordViewComponent('BbLb');
        it('B', ()=>{
            expect(WVC.getCurGroup()).to.have.lengthOf(4).and.to.be.uppercase;
        })
        it('b', ()=>{
            expect(WVC.openChar()).to.have.lengthOf(4).and.to.not.be.uppercase;
        })
    })
    describe("Test _randomSortStr" , ()=>{
        const WVC = new WordViewComponent();
        it('String: qwer', ()=>{
            let rand =WVC._randomSortStr('qwer')
            expect(rand).to.have.lengthOf(4).and.to.not.be.uppercase;
            console.log(rand)
        })
    })
})