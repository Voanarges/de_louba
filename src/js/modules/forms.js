const forms = () => {
    const form = document.querySelectorAll('form'),
            // phoneInputs = document.querySelectorAll('input[name = "user_phone"]'),
            inputs = document.querySelectorAll('input'),
            text = document.querySelectorAll('textarea'),
            policy = document.getElementById('cont'),
            btn = document.querySelector('.contacts__btn');

    

    const checkNumInputs = (selector) =>{
        const numInputs = document.querySelectorAll(selector);
        
        numInputs.forEach(item=>{
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\d/, '');
            });
        });
    };
    checkNumInputs('[data="user_name"]');


     const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        text.forEach(item => {
            item.value = '';
        });
        inputs.forEach(item => {
            if(item.getAttribute('type') === 'checkbox') {
                item.checked = false;
            }
        });
    };
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро я с вами свяжусь',
        failure: 'Что-то пошло не так...',
        spinner: 'icons/messages/spinner.gif',
        ok: 'icons/messages/ok.png',
    }


    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    }

    
    form.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            policy.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('./mailer/smart.php', formData)
                .then(result =>{
                    statusMessage.textContent = message.success;
                })
                .catch(() =>{
                    statusMessage.textContent = message.failure;
                })
                .finally(()=>{
                    clearInputs();
                    setTimeout(()=>{
                        statusMessage.remove();
                    }, 5000);
                });
                                
        });
    });
};
export default forms;