import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import dark from '../styles/components/BinaryConverterDark.module.css';
import light from '../styles/components/BinaryConverterLight.module.css';
import ConvertedNumberModal from './ConvertedNumberModal';

const BinaryConverter = () => {
    const {theme} = useContext(ThemeContext);
    const[number, setNumber] = useState("");
    const[isBinary, setIsBinary] = useState(true);
    const[isDecimal, setIsDecimal] = useState(true);
    const[convertedNumber, setConvertedNumber] = useState(0);
    const[isConvertedNumberModalOpen, setIsConvertedNumberModalOpen] = useState(false);
    

    function handleChange (event: { target: { value: React.SetStateAction<string>; }; }) {
        setNumber(event.target.value);
    }

    function validateNumber () {
        if (theme === 'dark') {
            if (number === "") {
                setIsBinary(false);
                return false;
            } else {
                for (let value of number) {
                    if (value !== '0' && value !== '1') {
                        setIsBinary(false);
                        return false;
                    } else {
                        setIsBinary(true);
                    }
                }
                return true;
            }
        } else {
            if (number === "") {
                setIsDecimal(false);
                return false;
            } else {
                for (let value of number) {
                    if (isNaN(Number(value))) {
                        setIsDecimal(false);
                        return false;
                    } else {
                        setIsDecimal(true);
                    }
                }
                return true;
            }
        }
        
    }

    function convertNumber () {
        let total = 0;
        let totalStr: string[] = [];

        let num = Number(number);
        let i = number.length - 1;

        if (theme === 'dark') {
            if(validateNumber()) {
                for (const c of number) {
                    total += Number(c) * (2 ** i);
                    i--;
                }
                setConvertedNumber(total);
                setIsConvertedNumberModalOpen(true);
            }
        }else {
            if(validateNumber()) {
                while(num > 0) {
                    if (num % 2 === 0) {
                        totalStr.unshift('0');
                        num = Math.trunc(num / 2);
                    } else {
                        totalStr.unshift('1');
                        num = Math.trunc(num / 2);
                    }
                }
                setConvertedNumber(Number(totalStr.join('')));
                setIsConvertedNumberModalOpen(true);
            }
        }
        
    }

    function closeModal () {
        setIsConvertedNumberModalOpen(false);
    }

    return(
        <div id="container">
            {theme === 'dark' ? (
                <div className={dark.binaryConverterContainer}>
                    {isBinary ? <p></p> : <p>You entered a non-binary digit (please enter only 0 or 1).</p> }
                    <input type="text" placeholder="Your Number" onChange={handleChange}/>
                    <button type="button" onClick={convertNumber}>Convert</button>
                    {isConvertedNumberModalOpen && <ConvertedNumberModal onClose={closeModal}>{convertedNumber}</ConvertedNumberModal>}
                </div>
            ) :(
                <div className={light.binaryConverterContainer}>
                    {isDecimal ? <p></p> : <p>You entered a non-number digit (please enter only numbers).</p> }
                    <input type="text" placeholder="Your Number" onChange={handleChange}/>
                    <button type="button" onClick={convertNumber}>Convert</button>
                    {isConvertedNumberModalOpen && <ConvertedNumberModal onClose={closeModal}>{convertedNumber}</ConvertedNumberModal>}
                </div>
            ) }
        </div>
    );
}

export default BinaryConverter;