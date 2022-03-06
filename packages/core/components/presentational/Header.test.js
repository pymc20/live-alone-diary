import {render} from '@testing-library/react'
import 'jest-styled-components'
import HeaderWrapper from "@presentational/Header";

test('it works', () => {
  const {container} = render(<HeaderWrapper />)
  expect(container.children[0]).toMatchSnapshot()
  expect(container.children[0]).toHaveStyleRule('display', 'flex')
})