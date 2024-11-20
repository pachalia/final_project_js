import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state.amount = ''
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    this.$button = document.createElement('button')
    this.$button.className = 'donate-form__submit-button'
    this.$button.innerText = 'Задонатить'
    this.$button.type = 'submit'
    this.$button.disabled = true

    this.$input = document.createElement('input')
    this.$input.className = 'donate-form__donate-input'
    this.$input.type = 'number'
    this.$input.min = '1'
    this.$input.max = '100'
    this.$input.name = 'amount'
    this.$input.required = true

    const $donateFormInputLabel = document.createElement('label')
    $donateFormInputLabel.className = 'donate-form__input-label'
    $donateFormInputLabel.innerText = 'Введите сумму в $'
    $donateFormInputLabel.append(this.$input)

    this.$rootElement.append($donateFormInputLabel, this.$button)
    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
  }

  handleInput(event) {
    this.state.amount = event.target.value
    this.isValid ? this.$button.disabled = false : this.$button.disabled = true
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.isValid) {
      this.props.onSubmit(+this.state.amount)
      this.state.amount = ''
      this.$input.value = ''
    }
  }

  get isValid () {
    return this.state.amount > 0 && this.state.amount <=100 ? true : false
  }
}
