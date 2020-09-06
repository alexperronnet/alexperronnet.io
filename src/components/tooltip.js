import Tooltip from "@material-ui/core/Tooltip"
import { withStyles } from '@material-ui/core/styles'

const defaultConfig = require("tailwindcss/defaultConfig")

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: defaultConfig.theme.colors.green[200],
    color          : defaultConfig.theme.colors.green[800],
    borderRadius   : defaultConfig.theme.borderRadius.none,
    fontSize       : defaultConfig.theme.fontSize.xs
  },
  arrow: {
    color: defaultConfig.theme.colors.green[200]
  }
}))(Tooltip);

export default CustomTooltip
