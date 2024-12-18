import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state.total = 0
    this.state.donates = []
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const $headElement = document.createElement('h1')
    $headElement.className = 'total-amount'
    $headElement.innerText = 'Итого: $'
    this.total = document.createElement('span')
    this.total.innerText = this.state.total
    $headElement.append(this.total)

    this.$rootElement.appendChild($headElement)
    
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List({onDelete: this.onItemDelete.bind(this)});
    this.donateList = donateList
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    const item = new ListItem({amount})
    this.state.donates.push(item)
    this.donateList.addItem(item)
    this.state.total += amount
    this.total.innerText = this.state.total
  }

  onItemDelete(id) {
    const deleteItem = this.state.donates.find((val) => val.state.id === id)
    this.state.total -= deleteItem.state.amount
    this.state.donates = this.state.donates.filter((val) => val.state.id !== id)
    this.total.innerText = this.state.total
  }
}
