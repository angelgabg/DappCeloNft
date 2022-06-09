import { ethers, BigNumber} from 'ethers';  //se usa la libreria para interfaz grafica ethers
import NFT from './NFT.json';   
import {Box, Button, Flex, Text} from '@chakra-ui/react';                                                                                      

//Aqui se coloca la direccion del contrato desplegado previamente
const NFTAddress =  '0x00DC93Ce39dAE43C9afAA7A1af35835350d52b07' 

const MainMint = ({ accounts}) =>{
    const mintAmount =1;    
    const isConnected = Boolean(accounts[0]);

    async function handleMint(){
        if (window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            NFTAddress,
            NFT.abi,                    
            signer
        );
        try{
            const response = await contract.mint(BigNumber.from(mintAmount), {
value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
            });
            alert("Satisfactory minted NFT")
            console.log('response: ', response);
        } catch(err){
            console.log("error: ",err);
        }
        }
    }

    return(
        
        <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
        <Box width="520px">
            <div>
                <Text  fontSize="65px" textShadow="0 5px #000000">NFT</Text>
                <Text  fontSize="40px" letterSpacing="-5.5%"  textShadow="0 5px #000000">Mint your own NFT in Celo's Blockchain</Text>
                
            </div>
            <text fontSize="65px" textShadow="0 5px #000000">Price 0.02 Celo</text>
            {isConnected ? (
                <Flex  padding="15px" marginTop="10px">
                    <Button backgroundColor="rgb(250, 108, 50)" fontFamily="heading" fontSize="20px" cursor="pointer" borderRadius="5px" boxShadow="0px 2px 2px 1px #0F0F0F" margin="auto" onClick={handleMint}>Mint Now</Button>
                </Flex>
            ) : (
                <p>You are not connected yet.</p>
            )}
            <Box marginTop="250px" boxShadow=" 0px 2px 2px 1px #0F0F0F">
                <Text fontSize="0.7em">Created By: Agustin Vessoni & Angel Gonzalez</Text>
            </Box>
            </Box>
        </Flex>
    );
};

export default MainMint;
