/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider, FormattedMessage } from 'react-intl'
import SelectLanguage from './SelectLanguage'
import MenuSelectLang from './MenuSelectLang'
import MenuIcon from './MenuIcon'
import LocalizedLink from '../utils/LocalizedLink'
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context'
import { Button, Pane, Text, TextInput } from 'evergreen-ui'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { Helmet } from 'react-helmet'
import '../styles/index.sass'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Box, Flex } from 'rebass'
import { Hide } from '@rebass/hide'

const LitteCart = () => {
    const { state } = useContext(SnipcartContext)
    const { cartQuantity, cartTotal } = state
    return (
        <Pane>
            <Pane>
                <Text>
                    <FormattedMessage id='itemsInCart' /> {cartQuantity}
                </Text>
            </Pane>
            <Pane>
                <Text>
                    <FormattedMessage id='cartTotal' /> ${cartTotal}
                </Text>
            </Pane>
            <Pane paddingTop={10}>
                <Button iconBefore='shopping-cart' className='snipcart-checkout'>
                    <FormattedMessage id='viewCart' />
                </Button>
            </Pane>
        </Pane>
    )
}

const RenderLogo = (props) => {
    return (
        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0' y='0' width='146' height='48' viewBox='0 0 73 24'>
            <path
                id='Path_17'
                fill='#41456a'
                d='M28.968 21.202a.55.55 0 01-.17-.42v-9.605a.659.659 0 01.163-.466.644.644 0 01.882 0c.112.129.17.296.162.466v8.649c.013.303.365.463.432.469h4.32c.15-.013.3.037.412.137a.607.607 0 010 .793.58.58 0 01-.411.138h-5.37a.585.585 0 01-.42-.16z'
            />
            <path
                id='Path_18'
                fill='#41456a'
                d='M42.21 16.728v4.147a.625.625 0 01-.154.442.543.543 0 01-.42.168.566.566 0 01-.427-.168.609.609 0 01-.162-.442v-.452c0-.012 0-.032.002-.056.002-.041.004-.049-.002-.056-.014-.016-.057-.011-.085.01-.02.016-.015.028-.04.077-.013.024-.015.021-.05.078l-.038.063c-.08.119-.17.229-.273.328a2.361 2.361 0 01-.368.289 2.448 2.448 0 01-1.324.359 2.81 2.81 0 01-1.272-.29 2.289 2.289 0 01-.92-.808 2.047 2.047 0 01-.338-1.144c0-.56.137-.994.412-1.304.275-.31.726-.533 1.353-.67.864-.158 1.74-.227 2.618-.206h.17a.476.476 0 00.056 0c.01 0 .014 0 .018-.002a.097.097 0 00.08-.068v-.01-.046-.088-.288s0-.073-.003-.158a2.055 2.055 0 00-.357-1.184c-.313-.378-.838-.427-1.17-.427a4.197 4.197 0 00-2.03.564c-.163.13-.354.219-.559.26a.37.37 0 01-.294-.138.518.518 0 01-.118-.35.592.592 0 01.125-.374c.114-.132.251-.243.404-.327.366-.213.76-.375 1.17-.48a5.003 5.003 0 011.301-.176c1.798 0 2.696.975 2.695 2.927zm-1.729 3.195c.388-.438.59-1.01.567-1.594v-.39-.015a.048.048 0 00-.035-.037.045.045 0 00-.02 0h-.211c-.467-.002-.855.013-1.14.03a7.967 7.967 0 00-.831.085c-.451.076-.772.203-.963.38a1.02 1.02 0 00-.287.786c-.01.373.144.732.42.983.287.262.664.402 1.052.389.55.016 1.08-.21 1.448-.618z'
            />
            <path
                id='Path_19'
                fill='#41456a'
                d='M50.011 20.517a.552.552 0 010 .716.526.526 0 01-.382.13h-5.15a.561.561 0 01-.412-.16.527.527 0 01-.162-.39.766.766 0 01.176-.472l3.604-4.492c0-.002.012-.015.027-.035l.012-.015a.974.974 0 01.048-.054.483.483 0 00.107-.22.51.51 0 00-.018-.304.473.473 0 00-.206-.235.576.576 0 00-.246-.074h-3.003a.573.573 0 01-.39-.13.445.445 0 01-.14-.342.49.49 0 01.14-.367.531.531 0 01.39-.136h4.987a.582.582 0 01.427.16.525.525 0 01.162.388.766.766 0 01-.176.473l-3.658 4.544-.02.024a.498.498 0 00-.115.605.5.5 0 00.509.255h3.107c.14-.013.28.035.382.13z'
            />
            <path
                id='Path_20'
                fill='#41456a'
                d='M57.638 13.952a.63.63 0 01.155.442v6.45a.603.603 0 01-.155.427.637.637 0 01-.853.007.58.58 0 01-.155-.42v-.537c0-.039.005-.043 0-.052a.068.068 0 00-.087-.01c-.013.009-.013.02-.026.043l-.048.074s-.024.037-.052.075a2.78 2.78 0 01-.392.426c-.108.089-.223.17-.344.24-.42.237-.894.358-1.375.35-.854 0-1.496-.246-1.928-.74-.43-.492-.647-1.222-.647-2.188v-4.147a.61.61 0 01.162-.442.586.586 0 01.441-.168c.162-.01.32.052.434.168a.63.63 0 01.155.442v4.117c0 .661.127 1.147.382 1.457.255.31.657.465 1.206.465a1.945 1.945 0 001.515-.633 2.39 2.39 0 00.575-1.67v-3.736a.61.61 0 01.162-.442.585.585 0 01.441-.168.561.561 0 01.434.17z'
            />
            <path
                id='Path_21'
                fill='#41456a'
                d='M70.37 16.696v4.132a.606.606 0 01-.162.45.58.58 0 01-.427.16.605.605 0 01-.434-.16.589.589 0 01-.169-.45v-4.1c0-.682-.117-1.175-.353-1.48-.235-.305-.603-.458-1.103-.458a1.733 1.733 0 00-1.412.626c-.343.417-.515.981-.515 1.692v3.721a.589.589 0 01-.169.45.606.606 0 01-.434.16.58.58 0 01-.426-.16.603.603 0 01-.162-.45v-4.102c0-.68-.118-1.174-.354-1.479-.235-.305-.608-.458-1.118-.458-.54-.021-1.06.21-1.405.625-.348.418-.523.982-.522 1.692v3.721a.604.604 0 01-.162.45.58.58 0 01-.427.16.606.606 0 01-.434-.16.589.589 0 01-.17-.45v-6.434a.578.578 0 01.604-.61.561.561 0 01.412.16c.111.117.17.274.162.435v.529c.004.024.087.035.103.014 0 0 0-.002.005-.008l.014-.022.114-.173c.172-.233.384-.433.626-.592l.035-.022c.403-.23.86-.351 1.323-.35a2.359 2.359 0 011.51.455 2.448 2.448 0 01.605.813l.02.045.012.03.007.018a.065.065 0 00.088 0l.011-.022.011-.02a1.702 1.702 0 01.033-.059l.048-.079c.047-.072.142-.206.201-.278a2.588 2.588 0 012.029-.903c1.59 0 2.386.98 2.385 2.941z'
            />
            <path
                id='Path_22'
                d='M24.886 10.727c-.041-.177-.144-.313-.32-.293-.235.028-.31.324-.36.555a2.753 2.753 0 01-2.028 2.053l-.035-7.286a1.006 1.006 0 00-.091-.506.346.346 0 00-.44-.162c-.163.093-.169.322-.155.51.125 1.736.115 3.48-.029 5.214-.385.168-.694-.605-1.09-.465-.306.109-.172.605.11.771.281.166.646.198.864.44.139.187.217.413.222.645a6.106 6.106 0 01-.526 3.191c-.943-.449-1.193-1.743-.852-2.731.11-.321.16-.829-.178-.855-.235-.019-.368.259-.425.487-.228.91-.309 1.931.174 2.736.285.475.735.823 1.175 1.158l1.246.951c.29.197.545.44.755.72.205.352.34.74.4 1.143.17.8.239 1.027.245 1.154.017.355.026.602-.114.874-.156.28-.405.5-.704.617a1.738 1.738 0 01-1.266.023 4.702 4.702 0 00.298-3.245c-.078-.288-.368-.632-.604-.45-.161.124-.106.374-.049.568.176.596.23 1.22.158 1.837-.046.38-.221.832-.602.87-.33.034-.6-.296-.645-.624-.045-.328.068-.655.142-.977.132-.57.146-1.19-.11-1.716a8.106 8.106 0 00-.628-.918c-1-1.496-.621-3.472-.704-5.27a.412.412 0 00-.105-.309.288.288 0 00-.395.091.836.836 0 00-.11.437c-.105 1.663-.192 3.416.554 4.907.266.532.634 1.015.834 1.576.2.56.197 1.252-.217 1.68-.435-.59-1.322-.818-1.548-1.515-.12-.372-.01-.777-.035-1.168-.06-.926-.88-1.716-.79-2.64.043-.2.059-.404.045-.608-.038-.2-.236-.393-.429-.326-.171.06-.224.272-.24.453a4.04 4.04 0 00.282 1.852c.21.519.536 1.022.519 1.582-.005.151-.069.335-.22.354a.328.328 0 01-.148-.026c-1.058-.38-1.462-1.717-1.285-2.827.177-1.11.764-2.108 1.085-3.185.627-2.095.22-4.342-.19-6.49-.038-.201-.133-.452-.339-.451-.254.002-.297.363-.257.614.22 1.333.465 2.67.465 4.022s-.26 2.735-.98 3.878a2.624 2.624 0 01-.652-1.678c-.005-.296-.074-.717-.37-.692-.205.017-.3.264-.312.47-.054.957.672 1.779.864 2.718a5.007 5.007 0 01-.017 1.572c-.024.208-.093.465-.3.496a.472.472 0 01-.269-.07 2.384 2.384 0 01-.994-.77c-.38-.585-.263-1.342-.235-2.038.065-1.63-.439-3.224-.937-4.778-.056-.172-.162-.381-.342-.365-.212.02-.25.312-.219.522.282 1.865 1.297 3.704.857 5.538a.375.375 0 01-.1.205c-.139.123-.352.006-.493-.115-1.861-1.59-2.972-3.884-3.802-6.19-.828-2.3-1.435-4.697-2.543-6.881-.05-.1-.115-.191-.192-.272a.502.502 0 00-.242-.168c-.168-.031-.281.15-.288.297a.639.639 0 00.093.294l.164.357a42.66 42.66 0 01.415.945c.97 2.32 1.589 4.775 2.57 7.09s2.4 4.553 4.538 5.876c.32.199.709.551.512.873a.636.636 0 01-.253.207 3.042 3.042 0 01-1.885.363 3.59 3.59 0 01-.65-.136 4.31 4.31 0 01-1.527-.915l-.045-.044c-.009-.009-.014-.03.009-.082l.035-.056a5.46 5.46 0 00.17-.306 2.37 2.37 0 00.236-1.028c-.008-.185-.025-.291-.1-.361-.166-.155-.453-.004-.54.206-.086.21-.05.447-.081.67s-.176.473-.4.477c-.581-.788-1.238-1.627-2.187-1.86-.625-.155-1.28-.017-1.923.014s-1.364-.08-1.762-.587c-.202-.258-.476-.647-.749-.465-.226.151-.09.508.09.712a3.084 3.084 0 002.358 1.015c.727-.02 1.492-.295 2.154.004.452.205.75.635 1.065 1.019a7.898 7.898 0 003.199 2.33 2.439 2.439 0 01-2.505 1.135c-.305-.06-.753-.091-.797.217-.035.24.251.39.488.436a3.293 3.293 0 003.151-1.173c.12-.193.282-.356.475-.477.24-.114.522-.058.786-.082.853-.075 1.537-.974 2.384-.842.252.055.491.159.705.305 1.231.743 2.39 1.6 3.462 2.56.902.806 1.786 1.713 2.94 2.077 1.067.337 2.428-.104 2.772-.793a2.556 2.556 0 00.193-1.529c-.09-.844-.376-1.528-.364-2.206.019-1.033.758-1.685.878-2.86a.782.782 0 00-.116-.574.345.345 0 00-.518-.038.541.541 0 00-.07.313c-.03.893-.3 1.763-.783 2.516a4.086 4.086 0 01-1.637-1.174l.434-1.434c.049-.217.144-.421.28-.598.19-.175.412-.31.654-.399a3.721 3.721 0 001.923-2.27.89.89 0 00.015-.443z'
                fill='#00939b'
            />
        </svg>
    )
}

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
    let email
    const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
        })

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '12px',
                paddingTop: '12px',
            }}
        >
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
            <Text>
                <FormattedMessage id='joinTag' />
            </Text>
            <input
                style={{
                    marginTop: '12px',
                    padding: '10px',
                    width: '135px',
                }}
                ref={(node) => (email = node)}
                type='email'
                placeholder={'Email'}
            />
            <Button marginTop='12px' width='65px' onClick={submit}>
                <FormattedMessage id='joinButton' />
            </Button>
        </div>
    )
}

const CustomForm2 = ({ status, message, onValidated }) => {
    let email
    const submit = () =>
        email &&
        email.value.indexOf('@') > -1 &&
        onValidated({
            EMAIL: email.value,
        })

    return (
        <div
            style={{
                //background: "#3b597d",
                borderRadius: 4,
                width: 240,
                display: 'flex',
            }}
        >
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
            <input style={{ flex: 2, border: 'none' }} ref={(node) => (email = node)} type='email' placeholder={'email'} className='input has-background-grey-dark' />
            <br />
            <button className='button has-text-grey-light has-background-grey-dark' style={{ marginLeft: 20, flex: 0.5, border: 'none' }} onClick={submit}>
                zum
            </button>
        </div>
    )
}

const url = 'https://lazum.us18.list-manage.com/subscribe/post?u=0d4f58c74f68cad6d6e48dbf0&amp;id=7fffa645b2'

const TemplateWrapper = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    const pathname = typeof window !== `undefined` ? window.location.pathname : ''

    const { state } = useContext(SnipcartContext)
    const { cartQuantity } = state

    return (
        <StaticQuery
            query={graphql`
                query LayoutQuery {
                    site {
                        siteMetadata {
                            languages {
                                defaultLangKey
                                langs
                            }
                        }
                    }
                    homepageEn: prismicHome(lang: { eq: "en-us" }) {
                        data {
                            navtagline {
                                text
                            }
                            copyright {
                                text
                            }
                            homeicon {
                                text
                            }
                            projectsicon {
                                text
                            }
                            tiendaicon {
                                text
                            }
                            carticon {
                                text
                            }
                            idiomaicon {
                                text
                            }
                        }
                    }
                    homepageEs: prismicHome(lang: { eq: "es-pr" }) {
                        data {
                            navtagline {
                                text
                            }
                            copyright {
                                text
                            }
                            homeicon {
                                text
                            }
                            projectsicon {
                                text
                            }
                            tiendaicon {
                                text
                            }
                            carticon {
                                text
                            }
                            idiomaicon {
                                text
                            }
                        }
                    }
                    allPrismicSocialbutton(filter: { lang: { eq: "en-us" } }) {
                        edges {
                            node {
                                data {
                                    title {
                                        text
                                    }
                                    url {
                                        text
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={(data) => (
                <ThemeProvider theme={theme}>
                    <IntlProvider
                        locale={typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) : null}
                        messages={
                            typeof window !== `undefined`
                                ? require(`../data/messages/${
                                      typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) : null
                                  }`)
                                : null
                        }
                    >
                        <div className={`container ${showMenu ? 'is-open' : ''}`}>
                            <Helmet defer={false} defaultTitle={'test title'} titleTemplate={`%s | ${'test title'}`}>
                                <html
                                    lang={typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) : null}
                                />
                                <link rel='canonical' href={pathname} />
                                <meta property='og:type' content='website' />
                                <meta
                                    property='og:locale'
                                    content={
                                        typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) : null
                                    }
                                />
                                <meta name='docsearch:version' content='2.0' />
                                <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover' />
                            </Helmet>

                            <div className='container__sidebar'>
                                <div className='sidebar'>
                                    <LocalizedLink to='/'>
                                        <RenderLogo color='#0f0' />
                                    </LocalizedLink>

                                    <div
                                        className='sidebar__intro'
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                typeof window !== `undefined`
                                                    ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) === 'es'
                                                        ? data.homepageEs.data.navtagline.text
                                                        : data.homepageEn.data.navtagline.text
                                                    : null,
                                        }}
                                    />
                                    <ul className='sidebar__menu'>
                                        <li
                                            className={
                                                pathname ===
                                                `/${
                                                    typeof window !== `undefined`
                                                        ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname)
                                                        : null
                                                }/`
                                                    ? 'is-active'
                                                    : null
                                            }
                                        >
                                            <LocalizedLink to='/'>
                                                <FormattedMessage id='home' />
                                            </LocalizedLink>
                                        </li>
                                        <li className={pathname.indexOf('/projects') >= 0 ? 'is-active' : null}>
                                            <LocalizedLink to='/projects'>
                                                <FormattedMessage id='projects' />
                                            </LocalizedLink>
                                        </li>
                                        <li className={pathname.indexOf('/products') >= 0 || pathname.indexOf('/store') >= 0 ? 'is-active' : null}>
                                            <LocalizedLink to='/store'>
                                                <FormattedMessage id='store' />
                                            </LocalizedLink>
                                        </li>
                                        <li
                                            className={
                                                pathname ===
                                                `/${
                                                    typeof window !== `undefined`
                                                        ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname)
                                                        : null
                                                }/about`
                                                    ? 'is-active'
                                                    : null
                                            }
                                        >
                                            <LocalizedLink to='/about'>
                                                <FormattedMessage id='about' />
                                            </LocalizedLink>
                                        </li>
                                    </ul>
                                    <p className='sidebar__social'>
                                        {data.allPrismicSocialbutton.edges.map(({ node: profile }) => (
                                            <a key={profile.data.title.text} href={profile.data.url.text} target='blank' className={`social social--${profile.data.title.text.toLowerCase()}`} />
                                        ))}
                                    </p>
                                    <div>
                                        <SelectLanguage
                                            langs={
                                                typeof window !== `undefined`
                                                    ? getLangs(
                                                          data.site.siteMetadata.languages.langs,
                                                          typeof window !== `undefined`
                                                              ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname)
                                                              : null,
                                                          typeof window !== `undefined`
                                                              ? getUrlForLang(
                                                                    `/${
                                                                        typeof window !== `undefined`
                                                                            ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname)
                                                                            : null
                                                                    }/`,
                                                                    pathname
                                                                )
                                                              : null
                                                      )
                                                    : null
                                            }
                                        />
                                    </div>

                                    {(pathname.indexOf('/products') >= 0 || pathname.indexOf('/store') >= 0 || cartQuantity > 0) && (
                                        <Box pb='12px'>
                                            <LitteCart />
                                        </Box>
                                    )}

                                    <Box pb='24px'>
                                        <MailchimpSubscribe
                                            url={url}
                                            render={({ subscribe, status, message }) => <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />}
                                        />
                                    </Box>

                                    <div className='sidebar__copyright'>{data.homepageEn.data.copyright.text}</div>
                                </div>
                            </div>
                            <div className='container__body'>
                                <div className='container__mobile-header'>
                                    <div className='mobile-header'>
                                        <div className='mobile-header__menu'>
                                            <button
                                                aria-label='Menu Button'
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setShowMenu(!showMenu)
                                                }}
                                            />
                                        </div>
                                        <div className='mobile-header__logo'>
                                            <LocalizedLink to='/'>
                                                <RenderLogo color='#0f0' />
                                            </LocalizedLink>
                                        </div>
                                    </div>
                                </div>
                                {children}
                            </div>
                            <Hide medium large>
                                <Flex sx={{ alignContent: 'center', py: '8px', backgroundColor: '#41416A', overflow: 'hidden', position: 'fixed', bottom: 0, width: '100%' }}>
                                    <Flex flexDirection='column' sx={{ alignItems: 'center' }} flex={1}>
                                        <LocalizedLink to='/'>
                                            <Box flex={1}>
                                                <MenuIcon
                                                    name='homeIcon'
                                                    color={
                                                        pathname ===
                                                        `/${
                                                            typeof window !== `undefined`
                                                                ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname)
                                                                : null
                                                        }/`
                                                            ? '#FCB913'
                                                            : 'white'
                                                    }
                                                />
                                            </Box>
                                            <Box flex={1}>
                                                <Text
                                                    color={
                                                        pathname ===
                                                        `/${
                                                            typeof window !== `undefined`
                                                                ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname)
                                                                : null
                                                        }/`
                                                            ? '#FCB913'
                                                            : 'white'
                                                    }
                                                >
                                                    {typeof window !== `undefined` &&
                                                    getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) === 'es'
                                                        ? data.homepageEs.data.homeicon.text
                                                        : data.homepageEn.data.homeicon.text}
                                                </Text>
                                            </Box>
                                        </LocalizedLink>
                                    </Flex>
                                    <Flex flexDirection='column' flex={1} sx={{ alignItems: 'center' }}>
                                        <LocalizedLink to='/projects'>
                                            <Box flex={1} pl={'8px'}>
                                                <MenuIcon name='projectsIcon' color={pathname.indexOf('/projects') >= 0 ? '#FCB913' : 'white'} />
                                            </Box>
                                            <Box flex={1}>
                                                <Text color={pathname.indexOf('/projects') >= 0 ? '#FCB913' : 'white'}>
                                                    {typeof window !== `undefined` &&
                                                    getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) === 'es'
                                                        ? data.homepageEs.data.projectsicon.text
                                                        : data.homepageEn.data.projectsicon.text}
                                                </Text>
                                            </Box>
                                        </LocalizedLink>
                                    </Flex>
                                    <Flex flexDirection='column' flex={1} sx={{ alignItems: 'center' }}>
                                        <LocalizedLink to='/store'>
                                            <Box flex={1}>
                                                <MenuIcon name='tiendaIcon' color={pathname.indexOf('/products') >= 0 || pathname.indexOf('/store') >= 0 ? '#FCB913' : 'white'} />
                                            </Box>
                                            <Box flex={1}>
                                                <Text color={pathname.indexOf('/products') >= 0 || pathname.indexOf('/store') >= 0 ? '#FCB913' : 'white'}>
                                                    {typeof window !== `undefined` &&
                                                    getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) === 'es'
                                                        ? data.homepageEs.data.tiendaicon.text
                                                        : data.homepageEn.data.tiendaicon.text}
                                                </Text>
                                            </Box>
                                        </LocalizedLink>
                                    </Flex>
                                    <Flex flexDirection='column' flex={1} sx={{ alignItems: 'center' }}>
                                        {pathname.indexOf('/products') >= 0 || pathname.indexOf('/store') >= 0 || cartQuantity > 0 ? (
                                            <Box className='snipcart-checkout'>
                                                <Box flex={1}>
                                                    <MenuIcon name='cartIcon' color='white' />
                                                </Box>
                                                <Box flex={1}>
                                                    <Text color='white'>
                                                        {typeof window !== `undefined` &&
                                                        getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname) === 'es'
                                                            ? 'Ver ' + data.homepageEs.data.carticon.text + ' (' + cartQuantity + ')'
                                                            : 'View ' + data.homepageEn.data.carticon.text + ' (' + cartQuantity + ')'}
                                                    </Text>
                                                </Box>
                                            </Box>
                                        ) : (
                                            <Box flex={1}>
                                                <MenuSelectLang
                                                    langs={
                                                        typeof window !== `undefined`
                                                            ? getLangs(
                                                                  data.site.siteMetadata.languages.langs,
                                                                  typeof window !== `undefined`
                                                                      ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname)
                                                                      : null,
                                                                  typeof window !== `undefined`
                                                                      ? getUrlForLang(
                                                                            `/${
                                                                                typeof window !== `undefined`
                                                                                    ? getCurrentLangKey(
                                                                                          data.site.siteMetadata.languages.langs,
                                                                                          data.site.siteMetadata.languages.defaultLangKey,
                                                                                          pathname
                                                                                      )
                                                                                    : null
                                                                            }/`,
                                                                            pathname
                                                                        )
                                                                      : null
                                                              )
                                                            : null
                                                    }
                                                />
                                            </Box>
                                        )}
                                    </Flex>
                                </Flex>
                            </Hide>
                        </div>
                    </IntlProvider>
                </ThemeProvider>
            )}
        />
    )
}

TemplateWrapper.propTypes = {
    children: PropTypes.object,
}

export default TemplateWrapper
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

// <meta property='og:url' content={href} />
// <meta property='og:type' content='website' />
// <meta property='og:locale' content={locale} />
// <meta property='og:site_name' content={title} />
// <meta property='og:image' content={`${siteUrl}${gatsbyIcon}`} />
// <meta property='og:image:alt' content='Gatsby Logo' />
// <meta property='og:image:width' content='512' />
// <meta property='og:image:height' content='512' />

// <meta name='twitter:card' content='summary' />
// <meta name='twitter:site' content={twitter} />

// <Box flex={1}>
// <button
//     aria-label='Menu Button'
//     onClick={(e) => {
//         e.preventDefault()
//         setShowMenu(!showMenu)
//     }}
// />
// </Box>
