import { useEffect, useState } from 'react';
import './AdminLogin.css'
import { useForm } from 'react-hook-form'
import { useContext } from 'react';
import { MainContext } from '../../Contexts/MainContext'
import { useNavigate } from 'react-router-dom';
function AdminLogin({isAdmin, setIsAdmin}) {
    const navigate = useNavigate();
    let { register, formState: { errors }, handleSubmit } = useForm();
    const { data, setData } = useContext(MainContext);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    useEffect(() => {
        isAdmin && navigate('/admin')
    }, [isAdmin])
    function onSubmit(e) {
        const h = ''
        if (!data.admin?.some(v => v.username === e.username)) {
            setFormData({username: '' , password: ''});
            alert('Username does not exist');
        }
        else if (!data.admin?.some(v => v.username === e.username && v.password === e.password)) {
            setFormData({ ...formData, password: '' });
            alert('Incorrect password')
        }
        else {
            setIsAdmin(true);
        }
    }
    return (
        <div id="adminLogMain">
            <form id='adminForm' onSubmit={handleSubmit(onSubmit)}>
                <div id="formText">Log-In</div>
                <input type="text" className='adminFormInput' onInput={e => setFormData({ ...formData, username: e.target.value })} value={formData.username} placeholder={errors && errors?.username ? errors.username.message : 'Username'}{
                    ...register('username', { required: 'Must input username' })
                } />
                <input type="password" className='adminFormInput' onInput={e => setFormData({ ...formData, password: e.target.value })} value={formData.password} placeholder={errors && errors?.password ? errors.password.message : 'Password'}{
                    ...register("password", { required: 'Must input Password' })
                } />
                <button id='adminLoginButton' type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default AdminLogin;