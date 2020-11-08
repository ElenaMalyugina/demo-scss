export function markAsError(el){
    el.classList.add('error');
}

export function unmarkAsError(el){
    if(el.classList.contains('error')){
        el.classList.remove('error');
    }
}

