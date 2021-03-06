import { useState, Fragment, lazy } from 'react';
import { Row, Col, Drawer } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { withTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import * as S from './styles';

const SvgIcon = lazy(() => import('../../common/SvgIcon'));
const Button = lazy(() => import('../../common/Button'));

//TODO add responsive element for mobile justify content

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={() => scrollTo('about')}>
          <S.Span>{t('Home')}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('whyus')}>
          <S.Span>{t('About us')}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('product')}>
          <S.Span>{t('Services')}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: '180px' }}
          onClick={() => scrollTo('contact')}
        >
          <S.Span>
            <Button>{t('Contact')}</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6,
      }}
    >
      {' '}
      <S.Header>
        <S.Container>
          <Row type='flex' gutter={20} justify='space-around'>
            {/* <S.LogoContainer to='/' aria-label='homepage'></S.LogoContainer> */}
            <S.NotHidden>
              <MenuItem />
            </S.NotHidden>
            <S.Burger onClick={showDrawer}>
              <S.Outline />
            </S.Burger>
          </Row>
          <CSSTransition
            in={!isSmallScreen || isNavVisible}
            timeout={350}
            classNames='NavAnimation'
            unmountOnExit
          >
            <Drawer closable={false} visible={visible} onClose={onClose}>
              <Col style={{ marginBottom: '2.5rem' }}>
                <S.Label onClick={onClose}>
                  <Col span={12}>
                    <S.Menu style={{ color: '#000', fontSize: '1rem' }}>
                      Menu
                    </S.Menu>
                    <S.Menu style={{ color: '#000', fontSize: '1rem' }}>
                      About
                    </S.Menu>
                    <S.Menu style={{ color: '#000', fontSize: '1rem' }}>
                      {' '}
                      Services
                    </S.Menu>
                  </Col>
                  <Col span={12}>
                    <S.Outline padding='true' />
                  </Col>
                </S.Label>
              </Col>
              <MenuItem />
            </Drawer>
          </CSSTransition>
        </S.Container>
      </S.Header>
    </motion.div>
  );
};

export default withTranslation()(Header);
