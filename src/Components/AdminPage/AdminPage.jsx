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
        let tempArr = editable
        editable.length !== data.product?.length && data.product?.map(() => {
            tempArr.push(false)
        })
        setEditable(tempArr);
    }, [data.product])
    useEffect(() => {
        setData({ ...data, product: product })
    }, [product])
    return (
        <div id="adminMain">
            {data &&
                data.product?.map((value, index) => {
                    return (
                        <>
                            {editable[index]
                                ?
                                <CourseForm value={value} index={index} editable={editable} setEditable={setEditable} />
                                :
                                <div key={index} className='courseItem'>
                                    Course name: {value.course} <br />
                                    Proffesor: {value.proffesor} <br />
                                    Length: {value.length} <br />
                                    Price: {value.price}
                                    <div id='adminButtons'>
                                        <button className='adminButton' onClick={() => {
                                            const tempArr = editable;
                                            tempArr[index] = true;
                                            setEditable(tempArr);
                                            setData({ ...data })
                                        }}>Edit</button>
                                        <button className='adminButton' onClick={() => {
                                            setData({ ...data, product: data.product.filter((v, i) => i !== index) })
                                        }}>Delete</button>
                                    </div>
                                </div>
                            }

                            <hr />
                        </>
                    )
                })
            }
            <button className='adminButton' onClick={() => {
                const temp = data.product;
                temp.push({
                    "id": '',
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
                    "proffesor-education": ""
                })
                setData({...data, product: [...temp]})
            }}>Add New Course</button>
        </div>
    )
}
export default AdminPage;