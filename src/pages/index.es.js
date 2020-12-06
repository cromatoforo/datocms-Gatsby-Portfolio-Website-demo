import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import LocalizedLink from '../utils/LocalizedLink'
import { Box, Flex, Text, Button } from 'rebass'
import { Hide } from '@rebass/hide'
import { TextInput } from 'evergreen-ui'
import { Button as Button2 } from 'evergreen-ui'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { FormattedMessage } from 'react-intl'

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
                paddingLeft: '18px',
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '18px',
            }}
        >
            {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
            {status === 'error' && <div style={{ color: 'red' }} dangerouslySetInnerHTML={{ __html: message }} />}
            {status === 'success' && <div style={{ color: 'green' }} dangerouslySetInnerHTML={{ __html: message }} />}
            <Text>
                <FormattedMessage id='joinTag' />
            </Text>
            <Flex>
                <input
                    style={{
                        marginTop: '12px',
                        padding: '10px',
                        width: '160px',
                    }}
                    ref={(node) => (email = node)}
                    type='email'
                    placeholder={'Email'}
                />
                <Button2 marginTop='12px' marginLeft='12px' width='65px' onClick={submit}>
                    <FormattedMessage id='joinButton' />
                </Button2>
            </Flex>
        </div>
    )
}
const url = 'https://lazum.us18.list-manage.com/subscribe/post?u=0d4f58c74f68cad6d6e48dbf0&amp;id=7fffa645b2'

const IndexPage = ({ data }) => (
    <Layout>
        <article className='sheet'>
            <div className='sheet__inner'>
                <Box>
                    <Box>
                        <Box pb={[1]} color='#40436A'>
                            <Text
                                px={[2, 0]}
                                py={2}
                                fontSize={3}
                                dangerouslySetInnerHTML={{
                                    __html: data.homepage.data.home_tagline.html,
                                }}
                            />
                        </Box>
                    </Box>

                    <LocalizedLink style={{ textDecoration: 'none' }} to={`/store`}>
                        <Flex className='card' flexDirection={['column-reverse', 'row']} pb={0} mb={2}>
                            <Box sx={{ flex: [1, 1 / 2] }} backgroundColor='#C0DBD9'>
                                <Flex flexDirection='column'>
                                    <Box color='#000' p={[3, 2]}>
                                        <Text
                                            fontSize={[2, 3]}
                                            p={[2, 2]}
                                            dangerouslySetInnerHTML={{
                                                __html: data.homepage.data.store_tagline.html,
                                            }}
                                        />
                                        <Button
                                            mx={1}
                                            my={0}
                                            mb={[2, 0]}
                                            sx={{
                                                fontSize: 1,
                                                borderRadius: 3,
                                                color: '#000',
                                                backgroundColor: '#FCB515',
                                                cursor: 'pointer'
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: data.homepage.data.store_button.html,
                                            }}
                                        />
                                    </Box>
                                </Flex>
                            </Box>
                            <Box sx={{ flex: [1, 1] }}>
                                <Img style={{ height: 220 }} objectFit='contain' fluid={data.homepage.data.store_image.fluid} />
                            </Box>
                        </Flex>
                    </LocalizedLink>

                    <Box>
                        <Box>
                            <Text px={[2, 0]} py={2} fontSize={3} dangerouslySetInnerHTML={{ __html: data.homepage.data.home_projects.html }} />
                        </Box>
                    </Box>
                    {data.projects.edges.map(({ node: project }) => (
                        <LocalizedLink key={project.uid} style={{ textDecoration: 'none' }} to={`/projects/${project.uid}`}>
                            <Flex className='card' mb={'6px'} flexDirection={['column-reverse', 'row']}>
                                <Box sx={{ flex: [1, 1 / 2] }} backgroundColor='#C6C7E0'>
                                    <Flex flexDirection='column'>
                                        <Box my={1} mb={1} color='#000' p={[2, 3]}>
                                            <Text fontWeight='700' fontSize={[2, 3]}>
                                                {project.data.title.text}
                                            </Text>
                                            <Text mt={[0, 20]} fontSize={[2, 2]}>
                                                {project.data.subtitle.text}
                                            </Text>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box sx={{ flex: [1, 1] }}>
                                    <Img style={{ height: 220 }} objectFit='contain' alt={project.data.title.text} fluid={project.data.image1.fluid} />
                                </Box>
                            </Flex>
                        </LocalizedLink>
                    ))}
                    <Hide medium large>
                        <Box pt='24px'>
                            <MailchimpSubscribe
                                url={url}
                                render={({ subscribe, status, message }) => <CustomForm status={status} message={message} onValidated={(formData) => subscribe(formData)} />}
                            />
                        </Box>
                    </Hide>
                </Box>
            </div>
        </article>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query IndexQueryEs {
        homepage: prismicHome(lang: { eq: "es-pr" }) {
            data {
                store_tagline {
                    html
                }
                store_button {
                    html
                }
                home_tagline {
                    html
                }
                home_projects {
                    html
                }
                copyright {
                    text
                }
                store_image {
                    fluid(maxWidth: 1000, maxHeight: 800) {
                        ...GatsbyPrismicImageFluid
                    }
                }
            }
        }
        projects: allPrismicProject(limit: 3, sort: {order: DESC, fields: last_publication_date}, filter: {lang: {eq: "es-pr"}}) {
            edges {
                node {
                    uid
                    data {
                        title {
                            text
                        }
                        subtitle {
                            text
                        }
                        image1 {
                            fluid(maxWidth: 1000, maxHeight: 800) {
                                ...GatsbyPrismicImageFluid
                            }
                        }
                    }
                }
            }
        }
    }
`
