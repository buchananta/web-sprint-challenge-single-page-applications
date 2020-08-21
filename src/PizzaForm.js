import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import formSchema from './formSchema';

const defaultFormData = {
  'username': '',
  'toppings': {},
  'size': '',
  'instructions': '',
}

export default function PizzaForm({setOrderedData}) {
  const [formData, setFormData] = useState(defaultFormData)
  const [disabled, setDisabled] = useState(true)
  const history = useHistory();
  const submit = formData => {
    axios.post('https://reqres.in/api/users', formData)
      .then(res => {
        console.log(res.data)
        setOrderedData(res.data)
      })
      .catch(e => console.log('ERROR:' + e))
  } 

  const onSubmit = evt => {
    evt.preventDefault()
    submit(formData)
    history.push('/ordered')
  }

  const checkboxChange = (name, isChecked) => {
    setFormData({...formData, toppings: {
      ...formData.toppings, [name]: isChecked
      }
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
  }

  const inputChange = (name, value) => {
    setFormData({...formData, [name]: value})
  } 

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }
  useEffect(() => {
    formSchema.isValid(formData).then(valid => {
      setDisabled(!valid);
    })
  }, [formData])
 
  return (
    <div className='pizza-form'>
    <h2>Build Your Own Pizza!</h2> 
    <form>
      <h3>Name and Size:</h3> 
      <label>Name:&nbsp;
        <input type='text'
               name='username'
               value={formData.username}
               onChange={onInputChange} />
      </label>
      <label>Size:&nbsp;
        <select onChange={onInputChange}
                value={formData.size}
                name='size'>
          <option value=''>== please choose a size ==</option>
          <option value='small'>Small</option>
          <option value='medium'>Medium</option>
          <option value='large'>Large</option>
        </select>
      </label>
      <h3>Toppings:</h3>
      <label>Sausage:&nbsp;
        <input type='checkbox'
               name='sausage'
               checked={formData.toppings.sausage}
               onChange={onCheckboxChange} />
      </label>
      <label>Pepperoni:&nbsp;
      <input type='checkbox'
               name='pepperoni'
               checked={formData.toppings.pepperoni}
               onChange={onCheckboxChange} />
      </label>
      <label>Green Peppers:&nbsp;
      <input type='checkbox'
               name='peppers'
               checked={formData.toppings.peppers}
               onChange={onCheckboxChange} />
      </label>
      <label>Mushrooms:&nbsp;
        <input type='checkbox'
               name='mushrooms'
               checked={formData.toppings.mushrooms}
               onChange={onCheckboxChange} />
      </label>
      <h3>Special Instructions: </h3>
      <label>Special Instructions:&nbsp;
        <input type='text'
               name='instructions'
               onChange={onInputChange}
               value={formData.instructions}
        />
      </label>
      <button disabled={disabled} onClick={onSubmit} >Submit Order!</button>
    </form>
    </div>
  )
}