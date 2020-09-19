import Tooltip from "@material-ui/core/Tooltip"
import { withStyles } from '@material-ui/core/styles'

const defaultConfig  = require("tailwindcss/defaultConfig")
const tailwindConfig = require("../../../tailwind.config")

const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: tailwindConfig.theme.colors.pink.background,
    color          : tailwindConfig.theme.colors.pink.foreground,
    borderRadius   : defaultConfig.theme.borderRadius.none,
    fontSize       : defaultConfig.theme.fontSize.xs
  },
  arrow: {
    color: tailwindConfig.theme.colors.pink.background
  }
}))(Tooltip);

export default CustomTooltip
