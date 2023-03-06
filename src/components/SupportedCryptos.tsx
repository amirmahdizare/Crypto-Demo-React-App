import React from 'react'
import { LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useQuery, UseQueryResult } from 'react-query'

export const SupportedCryptos = () => {

    const { isLoading, error, data }: { isLoading: boolean, error: object | null, data: Array<string> | undefined } = useQuery('cryptoData', () =>
        fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies').then(res =>
            res.json()
        )
    )

    if (isLoading) return <LinearProgress />

    if (error) return <Typography color={'error.main'}  >An error has occurred</Typography>

    if (data)
        return (
            <TableContainer >
                <Table sx={{ width: {lg:'20%'} }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell align="left">Crypto Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((crypto, index) => (
                            <TableRow
                                key={crypto}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index}
                                </TableCell>
                                <TableCell align="left">{crypto}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )

    return <>Something Went Wrong</>
}
