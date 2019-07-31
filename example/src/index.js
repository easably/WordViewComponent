
import WordViewComponent from '../../dist/WordViewComponent'
let input = [
    {
        words: [
            [0,4]
        ],
        text: 'Test text'
    },
    {
        words: [
            [5,4],
            [15,4]
        ],
        text: 'text Test text Test'
    }
]




function ready(){
    let wordViewComponent = new WordViewComponent('Test');
    function render(){
        let newHtml = '';
            input.forEach(e=>{
                newHtml+='<p>'+e.text.substring(0,e.words[0][0])+wordViewComponent.render()+e.text.substring(e.words[0][0]+e.words[0][1],e.text.length)+'</p>';
            })
        document.querySelector('.test-block').innerHTML = newHtml;
    }
    render();
    document.querySelector('.open-char').addEventListener('click',()=>{
        wordViewComponent.openChar();
        render();
    })

}
document.addEventListener('DOMContentLoaded',ready)