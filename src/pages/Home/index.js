import { lazy } from 'react';

import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import AboutContent from '../../content/AboutContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import ContactContent from '../../content/ContactContent.json';
import ComplianceFramework from '../../content/ComplianceFramewok.json';

const Ourservice = lazy(() => import('../../components/Ourservice'));
const ContactFrom = lazy(() => import('../../components/ContactForm'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type='intro'
        first='true'
        titleSize='1'
        contentSize='0.80'
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        display='hidden'
        // icon='developer.svg'
        id='intro'
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <h1>Our services</h1>

      <ContentBlock
        type='left'
        icon='b2.jpg'
        title='Organizational Development'
        content='
  Adopt a structure and tempo that enables agility, innovation and creates resilience.
  
  There is little advantage in fast detection and authentic response to opportunities if the exploitation is stifled by well-meaning but self-limiting bureaucracy and structure. It is time to stop managing the probable and start leading the possible.
  
  Many of the systems we use in business are focused on control as opposed to innovation and empowerment.
  
  Hanuvel Strategic has developed and designed methods and techniques that can simplify organisational design, Human Resource management, Information Technology and digital systems. These reduce cost and increase tempo.
  
  Our consultants understand the theory that underpins all our work. Our methods deliberately challenge the systems dynamics approach.'
      />
      <ContentBlock
        type='right'
        title='Strategic Ability'
        icon='b3.jpg'
        content='An authentic, real time response to complex situations.

        Traditional management techniques focus on planning and problem solving, often the tools we use are designed to create certainty and predictability. These approaches have limited utility in a world that is inherently uncertain and unpredictable – they are inauthentic.
        
        Successful companies are those who can let go of rigid management practices and embrace complexity. Successful leaders are those who can empower, guide and influence a network of employees, customers and suppliers.
        
        Hanuvel Strategic can guide you in developing a fast and responsive organisation. We utilise the framework for contextualisation and authentic decision making.
        
        We offer
        
        Board and Management training Our courses are tailored to meet the specific needs of your organisation and include'
        section={[
          {
            content:
              'Creating and Leading an Agile Organisation  Relationship management and business development  Persuasion and Influence  Creating and leading a resilient safety culture',
          },
        ]}
        id='mission'
      />

      <ContentBlock
        type='left'
        title='Team Development'
        icon='b4.jpg'
        content='Move form managing projects to empowering teams and provide advice.

      Adopt a mode of operation that explores and innovates, fails fast and learns quickly.
      Empower self-selected, self-directed teams to tackle complex issues or take advantage of emerging opportunities
      Harness creative friction for strategic advantage
      Turn risk management form a compliance issues into a competitive strategic advantage
      Encourage and utilise dissent and use creative friction to create a robust and resilient organisation'
      />
      <ContentBlock
        type='right'
        title={ComplianceFramework.title}
        content={ComplianceFramework.text}
        icon='compliance.svg'
        id='product'
      />

      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id='contact'
      />
    </Container>
  );
};

export default Home;
