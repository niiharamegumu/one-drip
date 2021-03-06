import { Button } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { RiMoreFill } from 'react-icons/ri'

type Props = {
  onClickHnadler?: () => void
}

// eslint-disable-next-line react/display-name
const DotButton: FC<Props> = memo((props) => {
  const { onClickHnadler } = props
  return (
    <Button type="button" color="sTHeading" fontSize="36px" onClick={onClickHnadler}>
      <RiMoreFill />
    </Button>
  )
})

export default DotButton
