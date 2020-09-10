import React from 'react';
import spinner from '../../assets/img/loadingSmall.gif';

const Spinner = () => (
    <div className="text-center">
        <img src={spinner} alt="Carregando" />
    </div>
);

export default Spinner;