import { useState } from 'react';
import './AdminLogin.css'
import {useForm} from 'react-hook-form'
function AdminLogin() {
    const [isAdmin, setIsAdmin] = useState(false);
    const {register, formState: {errors}, handleSubmit} = useForm();
    return (
        <div id="adminLogMain">
            <form id='adminForm'>
                <input type="text" className='adminFormInput' placeholder='Username'{
                    ...register('username', {required: 'Must input username'})
                }/>
                <input type="password" className='adminFormInput' placeholder='Password'{
                    ...register("password", {required: 'Must input Password'})
                }/>
                <button id='adminLoginButton' type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default AdminLogin;