import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Image, Card, Button } from 'react-bootstrap';
import Data from '../pandit'



function Cards() {
    return (

        <div>
            <div className="info" style={{display: 'flex', flexDirection: 'row'}}>
            {Data.berita.map(info=>
            
            <Card style={{ width: '18rem', flex: 1 }}>
            <Card.Img variant="top" src={info.Img} />
            <Card.Body>
                <Card.Title>{info.Title}</Card.Title>
                <Card.Text>
                {info.Date}
                </Card.Text>
                <Button variant="primary" href={info.Link}>Link</Button>
            </Card.Body>
            </Card>
            )}
            </div>
        </div>
            

    );
       

    
}

export default Cards;