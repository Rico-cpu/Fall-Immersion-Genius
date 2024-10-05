

function darkMode() {

    const body = document.body;

    if (document.body.style.backgroundColor === 'green') {
        document.body.style.backgroundColor =  'blue';
        document.body.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
} 
