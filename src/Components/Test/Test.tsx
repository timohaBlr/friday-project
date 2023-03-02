import React from 'react';
import s from './Test.module.css'
import SuperInputText from "../../Common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../Common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../Common/c3-SuperCheckbox/SuperCheckbox";

const Test = () => {
    return (
        <div>
            <h1>Test</h1>
            <SuperInputText/>
            <SuperButton>Super Button</SuperButton>
            <SuperCheckbox/>
        </div>
    );
};

export default Test;