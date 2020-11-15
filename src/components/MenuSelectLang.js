import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import MenuIcon from './MenuIcon'
import '../styles/index.sass'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context'
import { Box, Text, Flex } from 'rebass'
const MenuSelectLang = (props) => {
    const { changeLanguage } = useContext(SnipcartContext)

    const links = props.langs
        ? props.langs.map((lang) =>
              lang.selected === false ? (
                  <Link to={lang.link}>
                      <Box key={lang.langKey} onClick={() => changeLanguage(lang.langKey)}>
                          <Box pl='5px' flex={1}>
                              <MenuIcon name='idiomaIcon' color='white' />
                          </Box>
                          <Text>{lang.langKey === 'es' ? 'Español' : 'English'}</Text>
                      </Box>
                  </Link>
              ) : null
          )
        : null

    return <Box>{links}</Box>
}

MenuSelectLang.propTypes = {
    langs: PropTypes.array,
}

export default MenuSelectLang
