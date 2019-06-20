let Books = [{
        title: "Geethanjali",
        author: "Rabindranath Tagor",
        alreadyRead: false
    },
    {
        title: "Ramayana",
        author: "Valmiki",
        alreadyRead: true
    },
    {
        title: "Mahabharatha",
        author: "Vyasa",
        alreadyRead: false
    }
];


let Clicked = (ClickedTitle) => {
    console.log(ClickedTitle);

    Books.map(book => {
        if (book.title === ClickedTitle) {
            console.log(book.alreadyRead)
            book.alreadyRead = this.event.target.checked;
        }
    })
    console.log(Books);


    Load();

};
let FormLi = (list) => {

    let checked = 'checked';
    let Read = '<label class="btn btn-success">alreadyRead</label>';

    if (!list.alreadyRead) {
        checked = '';
        Read = '<label class="btn btn-danger">Not Read</label>';
    };

    return `<h3>${Read}<input type="checkbox" ${checked} onClick=Clicked('${list.title}') />
    The "${list.title} by ${list.author}" </h3>`;
}



let container = document.querySelector('#container');
let Load = () => {
    container.innerHTML = Books.map(book => `<ul>${FormLi(book)}</ul>`).join('');
}
Load();

let onClick = document.querySelector('input[type=checkbox]');