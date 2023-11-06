import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl p-4 m-4'>
            Contact up Page
        </h1>
        <form>
            <input type='text' className='border border-black p-4 m-4' placeholder='home' />
            <input type='text' className='border border-black p-4 m-4' placeholder='Message' />
            <button className='border border-black p-4 m-4 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;