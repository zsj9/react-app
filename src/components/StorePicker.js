import React from 'react'
class StorePicker extends React.Component{
  render() {
    return(
      <form className='Store-selector'>
        <p>this is a StorePicker</p>
        <input type='text' required placeholder='Store Name'/>
        <button type='submit'>Visit Store </button>
      </form>
    )
  }
}
export default StorePicker