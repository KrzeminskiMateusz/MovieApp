import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RMDBLogo from '../../images/react-movie-logo.svg'
import { UserContext } from '../../context'
import { Wrapper, Content, LogoImg } from "./Header.styles";

const Header: React.FC = () => {
    const { user } = useContext(UserContext)

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
				<p>TESTST</p>
                {user ?
                    <span >Logged in as {user.username}</span>
                    :
                    <Link to='/login'>
                        <span >Log in</span>
                    </Link>
                }
            </Content>
        </Wrapper>
    )
}

export default Header