import styled from 'styled-components';

import {
  typography,
  space,
  color,
  layout,
  flexbox,
  gridGap,
} from 'styled-system';

const Box = styled('div')(typography, space, color, layout, flexbox, gridGap);

export default Box;
