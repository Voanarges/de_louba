const description = (fon, elem) =>{
    const fons = document.querySelectorAll(fon),
        elements = document.querySelectorAll(elem);
        
    
    function show (obj) {
        obj.style.display = 'block';
    }
    function hide (obj) {
        obj.style.display = 'none';
    }
    fons.forEach(item=>{
        item.parentNode.addEventListener('mouseover', ()=>{
            show(item);
        });
        item.parentNode.addEventListener('mouseout', ()=>{
            hide(item);
        });
    });
    elements.forEach(item=>{
        item.parentNode.addEventListener('mouseover', ()=>{
            show(item);
        });
        item.parentNode.addEventListener('mouseout', ()=>{
            hide(item);
        });
    });
    
};
export default description;