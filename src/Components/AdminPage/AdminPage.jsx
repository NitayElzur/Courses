import { useEffect } from 'react';
import './AdminPage.css'
import { useNavigate } from 'react-router-dom';
function AdminPage({ isAdmin}) {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(!isAdmin && '/login')
    }, [])
    return (
        <>

        </>
    )
}
export default AdminPage;