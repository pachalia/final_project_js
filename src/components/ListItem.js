import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state.id = Date.now().toString()
    this.state.date = new Date().toLocaleString()
    this.state.amount = props.amount
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    const $deleteButton = document.createElement('button')
    $deleteButton.innerText = 'Удалить'
    $deleteButton.className = 'delete-button'
    const amount = document.createElement('b')
    amount.innerText = this.state.amount

    this.$rootElement.innerText = `${this.state.date} - $`
    this.$rootElement.dataset.donateId = this.state.id
    this.$rootElement.append(amount, $deleteButton)
  }
}
