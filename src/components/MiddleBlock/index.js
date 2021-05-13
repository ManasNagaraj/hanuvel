import { lazy } from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

import * as S from './styles';

const Button = lazy(() => import('../../common/Button'));

const MiddleBlock = ({ title, content, button, t }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <S.MiddleBlock>
      <Row type='flex' justify='center' align='middle'>
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>Get help from the best in the business</h6>
              <S.Content>
                We help organizations across the private, public, and social
                sectors create the Change that Matters most to them. Our clients
                rely on HANUVEL’s global team to connect with powerful insight
                across fields from our network and experts{' '}
              </S.Content>
              {/* {button ? (
                <Button
                  name='submit'
                  type='submit'
                  onClick={() => scrollTo('mission')}
                >
                  {t(button)}
                </Button>
              ) : (
                ''
              )} */}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
