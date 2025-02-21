import React from 'react';
import { Text } from 'react-native';

const UserText = ({ creator }) => {
    return (
        <Text className='text-2xl font-semibold text-white'>
            {creator}
        </Text>
    );
};

export default UserText;
