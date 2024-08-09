'use client'
import { Box, Container, Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import ToggleThemeButton from "./toggle-theme-button";
import Link from "next/link";


const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inActiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inActiveColor}
      target={target}
      {...props}
    >{children}</Link>
  )

}


const Navbar = (props) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: "none", md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/wallpapers" path={path}>
            Wallpapers
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
        </Stack>
        <Box>
          <ToggleThemeButton />
        </Box>
      </Container>

    </Box>

  )


}

export default Navbar;
