import './ProfForm.css';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MainContext } from '../../Contexts/MainContext';
function ProfForm({ value, index, editable, setEditable }) {
    const { data, setData } = useContext(MainContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [currentValue, setCurrentValue] = useState(value);
    return (
        <form id='profForm' onSubmit={handleSubmit(() => {
            const temp = data.proffesors;
            temp[index] = { ...currentValue }
            setData({ ...data, proffesors: [...temp] })
            const tempArr = editable.filter((v) => v !== value.id);
            setEditable([...tempArr])
        })}>
            <div id="profInputs">
                <div className='profInput'>
                    Proffesor Name:
                    <input type="text" value={currentValue.name} onInput={(e) => {setCurrentValue({...currentValue, name: e.target.value})}} placeholder={errors && errors?.name?.message}{
                        ...register('name', { required: 'Field is Required' })
                    } />
                </div>
                <div className='profInput'>
                    Image:
                    <input type="text" value={currentValue.img} onInput={(e) => {setCurrentValue({...currentValue, img: e.target.value})}} placeholder={errors && errors?.image?.message}{
                        ...register('image', { required: 'Field is Required' })
                    } />
                </div>
                <div className='profInput'>
                    Type of Experience:
                    <input type="text" value={currentValue.practice} onInput={(e) => {setCurrentValue({...currentValue, practice: e.target.value})}} placeholder={errors && errors?.practice?.message}{
                        ...register('practice', { required: 'Field is Required' })
                    } />
                </div>
                <div className='profInput'>
                    Years of Experience:
                    <input type="number" value={currentValue.qualification.split(' ')[0]} onInput={(e) => {
                        setCurrentValue({...currentValue, qualification: `${e.target.value} years of experience`})
                    }} placeholder={errors && errors?.qualification?.message}{
                        ...register('qualification', { required: 'Field is Required' })
                    } />
                </div>
                <div className='profInput'>
                    Prior Jobs:
                    <input type="text" value={currentValue.work} onInput={(e) => {setCurrentValue({...currentValue, work: e.target.value})}} placeholder={errors && errors?.work?.message}{
                        ...register('work', { required: 'Field is Required' })
                    } />
                </div>
            </div>
            <div id="profButtons">
                <button type='submit' className='courseFormButton'>Change</button>
                <button type='button' className='courseFormButton' onClick={() => {
                    setData({ ...data, proffesors: data.proffesors.filter((v, i) => i !== index) })
                }}>Delete</button>
            </div>
        </form>
    )
}
export default ProfForm;