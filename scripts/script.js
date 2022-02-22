const chatIcon = document.querySelector('#chat-icon');
const chatbotIframe = document.querySelector('#chatbot-iframe');

function windowResize() {
    console.log(chatbotIframe);
    console.log(window.innerWidth);
    chatbotIframe.style.width = `${window.innerWidth}px`;
}

window.onresize = windowResize;

chatIcon.addEventListener('click', function(e) {
    chatIcon.style.opacity = 0;
    chatbotIframe.classList.add('fadeup');
    if (window.innerWidth <= 500) {
        chatbotIframe.style.height = `629px`;
    } else {
        chatbotIframe.style.height = `515px`;
    }
    
    const chatbotHeader = chatbotIframe.contentWindow.document.querySelector('#chatbot-header');
    const chatbotHeaderInner = chatbotIframe.contentWindow.document.querySelector('#chatbot-header-inner');
    const chatbotBody = chatbotIframe.contentWindow.document.querySelector('#chatbot-body');
    const chatbot2 = chatbotIframe.contentWindow.document.querySelector('#chatbot-bot2');
    const chatbotQuestion1 = chatbotIframe.contentWindow.document.querySelector('#chatbot-question1');
    const chatbotQuestion2 = chatbotIframe.contentWindow.document.querySelector('#chatbot-question2');
    const chatbotQuestion3 = chatbotIframe.contentWindow.document.querySelector('#chatbot-question3');
    const chatbotQuestion4 = chatbotIframe.contentWindow.document.querySelector('#chatbot-question4');
    const chatbotMainQuestion = chatbotIframe.contentWindow.document.querySelector('#chatbot-main-question');
    
    setTimeout(() => {
        chatbotHeader.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
        chatbotHeaderInner.style.opacity = 1;
    }, 2500);
    setTimeout(() => {
        chatbot2.style.opacity = 1;
        chatbotBody.style.opacity = 1;
    }, 3500);
    setTimeout(() => {
        chatbotQuestion1.style.opacity = 1;
    }, 4500);
    setTimeout(() => {
        chatbotQuestion2.style.opacity = 1;
    }, 5500);
    setTimeout(() => {
        chatbotQuestion3.style.opacity = 1;
    }, 6500);
    setTimeout(() => {
        chatbotQuestion4.style.opacity = 1;
    }, 7700);
    setTimeout(() => {
        chatbotMainQuestion.style.opacity = 1;
    }, 9000);
});