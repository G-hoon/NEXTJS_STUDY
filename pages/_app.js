// pages 안의 공통되는 것들 처리할 수 있음.
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
    return (
        <>
            {/* HTML Head 태크 */}
            <Head>
                <meta charSet="utf-8" />
                <title>Node Bird</title>
            </Head>
            <Component />
        </>
    )
}

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;