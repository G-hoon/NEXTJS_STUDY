import { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

// div 태그이면서, css 가 적용된 button wrapper component => 렌더링 최적화 용도
// re-render 할 때마다, div 태그 다시 생성하지 않기 위함 
// (ex: {{marginTop: 10}} !== {{marginTop: 10}} 이므로(객체이기 때문에), 변경됐다고 판단하여 다시 렌더링 함 )
const ButtonWrappter = styled.div`
    margin-top: 10px;
`;

// 함수형 컴포넌트에서 re-rendering이 될 경우에 함수 내에 있는 모든 코드가 처음부터 끝까지 다시 시작된다.
// useCallback이랑 useMemo의 배열 값이 변화하지 않을 경우, 바뀐 것이 없다고 체크하여 다음 코드로 이동 return (...) 에서 바뀐 부분만 다시 렌더링 
const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    // useCallback: 함수를 캐싱하기 위한 용도
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    // useMemo: 값을 캐싱 / re-rendering 최적화. => re-rendering을 방지하는 방법은 styled-component와 useMemo 두가지 방법이 있다.
    const style = useMemo(() => ({ marginTop: 10}), [])
    
    return (
        <Form>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrappter style={style}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrappter>
        </Form>
    );
}

export default LoginForm;