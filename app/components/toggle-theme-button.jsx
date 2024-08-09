'use client'
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ToggleThemeButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial="false">
      <motion.div
        className="inline-block"
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme button"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
      </motion.div>

    </AnimatePresence>
  )

}

export default ToggleThemeButton;
