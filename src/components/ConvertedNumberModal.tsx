import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import dark from '../styles/components/ConvertedNumberModalDark.module.css';
import light from '../styles/components/ConvertedNumberModalLight.module.css';


interface ConvertedNumberModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const ConvertedNumberModal = ({onClose, children}: ConvertedNumberModalProps) => {
    const{theme} = useContext(ThemeContext);

    return(
        <div>
            {theme === 'dark' ? (
                <div className={dark.overlay}>
                    <div className={dark.container}>
                        <header>{children}</header>
                        <button type="button" onClick={onClose}>
                            <img src="/icons/close.svg" alt="Fechar modal"/>
                        </button>
                    </div>
                </div>
            ) : (
                <div className={light.overlay}>
                    <div className={light.container}>
                        <header>{children}</header>
                        <button type="button" onClick={onClose}>
                            <img src="/icons/close.svg" alt="Fechar modal"/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ConvertedNumberModal;