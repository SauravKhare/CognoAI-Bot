const chatIcon = document.querySelector('.chat-icon');
const chatbotIframe = document.querySelector('#chatbot-iframe');
const main = document.querySelector('#main');
const chatbotHeader = document.querySelector('.chatbot-header');



chatIcon.addEventListener('click', function(e) {
    console.log('Clicked');
    chatbotIframe.classList.add('fadeup');
    chatbotIframe.style.height = `629px`;
    console.log(chatbotIframe.style.height)
    if (chatbotIframe.style.height >= '629') {
        const chatbotHeader = document.querySelector('.chatbot-header');
        console.log(chatbotHeader)
    }
});