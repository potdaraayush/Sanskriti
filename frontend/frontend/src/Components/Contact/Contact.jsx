import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqgovjb");

  if (state.succeeded) {
    return (
      <div style={{ color: '#F4B3B3', textAlign: 'center', fontFamily: 'Philosopher, sans-serif', marginTop: '50px' }}>
        <p>Thanks for reaching out!</p>
      </div>
    );
  }

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 style={{color: '#F4B3B3', textAlign: 'center', fontSize: '30px', fontFamily: "Philosopher, sans-serif"}}>Send us a message!</h1>
    <div style={{ color: '#ede6d9', textAlign: 'center', fontFamily: 'Marcellus, sans-serif', maxWidth: '600px', margin: '0 auto', }}>
      <form style={{backgroundColor: '#002028'}} onSubmit={handleSubmit} className="p-4 bg-gray-50 dark:bg-gray-500 rounded-lg shadow-lg">
        <label htmlFor="email" className="block text-xl mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-3 py-2 mb-4 leading-tight text-gray-900 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500"
        />
        <label htmlFor="message" className="block text-xl mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full h-32 px-3 py-2 mb-4 leading-tight text-gray-900 border rounded-lg appearance-none focus:outline-none focus:shadow-outline"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500"
        />
        <button
          style={{backgroundColor: '#6E1313'}}
          type="submit"
          disabled={state.submitting}
          className="w-full px-4 py-2 text-lg font-bold text-white rounded-lg focus:outline-none hover:bg-red-600"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default ContactForm;
