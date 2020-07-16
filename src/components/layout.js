/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, FormattedMessage } from 'react-intl';
import SelectLanguage from './SelectLanguage';
import LocalizedLink from '../utils/LocalizedLink';

import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = typeof window !== `undefined` ? window.location.pathname: null
  
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
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          homeEs: datoCmsHome(locale: { eq: "es" }) {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          homeEn: datoCmsHome(locale: { eq: "en" }) {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(
            filter: { locale: { eq: "es" } }
            sort: { fields: [position], order: ASC }
          ) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        <IntlProvider
        locale={typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname):null}
        messages={typeof window !== `undefined` ? require(`../data/messages/${typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname):null}`):null}
      >
        <div className={`container ${showMenu ? "is-open" : ""}`}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.homeEn.seoMetaTags}
          />
          <div className="container__sidebar">
            <div className="sidebar">
              <h6 className="sidebar__title">
                <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
              </h6>
              <div
                className="sidebar__intro"
                dangerouslySetInnerHTML={{
                  __html:
                  typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname):null === 'es' ? data.homeEs.introTextNode.childMarkdownRemark.html : data.homeEn.introTextNode.childMarkdownRemark.html
                }}
              />
              <ul className="sidebar__menu">
                <li>
                  <LocalizedLink to="/"><FormattedMessage id="home" /></LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/"><FormattedMessage id="store" /></LocalizedLink>
                </li>
                <li>
                  <LocalizedLink to="/about"><FormattedMessage id="about" /></LocalizedLink>
                </li>
              </ul>
              <p className="sidebar__social">
                {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                  <a
                    key={profile.profileType}
                    href={profile.url}
                    target="blank"
                    className={`social social--${profile.profileType.toLowerCase()}`}
                  >
                    {" "}
                  </a>
                ))}
              </p>
              <SelectLanguage langs={typeof window !== `undefined` ? getLangs(data.site.siteMetadata.languages.langs, typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname):null, typeof window !== `undefined` ? getUrlForLang(`/${typeof window !== `undefined` ? getCurrentLangKey(data.site.siteMetadata.languages.langs, data.site.siteMetadata.languages.defaultLangKey, pathname):null}/`, pathname):null):null} />
              <br/>
              <div className="sidebar__copyright">
                {data.homeEs.copyright}
              </div>
            </div>
          </div>
          <div className="container__body">
            <div className="container__mobile-header">
              <div className="mobile-header">
                <div className="mobile-header__menu">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setShowMenu(!showMenu);
                    }}
                  />
                </div>
                <div className="mobile-header__logo">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
        </IntlProvider>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
