import * as React from 'react'
import { useForm, ValidationError } from '@formspree/react';

import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
    const [state, handleSubmit] = useForm("mnqyzqeq");
  if (state.succeeded) {
      return <Layout pageTitle="Contact">
                <p>Message Sent</p>
             </Layout>
  }
    return(
        <div>
            <Layout pageTitle="Contact">
                <form onSubmit={handleSubmit} action="https://formspree.io/f/mnqyzqeq" method="POST">
                     <label htmlFor="email">
                        Email Address
                    </label>
                     <input
                        id="email"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                     />
                    <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                </form>
            </Layout>
        </div>
    )
}

export const Head = () => <Seo title="Contact"/>
export default ContactPage