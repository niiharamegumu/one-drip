import { Box, Button, Flex, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Logo from '@/components/atoms/Logo'
import FullScreenCenter from '@/components/template/FullScreenCenter'
import { useAuth } from '@/hooks/auth/useAuth'
import { useCurrentUser } from '@/hooks/auth/useCurrentUser'
import { useInitalLoading } from '@/hooks/useInitalLoading'
import { login } from '@/libs/firebase/auth'

const Home: NextPage = () => {
  const isLoading = useInitalLoading(1500)
  const isComplete = useAuth()
  const { isAuth } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if (isAuth) router.push('/mypage')
  }, [router, isAuth])

  if (isLoading) {
    return (
      <FullScreenCenter>
        <Logo />
      </FullScreenCenter>
    )
  }

  if (!isComplete) {
    return (
      <FullScreenCenter>
        <p>認証中...</p>
      </FullScreenCenter>
    )
  }

  return (
    <>
      {!isAuth ? (
        <FullScreenCenter>
          <Flex flexDirection="column" gap={7}>
            <Box margin="auto">
              <Logo />
            </Box>
            <Button type="button" onClick={login} display="block" m="auto" w="80%">
              <Image
                src="/google_login.png"
                alt="google logoin button"
                w="100%"
                h="40px"
                objectFit="cover"
              />
            </Button>
          </Flex>
        </FullScreenCenter>
      ) : null}
    </>
  )
}

export default Home
