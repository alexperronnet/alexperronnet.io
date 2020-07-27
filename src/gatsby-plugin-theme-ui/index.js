export default {
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    primary: '#107EF4'
  },
  sizes: {
    container: '85ch'
  },
  fonts: {
    body: '"Roboto", system-ui, sans-serif',
    heading: '"Roboto", system-ui, sans-serif'
  },
  fontSizes: [
    12, 14, 16, 18, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  heading: {
    fontWeight: 'heading',
    lineHeight: 'heading',
    h1: {
      fontSize: 7,
      marginY: 5
    },
    h2: {
      fontSize: 5,
      marginY: 5
    }
  },
  text: {
    paragraph: {
      borderLeft: 'solid 3px',
      borderColor: 'primary',
      padding: 3
    }
  },
  links: {
    primary: {
      color: 'inherit',
      textDecoration: 'none',
      borderBottom: 'dashed 1px',
      borderColor: 'currentColor',
      ':hover': {
        color: 'primary',
      },
    },
    buttons: {
      textAlign: 'center',
      fontSize: 1,
      display: 'inline-block',
      textDecoration: 'none',
      padding: 2,
      backgroundColor: 'text',
      color: 'background',
      borderRadius: '2px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
      '&:hover': {
        backgroundColor: 'primary',
        color: 'background'
      }
    }
  },
  boxs: {
    skills: {
      textAlign: 'center',
      fontSize: 1,
      color: 'text',
      border: 'solid 2px',
      padding: 2,
      boxShadow: '4px 4px #107EF4',
      borderRadius: '2px'
    }
  },
  flex: {
    footer: {
      justifyContent: 'space-between',
      fontSize: 2,
      marginY: 5
    }
  },
  styles: {
    root: {
      fontSize: 3,
      paddingX: 4,
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  }
}
