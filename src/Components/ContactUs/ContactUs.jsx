import './ContactUs.css'
import {useForm} from "react-hook-form"
function ContactUs() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    function onSubmit(data) {
        console.log(data);
    }
    return (
        <div id="contactMain">
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input type="submit" />
            </form>
        </div>
    )
}
export default ContactUs;