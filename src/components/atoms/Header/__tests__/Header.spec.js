import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../Header.fixture'

const { mount, getWrapper } = createTestContext({fixture})

beforeEach(mount)

describe('#Header atom', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })
)
