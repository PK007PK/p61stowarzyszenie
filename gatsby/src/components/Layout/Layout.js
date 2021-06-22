import React from 'react';
import GlobalStyles from 'src/styles/GlobalStyles';
import Typography from 'src/styles/Typography';
import Navbar from 'src/components/Navbar/Navbar';
import Footer from 'src/components/Footer/Footer';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <Navbar />
        {children}
        <Footer />
    </>
);

export default Layout;
