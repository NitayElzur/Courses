import './CourseForm.css'
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MainContext } from '../../Contexts/MainContext';
function CourseForm({ value, index, editable, setEditable }) {
    const { data, setData } = useContext(MainContext);
    const { formState: { errors }, register, handleSubmit } = useForm();
    const [currentValue, setCurrentValue] = useState(value);
    return (
        <form id='courseItemForm' onSubmit={handleSubmit(() => {
            const temp = data.product;
            temp[index] = { ...currentValue }
            setData({ ...data, product: [...temp] })
            const tempArr = editable.filter((v) => v !== value.id);
            setEditable([...tempArr])
        })}>
            <div id='courseInputs'>
                <div className="courseInput">
                    Course Name:
                    <input placeholder={errors ? errors.courseName?.message : ''} type="text" value={currentValue.course} onInput={(e) => {
                        setCurrentValue({ ...currentValue, course: e.target.value })
                    }}{
                        ...register('courseName', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Start Date:
                    <input placeholder={errors ? errors['start-date']?.message : ''} type="date" value={currentValue['start-date']} onInput={(e) => {
                        setCurrentValue({ ...currentValue, 'start-date': e.target.value })
                    }}{
                        ...register('start-date', { required: 'Field Is Required' })
                        } />
                    End Date:
                    <input placeholder={errors ? errors['end-date']?.message : ''} type="date" value={currentValue['end-date']} onInput={e => {
                        setCurrentValue({ ...currentValue, 'end-date': e.target.value })
                    }} {
                        ...register('end-date', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Languages:
                    <input placeholder={errors ? errors.languages?.message : ''} type="text" id='courseLanguages' value={currentValue.languages} onInput={(e) => {
                        setCurrentValue({ ...currentValue, languages: e.target.value })
                    }}{
                        ...register('languages', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Length:
                    <input placeholder={errors ? errors.length?.message : ''} type="number" value={currentValue.length.split(' ')[0]} onInput={(e) => {
                        setCurrentValue({ ...currentValue, length: `${e.target.value} months` })
                    }}{
                        ...register('length', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Price:
                    <input placeholder={errors ? errors.price?.message : ''} type="number" value={currentValue.price.split('$')[0]} onInput={(e) => {
                        setCurrentValue({ ...currentValue, price: `${e.target.value}$` })
                    }}{
                        ...register('price', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Proffesor:
                    <input placeholder={errors ? errors.proffesor?.message : ''} type="text" value={currentValue.proffesor} onInput={(e) => {
                        setCurrentValue({ ...currentValue, 'proffesor': e.target.value })
                    }}{
                        ...register('proffesor', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Proffesor Education in Years:
                    <input placeholder={errors ? errors['proffesor-education']?.message : ''} type="number" value={currentValue['proffesor-education'].split(' ')[0]} onInput={(e) => {
                        setCurrentValue({ ...currentValue, 'proffesor-education': e.target.value })
                    }}{
                        ...register('proffesor-education', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Proffesor Picture Link:
                    <input placeholder={errors ? errors.proffesorImg?.message : ''} type="text" className='pictureInput' value={currentValue.proffesorImg} onInput={(e) => {
                        setCurrentValue({ ...currentValue, proffesorImg: e.target.value })
                    }}{
                        ...register('proffesorImg', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Course Picture Link:
                    <input placeholder={errors ? errors.courseImg?.message : ''} type="text" className='pictureInput' value={currentValue.img} onInput={(e) => {
                        setCurrentValue({ ...currentValue, img: e.target.value })
                    }}{
                        ...register('courseImg', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    Course Icon (in 64x64px):
                    <input placeholder={errors ? errors.courseIcon?.message : ''} type="text" className='pictureInput' value={currentValue.icon} onInput={(e) => {
                        setCurrentValue({ ...currentValue, icon: e.target.value })
                    }}{
                        ...register('courseIcon', { required: 'Field Is Required' })
                        } />
                </div>
                <div className="courseInput">
                    First Paragraph :
                    <textarea name="paragraph1" cols="50" rows="5" value={value['paragrath1']} onInput={e => {
                        setCurrentValue({ ...currentValue, 'paragrath1': e.target.value })
                    }}></textarea>
                </div>
                <div className="courseInput">
                    Second Paragraph :
                    <textarea name="paragraph1" cols="50" rows="5" value={value['paragrath2']} onInput={e => {
                        setCurrentValue({ ...currentValue, 'paragrath2': e.target.value })
                    }}></textarea>
                </div>
                <div className="courseInput">
                    Third Paragraph :
                    <textarea name="paragraph1" cols="50" rows="5" value={value['paragrath3']} onInput={e => {
                        setCurrentValue({ ...currentValue, 'paragrath3': e.target.value })
                    }}></textarea>
                </div>
            </div>
            <button id='courseFormButton' type='submit'>Change</button>
            <button id='courseFormButton' type='button' onClick={() => {
                setData({ ...data, product: data.product.filter((v, i) => i !== index) })
            }}>Delete</button>
        </form>
    )
}
export default CourseForm;