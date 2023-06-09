import './AdminPage.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../../Contexts/MainContext'
import CourseForm from '../CourseForm/CourseForm';
import ProfForm from '../ProfForm/ProfForm';
function AdminPage({ isAdmin, setIsAdmin }) {
    const { data, setData } = useContext(MainContext);
    const [editable, setEditable] = useState([]);
    const [profEditable, setProfEditable] = useState([]);
    const navigate = useNavigate();
    let product = data.product;
    useEffect(() => {
        navigate(!isAdmin[0] && '/login')
    }, [data.proudct, isAdmin])
    useEffect(() => {
        setData({ ...data, product: product })
    }, [product])
    return (
        <>
            <div id="adminHeader">
                <div id="adminName">
                    Welcome {isAdmin[1].toUpperCase().charAt(0) + isAdmin[1].slice(1)}!
                </div>
                <button class="Btn" onClick={() => setIsAdmin([false, ''])}>
                    <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                    <div class="text">Logout</div>
                </button>



            </div>
            <div id="adminMain">
                <div className="adminBigText">Courses:</div>
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

                                <hr />
                            </>
                        )
                    })
                }
                <br /><br />
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
                    setEditable(prev => [...prev, temp.pop().id])
                }}>Add New Course</button>
                <br /><br /><br /><br />
                <div className="adminBigText">Proffesors:</div>
                {data &&
                    data.proffesors?.map((value, index) => {
                        return (
                            <>
                                {profEditable.includes(value.id)
                                    ?
                                    <ProfForm value={value} index={index} editable={profEditable} setEditable={setProfEditable} />
                                    :
                                    <div className="profItem">
                                        Proffesor Name: {value.name} <br />
                                        Type of Experience: {value.practice} <br />
                                        Years of Experience: {value.qualification} <br />
                                        Prior Jobs: {value.work}
                                        <div className='profButtons'>
                                            <button className='adminButton' onClick={() => {
                                                setProfEditable([...profEditable, value.id])
                                                setData({ ...data })
                                            }}>Edit</button>
                                            <button className='adminButton' onClick={() => {
                                                setData({ ...data, proffesors: data.proffesors.filter((v, i) => i !== index) })
                                            }}>Delete</button>
                                        </div>
                                    </div>
                                }
                                <hr />
                            </>
                        )
                    })
                }
                <br /><br />
                <button className='adminButton' type='button' onClick={() => {
                    const temp = data.proffesors;
                    temp.push({
                        "id": data.proffesors.toSorted((a, b) => a.id - b.id)[data.proffesors.length - 1].id + 1,
                        "img": "",
                        "name": "",
                        "practice": "",
                        "qualification": "",
                        "work": ""
                    })
                    setData({ ...data, proffesors: temp })
                    setProfEditable(prev => [...prev, temp[temp.length - 1].id])
                }}>Add New Proffesor</button>
            </div>
        </>
    )
}
export default AdminPage;