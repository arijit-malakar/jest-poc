import { render, screen } from '@testing-library/react'
import CheckByTestId from './check-by-test-id'

describe('CheckByTestId', () => {
  it('should render a div with some text', () => {
    render(<CheckByTestId />)
    const div = screen.getByTestId('my-div')
    expect(div).toHaveTextContent('Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!')
  })
})
