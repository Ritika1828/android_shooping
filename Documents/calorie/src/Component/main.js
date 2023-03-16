import { useState } from 'react';
import calorie from '../images/calorie.png'
import Calorie from './calorie';
import styles from './styles/main.module.css'
import { useNavigate } from 'react-router-dom';
function Main() {
    const [isShown, setIsShown] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        navigate('/calories');
        
    }
    return (
      <div className={styles.main}>
        <img className={styles.img} src={calorie} />
        <h1 className={styles.heading}>My Diet</h1>
        <p className={styles.para}>Counting Calories made easy</p>
            <button
                className={styles.button}
                onClick={handleClick}
            >Start Counting
            </button>
     </div>
       
   
    );
  }
  
  export default Main;
  