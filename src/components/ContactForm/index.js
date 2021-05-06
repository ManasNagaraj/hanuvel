import { lazy } from 'react';
import { Row, Col } from 'antd';
import Zoom from 'react-reveal/Zoom';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';

import useForm from './useForm';
import validate from './validationRules';

import * as S from './styles';
const Block = lazy(() => import('../Block'));
const Button = lazy(() => import('../../common/Button'));

const InputField = ({ id, name, placeholder, onChange, t }) => (
  <SContainer>
    <SInput
      spellcheck='false'
      placeholder={placeholder}
      name={name}
      id={name}
      onChange={onChange}
    />
  </SContainer>
);

const TextArea = ({ name, id, placeholder, onChange, t }) => (
  <SContainer>
    <STextArea
      spellcheck='false'
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </SContainer>
);

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type='flex' justify='space-between' align='middle'>
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete='off' onSubmit={handleSubmit}>
              <Col span={24}>
                <InputField
                  type='text'
                  name='name'
                  id='Name'
                  placeholder='Name'
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <ValidationType type='name' />
              </Col>
              <Col span={24}>
                <InputField
                  type='text'
                  name='email'
                  id='Email'
                  placeholder='Email'
                  value={values.email || ''}
                  onChange={handleChange}
                />
                <ValidationType type='email' />
              </Col>
              <Col span={24}>
                <STextArea
                  placeholder='Message'
                  value={values.message || ''}
                  name='message'
                  id='Message'
                  onChange={handleChange}
                />
                <ValidationType type='message' />
              </Col>
              <S.ButtonContainer>
                <Button name='submit' type='submit'>
                  {t('Submit')}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);

const SContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

const SInput = styled.input`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  outline: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-radius: 8px;
  color: #000;

  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`;

export const STextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  transition: border-color 0.3s ease-in;

  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`;
