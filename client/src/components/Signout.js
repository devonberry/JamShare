import Button from 'react-bootstrap/Button';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Signout(props) {

    const navigate = useNavigate();

    function handleChange(e) {
        Cookies.remove('username');
        navigate('/');
    }

    

    return (
        <>
            <Button variant='primary' type='submit'
            onClick={handleChange}
            >
                Sign Out
            </Button>
        </>
    );
}

export default Signout;