import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import Head from 'next/head';

const Index = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const RenderContent = () => {
        switch (value) {
            case 0: return <> Section 1 Selected</>
            case 1: return <> Section 2 Selected</>
            default: return <>No Section Selected</>
        }
    }

    return (
      <>
      <Head>
        <title>Crypto App</title>
        <meta name="description" content="Developed By AMKZ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Box sx={{ width: '100%' }} component={'main'}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Supported Cryptocurrencies"  />
                    <Tab label="Crypto List "  />
                </Tabs>
            </Box>
            <RenderContent />

        </Box>
      </>
    )
}

export default Index