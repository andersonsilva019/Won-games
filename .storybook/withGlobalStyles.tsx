import { StoryFn } from '@storybook/addons'
import GlobalStyles from '../src/styles/GlobalStyles'

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    <GlobalStyles/>
    {storyFn()}
  </>
)

export default withGlobalStyles

