React Sorting Algorithm Advanced Core

usage
```
> git clone https://github.com/MostafaEzzelden/react-sorting-list.git
> npm install
> npm start

```

example to use:

```
import SortAlgorithms from './SortAlgorithms';

const list = [
  {
    title: 'Lorem ipsum dolor',
    body: 'consectetur adipiscing elit. Aliquam quis fermentum felis, in sagittis orci. '
   },{
    title: 'Donec nec augue ',
    body: 'eleifend nisl eget, fermentum ante. Quisque aliquam venenatis nibh'
   },{
    title: 'Aliquam fringilla',
    body: 'Fusce sed nunc rhoncus, consectetur tellus sed, fringilla mi.'
   },{
    title: 'Maecenas at est',
    body: 'Cras semper enim elit, sit amet mattis odio semper non. Nunc et nisl vulputate.'
  },{
    title: 'Aenean facilisis',
    body: 'nulla lorem vehicula mi, non mattis dui justo in orci. Ut sed vehicula dui'
  }
];

class Container extends React.Component {
  mapListUI(element, idx) {
      return (
          <div className="card darken-1" key={(++idx)}>
              <div className="card-content">
                  <span className="card-title">{ element.title }</span>
                  <p>{ element.body }</p>
              </div>
          </div>
      )
  }

  comparator(prevVal, nextVal, prev, next) {
      let withStart = !(next.title).startsWith(prevVal) && !(next.title).startsWith(nextVal) && (
          (prev.title).startsWith(prevVal) || (prev.title).startsWith(nextVal) || (prev.body).startsWith(prevVal) || (prev.body).startsWith(nextVal)
      );

      let withIncludes = !(next.title).includes(prevVal) && !(next.title).includes(nextVal) && !(next.body).includes(prevVal) && !(next.body).includes(nextVal) && (
          (prev.title).includes(prevVal) || (prev.title).includes(nextVal) || (prev.body).includes(prevVal) || (prev.body).includes(nextVal)
      );

      if (withStart || withIncludes) return -1;
      else return 0;
  }

  render() {
      return (
          <div>
              <SortAlgorithms
                  list={list}
                  withMark
                  exceptMark={false} //  ['title'] === column(s) do not mark
                  mapListUI={/* rquired */ this.mapListUI.bind(this)}
                  comparator={this.comparator.bind(this)}
              />
          </div>
      )
  }
}

```
