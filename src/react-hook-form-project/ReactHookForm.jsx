import React, { useState } from 'react'
import { LoginPage } from './LoginPage';
import RegisterPage from './RegisterPage';

const ReactHookForm = () => {
    const [isPage, setIsPage] = useState(!false)

    return (
        <>
            {
                isPage ? (
                    <RegisterPage setIsPage={setIsPage} />
                ) : (
                    <LoginPage setIsPage={setIsPage} />
                )
            }
        </>
    )
}

export default ReactHookForm