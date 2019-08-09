
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
    let wordComponents = [];
    let testBlock = document.querySelector('.test-block');
    input.forEach(i=>{
        let oneP = testBlock.appendChild(document.createElement('p'))
        let cursor = 0;
        i.words.forEach(w=>{
            oneP.insertAdjacentText('beforeend',i.text.substring(cursor,w[0]))
            cursor = w[0] + w[1];
            let wordComponent = new WordViewComponent(i.text.substr(w[0],w[1]));
            wordComponents.push(wordComponent)
            oneP.appendChild(wordComponent.get())
        })
        oneP.insertAdjacentText('beforeend',i.text.substring(cursor,i.text.length))
    })

    document.querySelector('.open-char').addEventListener('click',()=>{
        wordComponents.forEach(c=>{
            console.log(c.openChar())
        })
    })
    document.querySelector('.open-word').addEventListener('click',()=>{
        wordComponents.forEach(c=>{
            console.log(c.openWord())
        })
    })
    document.querySelector('.hidden-word').addEventListener('click',()=>{
        wordComponents.forEach(c=>{
            console.log(c.hiddenWord())
        })
    })

}
document.addEventListener('DOMContentLoaded',ready)