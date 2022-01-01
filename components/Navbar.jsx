import Link from "next/link";
import { Menu,MenuButton,MenuList,MenuItem,IconButton,Flex,Box,Spacer } from "@chakra-ui/react";
import {FcHome,FcMenu,FcAbout}  from 'react-icons/fc';
import {FiSearch}  from 'react-icons/fi';
import {FiKey}  from 'react-icons/fi';
import { MdRealEstateAgent } from "react-icons/md";


const Navbar=()=>(
<Flex p={'2'} borderBottom={'1px'} borderColor={'gray.100'}>
<Box fontSize={'5xl'} color={'black.100'} fontWeight={'bold'}>
    <Link href={'/'} paddingLeft="2" passHref ><MdRealEstateAgent cursor={'pointer'} /></Link>
</Box>
<Spacer/>
<Box>
    <Menu>
        <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" />
    <MenuList>

        <Link href={'/'} passHref>
        <MenuItem icon={<FcHome/>}>Home</MenuItem>
        </Link>

        <Link href={'/search'} passHref>
        <MenuItem icon={<FiSearch/>}>Search</MenuItem>
        </Link>

        <Link href={'/search?purpose=for-sale'} passHref>
        <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
        </Link>

        <Link href={'/search?purpose=for-rent'} passHref>
        <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
        </Link>
    </MenuList>
    </Menu>
</Box>
</Flex>

)

export default Navbar;