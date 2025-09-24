const { interval, fromEvent } = Rx.Observable;
// Wartość z input'a search z debounce RxJS

const inputEl = document.getElementById('search');

const input$ = fromEvent(inputEl, 'input');

input$  
    .debounceTime(500)
    .map(event => event.target.value)
    .do((v) => console.log('input event'))
    .subscribe(
        v => {
            console.log(v);
        },
        err => {}, 
        () => {}
    );

// Licznik RxJS

const counter$ = interval(1000)
  .take(11);

  counter$.subscribe(value => console.log("Licznik:", value),)