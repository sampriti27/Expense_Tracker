import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useTransactions from '../../useTransactions';
import { Doughnut } from 'react-chartjs-2';



export default function Tabs({ title }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const { chartData } = useTransactions(title);

    return (
        <>

            {
                title === "Income" ? (
                    <>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Total Income" value="1" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1"> <Doughnut data={chartData} />  </TabPanel>

                            </TabContext>
                        </Box>
                    </>
                ) : (
                    <>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Total Expense" value="1" />
                                        <Tab label="Daily Expense" value="2" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1"> <Doughnut data={chartData} />  </TabPanel>
                                <TabPanel value="2">Blah Blah</TabPanel>
                            </TabContext>
                        </Box>
                    </>
                )
            }
        </>
    );
}
