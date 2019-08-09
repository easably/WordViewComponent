
import WordViewComponent from '../../dist/WordViewComponent'
let input = [
    {
        words: [
            [0,4]
        ],
        text: 'Test kfolokor'
    },
    {
        words: [
            [4,4],
            [14,4]
        ],
        text: 'Olf Test opty Test plojh'
    }
]

function ready(){
    let wordComponent = new WordViewComponent('Test');
    wordComponent.addClass('test-class')
    let testBlock = document.querySelector('.test-block');
    input.forEach(i=>{
        let oneP = testBlock.appendChild(document.createElement('p'))
        let cursor = 0;
        i.words.forEach(w=>{
            oneP.insertAdjacentText('beforeend',i.text.substring(cursor,w[0]))
            cursor = w[0] + w[1];
            oneP.appendChild(wordComponent.get())
        })
        oneP.insertAdjacentText('beforeend',i.text.substring(cursor,i.text.length))
    })

    document.querySelector('.open-char').addEventListener('click',()=>{
            console.log(wordComponent.openChar())
    })
    document.querySelector('.open-word').addEventListener('click',()=>{
            console.log(wordComponent.openWord())
    })
    document.querySelector('.hidden-word').addEventListener('click',()=>{
            console.log(wordComponent.hiddenWord())
    })

}
document.addEventListener('DOMContentLoaded',ready)