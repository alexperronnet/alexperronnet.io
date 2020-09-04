import Tooltip from "@material-ui/core/Tooltip"
import { withStyles } from '@material-ui/core/styles'

const defaultConfig = require("tailwindcss/defaultConfig")

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: defaultConfig.theme.colors.teal[200],
    color          : defaultConfig.theme.colors.teal[700],
    borderRadius   : defaultConfig.theme.borderRadius.none
  },
  arrow: {
    color: defaultConfig.theme.colors.teal[200]
  }
}))(Tooltip);

export default CustomTooltip
