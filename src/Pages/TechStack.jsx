import React from 'react';
import Layout from './Layout';
import { techstackIcon } from '../Components/Content';
import { CircularProgress, Typography, Box, colors } from '@mui/material';

const CircularSkill = ({ skill, value }) => {
    return (
        <Box sx={{ textAlign: 'center', m: 2 }}>
            <Typography variant="body1">{skill}</Typography>
            <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={value} size={80} sx={{ color: 'blue' }} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="caption" component="div">{`${value}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
};
function TechStack() {
    return (
        <Layout>
            <div className="flex justify-center my-5">
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {techstackIcon.map((data, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <div className="flex w-20 h-20 justify-center items-center mb-[-20px]">
                                {React.cloneElement(data.icon, { className: `w-16 h-16 ${data.color}` })}
                            </div>
                            {/* <h3 className="text-xl">{data.title}</h3> */}
                            <CircularSkill skill={data.title} value={data.value} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default TechStack;
