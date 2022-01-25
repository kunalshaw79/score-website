import { styled } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { colors } from './colors'

export const StyledTypographyWhite = styled(Typography)(() => ({
  fontFamily: 'Roboto , sans-serif',
  fontWeight: '400',
  color: colors.white,
  display: 'inline-block'
}))
