import { Box, Container} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tours from './Tours'

const Home = () => {
    const [signedIn, setSignedIn] = useState(false)

    useEffect(() => {
        setSignedIn((window.sessionStorage.getItem("token") != null));
    }, [])
    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                        {!signedIn ?
                            <div>Please <Link to="/signIn">sign in</Link> to browse tours.If you don't have account, <Link to="/signUp">create one!</Link> </div>
                            :
                            <Tours />}
                </Box>
            </Container>
        </>
    );
}

export default Home;