import { Component } from '../core/Component';
import {App} from "./App";
import {Form} from "./Form";

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';
    this.$listContainer = document.createElement('div')
    this.$listContainer.className = 'donates-container__donates'
    const $donatesContainerTitle = document.createElement('h2')
    $donatesContainerTitle.className = 'donates-container__title'
    $donatesContainerTitle.innerText = 'Список донатов'
    this.$rootElement.append($donatesContainerTitle,this.$listContainer)
    this.$listContainer.addEventListener('click', this.deleteItem.bind(this))
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }

  deleteItem(e){
    if(e.target.className ==='delete-button') {
      const app = new App()
      const $itemElement = e.target.closest('div')
      const id = $itemElement.dataset.donateId
      app.onItemDelete(id)
      // this.app.onItemDelete(id)
      // $itemElement.remove()
    }
  }
}