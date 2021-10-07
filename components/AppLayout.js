import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>홈</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            <div>공통메뉴</div>
            {children}
        </div>
    )
}

// children 값이 있는지 체크하기 위한 용도
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;