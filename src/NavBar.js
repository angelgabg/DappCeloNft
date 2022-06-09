import React from 'react';
import {Box, Button, Flex} from '@chakra-ui/react';



const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
if (window.ethereum) {
    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    setAccounts(accounts);
    }
    }

    return(
        <Flex justify="space-between"  align="center" padding="30px">
        {/*3 divs para redes sociales - seccion izquierda*/}
            <div></div>
            <div></div>
            <div></div>

        {/*3 divs para secciones/rutas - seccion derecha*/}
        
            <Flex justify="flex-end" width="40%"padding="30px">

                {/*boton de coneccion*/}
                {isConnected ? (
                <Box   >Connected</Box>
                ) : (
                <Button 
                backgroundColor="black"
                borderRadius="5px"
                boxShadow="0px 2px 2px 1px #0F0F0F"
                color="white"
                fontFamily="inherit"
                fontSize="18px"
                padding="15px"
                margin="0 15px"
                onClick={connectAccount}>Connect</Button>
        )}
            </Flex>
        </Flex>
    );
};

export default NavBar;