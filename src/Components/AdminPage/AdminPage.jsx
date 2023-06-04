import './AdminPage.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../../Contexts/MainContext'
import CourseForm from '../CourseForm/CourseForm';
function AdminPage({ isAdmin }) {
    const { data, setData } = useContext(MainContext);
    const [editable, setEditable] = useState([])
    const navigate = useNavigate();
    let product = data.product;
    useEffect(() => {
        navigate(!isAdmin && '/login')
    }, [data.proudct])
    useEffect(() => {
        setData({ ...data, product: product })
    }, [product])
    return (
        <div id="adminMain">
            Courses:
            {data &&
                data.product?.map((value, index) => {
                    return (
                        <>
                            {editable.includes(value.id)
                                ?
                                <CourseForm key={index} value={value} index={index} editable={editable} setEditable={setEditable} />
                                :
                                <div key={index} className='courseItem'>
                                    Course name: {value.course} <br />
                                    Proffesor: {value.proffesor} <br />
                                    Length: {value.length} <br />
                                    Price: {value.price}
                                    <div id='adminButtons'>
                                        <button className='adminButton' onClick={() => {
                                            setEditable([...editable, value.id]);
                                            setData({ ...data })
                                        }}>Edit</button>
                                        <button className='adminButton' onClick={() => {
                                            setData({ ...data, product: data.product.filter((v, i) => i !== index) })
                                        }}>Delete</button>
                                    </div>
                                </div>
                            }

                            <hr/>
                        </>
                    )
                })
            }
            <button className='adminButton' onClick={() => {
                const temp = data.product;
                temp.push({
                    "id": data.product.toSorted((a, b) => a.id - b.id)[data.product.length - 1].id + 1,
                    "course": "",
                    "img": "",
                    "languages": "",
                    "length": "",
                    "start-date": "",
                    "end-date": "",
                    "price": "",
                    "paragrath1": "",
                    "paragrath2": "",
                    "paragrath3": "",
                    "proffesorImg": "",
                    "proffesor": "",
                    "icon": "",
                    "proffesor-education": ""
                })
                setData({ ...data, product: [...temp] })
                setEditable(prev => [...prev, temp.pop().id + 1])
            }}>Add New Course</button>
            Proffesor:
        </div>
    )
}
export default AdminPage;