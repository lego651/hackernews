import React, { useState } from 'react'
import '../styles/Submit.css'

const Submit = () => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    text: ''
  });

  const updateFormData = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = () =>{
      console.log(formData.title);
  }
  const { title, url, text } = formData;

  return (
    <form className='submitNewsForm'>

      <div className='inputContainer'>
        <h5>Title</h5>
        <input 
          value={title}
          onChange={e => updateFormData(e)}
          placeholder='your title'
          type='text'
          name='title'
          className='oneLineInput'
          required
        />
      </div>

      <div className='inputContainer'>
        <h5>URL</h5>
        <input 
          value={url}
          onChange={e => updateFormData(e)}
          placeholder='your url'
          type='url'
          name='url'
          className='oneLineInput'
          required
        />
      </div>

      <div className='inputContainer'>
        <h5>Text</h5>
        <textarea
          value={text}
          onChange={e => updateFormData(e)}
          name='text'
          placeholder='max length is 500'
          rows='5'
          maxLength='500'
          className='multiLinesInput'
          required
        ></textarea>
      </div>

      <button type='submit' className='submitBtn' onClick={handleSubmit}>submit</button>
    </form>
  )
}

export default Submit