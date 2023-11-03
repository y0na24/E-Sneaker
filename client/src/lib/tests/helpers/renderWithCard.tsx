import { Card } from '@nextui-org/react'
import { render } from '@testing-library/react'
import { ReactElement } from 'react'

export const renderWithCard = (component: ReactElement) => {
	return render(<Card>{component}</Card>)
}
