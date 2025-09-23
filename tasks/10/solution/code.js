const styled = (tag) => {
  return (styles, ...values) => {
    const styledString = styles.reduce((acc, str, i) => {
      return acc + str + (values[i] || '');
    }, '');

    return {
      tag,
      styles: styledString.replace(/\s+/g, ' ').trim()
    }
  }
}

const Div = styled('div')`
  color: red;
  font-size: 20px;
`;

console.log(Div);
// // { tag: 'div', styles: 'color: red; font-size: 20px;' }

const color = 'blue';

const Button = styled('button')`
  background-color: ${color};
  padding: 10px;
`;

console.log(Button);
// // { tag: 'button', styles: 'background-color: blue; padding: 10px;' }