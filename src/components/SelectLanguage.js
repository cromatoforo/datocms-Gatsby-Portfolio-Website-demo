import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import "../styles/index.sass";
import {SnipcartContext} from 'gatsby-plugin-snipcart-advanced/context';

const SelectLanguage = (props) => {

  const {changeLanguage} = useContext(SnipcartContext)

  const links = props.langs ? props.langs.map(lang =>
      
      <li selected={lang.selected} className={lang.selected && 'is-active'}>
        <Link to={lang.link} key={lang.langKey} onClick={()=>changeLanguage(lang.langKey)}>
          {lang.langKey === 'es' ? 'Español' : 'English'}
        </Link>
      </li>
  ): null;

  return (
    <section>
      <header style={{
        
      }}>
        <FormattedMessage id="selectLanguage" />
      </header>
      <ul className="sidebar__menu">
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;

// <li>
// <LocalizedLink to="/store"><FormattedMessage id="store" /></LocalizedLink>
// </li>