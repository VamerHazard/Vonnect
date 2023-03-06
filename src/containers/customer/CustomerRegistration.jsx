import React, {useState} from 'react';
import './customerRegistration.css';
import {Link} from 'react-router-dom';
import nepalFlag from '../../assets/nepalFlag.png';
import classNames from 'classnames';

const CustomerRegistration = () => {

  const [number, setNumber] = useState(undefined);
  const [limited, setLimited] = useState(false);

  const handleChange = (e) => {
    setNumber(e.target.value);
    if(number.toString().length == 9) {
      setLimited(true);
      console.log(limited);
    } else {setLimited(false); console.log(limited);}
  }

  return (
    <div className = 'vonnect__customerRegistration-container'>
      <div className='vonnect__customerRegistration-container__header'>
      <h1>Sign in: </h1>
      </div>
        <div className='vonnect__customerRegistration-container__input'>
          <img src={nepalFlag}/>
          <input type='number' onChange={handleChange} placeholder='Phone-Number' maxLength={10}/>
        </div>
        <div className={classNames('vonnect__customerRegistration-container__btn',{
        'vonnect__customerRegistration-container__btn-color': limited})}>
        <Link to={`/CustomerRegistration/${number}`}>
          <button type='button'>Submit</button>
        </Link>
      </div>
    </div>
  )
}

export default CustomerRegistration
