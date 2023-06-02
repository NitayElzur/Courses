import './ContactUs.css'
import { useForm } from "react-hook-form"
function ContactUs() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div id="contactMain">
            <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
                <div className="bigFormText">Contact Us</div>
                <div className="normalFormText">{errors && Object.values(errors).length > 0 ? Object.values(errors)[0]?.message :`So we can keep you up to date!`}</div>
                <div id="contactFormNames">
                    <input placeholder='First Name' className='contactFormInput' type="text" {
                        ...register('firstName', { required: 'First Name is required' })
                    } />
                    <input className='contactFormInput' placeholder='Last Name' type="text" {
                        ...register('lastName', { required: 'Last Name is required' })
                    } />
                </div>
                <input className='contactFormInput' type="email" placeholder='Your Email Address'{
                    ...register('email', { required: 'Email is required', pattern: {
                        value: /.@./,
                        message: 'Email must contain text before and after a @'
                    } })
                } />
                <button type='sumbit' id='contactFormButton'>Submit</button>
            </form >
        </div >
    )
}
export default ContactUs;