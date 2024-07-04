import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaCartShopping } from "react-icons/fa6";
import * as S from './styles';

import logo from '../../assets/images/logo.svg';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <S.HeaderBar>
            <S.HeaderRow>
                <div>
                    <S.Hamburguer>
                        <span />
                        <span />
                        <span />
                    </S.Hamburguer>
                    <Link to="">
                        <h1>
                            <img src={logo} alt="ELOIN" />
                        </h1>
                    </Link>
                    <nav>
                        <S.Links>
                            <S.LinkItem>
                                <Link title='Clique aqui para acessar a página de categorias'
                                    to='/categories'
                                >
                                    Categorias
                                </Link>
                            </S.LinkItem>
                            <S.LinkItem>
                                <HashLink
                                    title='Clique aqui para acessar a seção de em breve'
                                    to='/#coming-soon'
                                >
                                    Em breve
                                </HashLink>
                            </S.LinkItem>
                            <S.LinkItem>
                                <HashLink
                                    title='Clique aqui para acessar a seção de promoções'
                                    to='/#on-sale'
                                >
                                    Promoções
                                </HashLink>
                            </S.LinkItem>
                        </S.Links>
                    </nav>
                </div>
                <S.CartButton role='button'>
                    <span>0 - produto(s)</span>
                    <FaCartShopping size={23} />
                </S.CartButton>
            </S.HeaderRow>
            <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
                <S.Links>
                    <S.LinkItem>
                        <Link
                            title='Clique aqui para acessar a página de categorias'
                            to='/categories'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Categorias
                        </Link>
                    </S.LinkItem>
                    <S.LinkItem>
                        <HashLink
                            title='Clique aqui para acessar a seção de em breve'
                            to='/#coming-soon'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Em breve
                        </HashLink>
                    </S.LinkItem>
                    <S.LinkItem>
                        <HashLink
                            title='Clique aqui para acessar a seção de promoções'
                        >
                            Promoções
                        </HashLink>
                    </S.LinkItem>
                </S.Links>
            </S.NavMobile>
        </S.HeaderBar>
    )
}

export default Header;