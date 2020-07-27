/** @jsx jsx */
import { jsx, Styled, css, Container, Flex, Link } from 'theme-ui'
import { Global } from '@emotion/core'
import Metas from './metas'
import 'typeface-roboto'

export default function Layout({ children }) {

	return (
    <Styled>
      <Global 
        styles={
          css({
            '::selection': {
              backgroundColor: 'text',
              color: 'background'
						},
						'span': {
							color: 'primary'
						}
          })
        }
      />
      <Metas />
      <Container>
        <main>
          { children }
        </main>
				<Flex
					as= 'footer'
					variant= 'flex.footer'
				>
					<Link
						variant= 'links.primary'
						href= '/'
						title= 'alexperronnet.com'
					>
						Made by @alexperronnet
					</Link>
					<Link
						variant= 'links.primary'
						href= 'https://github.com/alexperronnet/alexperronnet.com'
						target= '_blank'
						rel= 'noreferrer'
						title= 'Under MIT'
					>
						View source
					</Link>
				</Flex>
      </Container>
    </Styled>
  )
}
