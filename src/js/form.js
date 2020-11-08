import {validateNotEmpty} from './validate';
import {sendToServer} from './sendToServer';
import { markAsError, unmarkAsError } from './inputError';

const NOT_VALID = -1;

function submitSearch(e, searchString){
    e.preventDefault();
    const isValid = validateNotEmpty(searchString);

    if(!isValid) {
        //условный стоп-код
        return NOT_VALID;
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
        let isError = submitSearch(e, input.value);
        if(isError === NOT_VALID){
            markAsError(input);
        }
    });

    input.addEventListener('focus', (e)=>{
        unmarkAsError(e.target)
    })
}