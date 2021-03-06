import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Card } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);
    return (
        <Card
            actions={[
                <div key="twit">쨱쨱<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>ZC</Avatar>}
                title="ZeroCho"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
        )
}

UserProfile.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired
}

export default UserProfile;