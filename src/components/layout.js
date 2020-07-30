/** @jsx jsx */
import { jsx, Styled, css, Container, Flex, Link } from 'theme-ui'
import { Global } from '@emotion/core'
import Metas from './metas'

export default function Layout({ children }) {

  const GlobalCSS = () => {
    return (
      <Global
        styles= {
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
    )
  }

  return (
    <Styled>
      <GlobalCSS />
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
            title= 'alexperronnet.io'
          >
            Made by @alexperronnet
          </Link>
          <Link
            variant= 'links.primary'
            href= 'https://github.com/alexperronnet/alexperronnet.io'
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
