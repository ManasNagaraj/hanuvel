import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

import SvgIcon from '../../../common/SvgIcon';

import * as S from './styles';

const LeftContentBlock = ({
  icon,
  title,
  titleSize,
  contentSize,
  content,
  section,
  t,
  id,
}) => {
  return (
    <S.LeftContentBlock>
      <Row type='flex' justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={12} xs={24} style={{ overflow: 'hidden' }}>
          <Slide>
            <SvgIcon
              src={icon}
              className='about-block-image'
              height='430vw'
              style={{ backgroundPosition: 'center' }}
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6 style={{ fontSizeAdjust: t(titleSize) }}>{t(title)}</h6>
              <S.Content style={{ fontSizeAdjust: t(contentSize) }}>
                {t(content)}
              </S.Content>
              <S.ServiceWrapper>
                <Row type='flex' justify='space-between'>
                  {section &&
                    typeof section === 'object' &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width='60px' height='60px' />
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          <S.MinPara>{t(item.content)}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default withTranslation()(LeftContentBlock);
