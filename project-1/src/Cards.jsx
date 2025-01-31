import PropTypes from "prop-types"


function Cards(props){
    return(
        <div className="cards">
            <p>Name: {props.Name}</p>
            <p>Price: {props.Price}</p>
            <p>Watts: {props.Watt}</p>
        </div>
        
    );
}

Cards.PropTypes = {
    Name: PropTypes.string,
    Price: PropTypes.number,
    Watts: PropTypes.number,
}

export default Cards