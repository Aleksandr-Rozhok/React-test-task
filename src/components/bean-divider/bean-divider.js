import './bean-divider.css'
import whiteBeans from '../../img/white-beans.png'
import blackBeans from '../../img/black-beans.png'

const BeanDivider = ({color}) => {
    const borderColor = color === "white" ? "#FFF" : "#000";
    const beansColor = color === "white" ? whiteBeans : blackBeans;

    return (
        <div className="bean-container">
            <p style={{borderBlockColor: borderColor}} className="line"></p>
            <img src={beansColor} alt="beans" className="bean-divider" />
            <p style={{borderBlockColor: borderColor}} className="line"></p>
        </div>
    )
}

export default BeanDivider;