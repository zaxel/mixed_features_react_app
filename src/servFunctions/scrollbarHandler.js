export function scrollbarHandler(){
    let width = document.documentElement.clientWidth;
    let widthWithScrollbar = window.innerWidth;
    if(widthWithScrollbar !== width){
        document.body.style.marginRight = `-${widthWithScrollbar - width}px`;
        document.body.style.overflowX = 'hidden';
    }else{
        document.body.style.marginRight = `0px`;
    }
}