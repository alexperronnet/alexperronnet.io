/** @jsx jsx */
import { jsx, Heading, Text, Link, Grid, Box } from 'theme-ui'
import Layout from '../components/layout'

export default function Index() {

  const email =
    <Link
      variant= 'links.primary'
      href= 'mailto:alex@alexperronnet.io'
      title= 'Send an email'
    >
      alex@alexperronnet.io
    </Link>

  const Paragraph = ({ children }) => {
    return (
      <Text
        as='p'
        variant= 'text.paragraph'
      >
        { children }
      </Text>
    )
  }

  const Social = ({ href, title }) => {
    return (
      <Link
        variant= 'links.buttons'
        href= { href }
        target= '_blank'
        rel= 'noreferrer'
        title= { title }
      >
        { title }
      </Link>
    )
  }

  return (
    <Layout>
      <Heading
        as= 'h1'
        variant= 'heading.h1'
      >
        Alex Perronnet
      </Heading>
      <Paragraph>
        Hello everyone, welcome to my personnal website.
      </Paragraph>
      <Paragraph>
        I'm Alex Perronnet, a french freelance <b>developer</b> and <b>designer</b>.
        I'm also an <b>open-source contributor</b> and a <b>content creator</b>.
        <br />
        <br />
        <b>Follw me everywhere:</b> @alexperronnet
      </Paragraph>
      <Heading
        as= 'h2'
        variant= 'heading.h2'
      >
        <span>&#8249;</span> What can i do ? <span>/&#8250;</span>
      </Heading>
      <Grid
        sx= {{
          marginBottom: 5
        }}
        gap= { 3 }
        columns= {[ 2, null, 4 ]}
      >
        <Box variant= 'boxs.skills'>HTML / CSS</Box>
        <Box variant= 'boxs.skills'>JavaScript</Box>
        <Box variant= 'boxs.skills'>React</Box>
        <Box variant= 'boxs.skills'>Angular</Box>
        <Box variant= 'boxs.skills'>Vue</Box>
        <Box variant= 'boxs.skills'>JAMstack</Box>
        <Box variant= 'boxs.skills'>PHP</Box>
        <Box variant= 'boxs.skills'>Ruby</Box>
        <Box variant= 'boxs.skills'>Rails</Box>
        <Box variant= 'boxs.skills'>NodeJS</Box>
        <Box variant= 'boxs.skills'>Figma</Box>
        <Box variant= 'boxs.skills'>Adobe</Box>
      </Grid>
      <Paragraph>
        <b>Profile:</b> Junior
      </Paragraph>
      <Heading
        as= 'h2'
        variant= 'heading.h2'
      >
        <span>&#8249;</span> How to contact me ? <span>/&#8250;</span>
      </Heading>
      <Paragraph>
        I'm open to lots of new <b>opportunities</b>, <b>freelance</b> or a <b>fulltime position</b>.
        Feel free to contact me by email at { email }
      </Paragraph>
      <Grid
        sx= {{
          marginTop: 5
        }}
        gap= { 3 }
        columns= {[ 1, null, 3 ]}
      >
        <Social href= 'https://github.com/alexperronnet' title= 'Github' />
        <Social href= 'https://behance.net/alexperronnet' title= 'Behance' />
        <Social href= 'https://linkedin.com/in/alexperronnet' title= 'Linkedin' />
      </Grid>
    </Layout>
  )
}
