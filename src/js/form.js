import {validateNotEmpty} from './validate';
import {sendToServer} from './sendToServer';
import { markAsError, unmarkAsError } from './inputError';

function submit(e, form, input){
    e.preventDefault();
    const searchString = input.value;
    const isValid = validateNotEmpty(searchString);

    if(!isValid) {
        markAsError(input);
        return;
    }
    
    const data = {
        search: searchString
    };

    sendToServer(data)
    .then((resp)=>{
        alert(`Вы искали ${resp.search}`)
    })
    .catch((e)=>{
        alert(`Вы искали ${data.search}`)
        //alert('Ошибка')
    });
}

export default function(){
    const form = document.getElementById('form-js');
    const input = document.getElementById('search-string-js');    

    form.addEventListener('submit', (e)=>{
        submit(e, form, input);
    });

    input.addEventListener('focus', (e)=>{
        unmarkAsError(e.target)
    })
}