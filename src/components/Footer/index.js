import { lazy, Fragment } from 'react';
import { Row, Col } from 'antd';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

import * as S from './styles';

const SvgIcon = lazy(() => import('../../common/SvgIcon'));
const Container = lazy(() => import('../../common/Container'));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            {/* <Row type='flex' justify='space-between'>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t('Contact')}</S.Language>
                <S.Large>{t('Tell us everything')}</S.Large>
                <S.Para>
                  {t(`Do you have any question? Feel free to reach out.`)}
                </S.Para>
                <a href='mailto:info@hanuvel.com'>
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
                <a href='mailto:legal@hanuvel.com'>
                  <S.Chat>{t(`Grievance`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Policy')}</S.Title>
                <S.Large to='/' left='true'>
                  {t('Application Security')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Software Principles')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left='true' to='/'>
                  {t('Support Center')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Customer Support')}
                </S.Large>
              </Col>
            </Row> */}
            <Row type='flex' justify='space-between'>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t('ADDRESS')}</S.Language>
                <S.Para>Rajesh Chambers, Ashok Nagar,</S.Para>
                <S.Para> MG Road, Craig Park Layout, </S.Para>
                <S.Para>Bangalore Karnataka - 560025</S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t('Company')}</S.Title>
                <S.Large left='true' to='/'>
                  {t('About')}
                </S.Large>
                <S.Large left='true' to='/'>
                  {t('Blog')}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.NavLink to='/'>
                  <S.LogoContainer></S.LogoContainer>
                </S.NavLink>
                <S.FooterContainer>
                  <SocialLink href='' src='twitter.svg' />
                  <SocialLink href='' src='linkedin.svg' />
                  <SocialLink href='' src='instagram.svg' />
                  <SocialLink href='' src='medium.svg' />
                </S.FooterContainer>
              </Col>
            </Row>
          </Container>
        </S.Footer>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
