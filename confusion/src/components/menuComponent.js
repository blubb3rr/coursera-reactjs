import React,{} from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
    function RenderMenuItem({dish})
    {
        return(
            <Card key={dish.id}>
                <Link to={`/menu/${dish.id}`}>
                        <CardImg src={dish.image} alt={dish.name} width="100%"></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        </Link>
                    </Card>
        );
    }
    const Menu=(props) => {
        const menu = props.dishes.map((dish)=> {
            return(
                <div className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });
        return (
            <div className="container">
                <div className="rpw"> 
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                        <h3>Menu</h3>
                </div>
                </div>
                <div className="row">
                        {menu}
                </div>
                
            </div>
        );
    }
        
export default Menu;