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
              <S.Content style={{ fontSize: 20 }}>
                Leverage our expertise across our core services to provide a
                sophisticated approach to brand development. Merged with your
                business strategy, this collaborative approach is critical in
                developing engaging brands for every audience that get attention
                and earn loyalty.{' '}
              </S.Content>
              {button ? (
                <Button
                  name='submit'
                  type='submit'
                  onClick={() => scrollTo('mission')}
                >
                  {t(button)}
                </Button>
              ) : (
                ''
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
