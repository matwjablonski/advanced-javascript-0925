const { interval, fromEvent } = Rx.Observable;
// Wartość z input'a search z debounce RxJS

const inputEl = document.getElementById('search');

const input$ = fromEvent(inputEl, 'input');

// debounceTime(500)
// map()

input$
    .do((v) => console.log('input event'))
    .subscribe(
        event => {
            console.log(event.target.value);
        },
        err => {}, 
        () => {}
    );

// Licznik RxJS

const counter$ = interval(1000)
  .take(11);