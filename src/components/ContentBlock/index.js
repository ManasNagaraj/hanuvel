import LeftContentBlock from './LeftContentBlock';
import RightContentBlock from './RightContentBlock';

import RightContentBlockIntro from './RightContentBlockIntro';

const ContentBlock = (props) => {
  if (props.type === 'left') return <LeftContentBlock {...props} />;
  if (props.type === 'right') return <RightContentBlock {...props} />;
  if (props.type === 'intro') return <RightContentBlockIntro {...props} />;

  return null;
};

export default ContentBlock;
