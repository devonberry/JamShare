import Button from 'react-bootstrap/Button';
import './room.css';

function Signout(props) {

    function handleChange(e) {

    }

    return (
        <>
            <Button className='leave'>
                <a href="https://jamshare.ddns.net:3000">Leave Room</a>
            </Button>
        </>
    );
}

export default Signout;