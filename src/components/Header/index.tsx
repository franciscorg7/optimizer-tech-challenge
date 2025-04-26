import React from 'react';
import './styles.scss';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header__title'>
        <span>
          Optimizer{' '}
          <span className='white-highlight'>- Frontend Challenge</span>
        </span>
      </div>
      <div className='header__made-by'>
        <span>
          Made by{' '}
          <a
            href='https://github.com/franciscorg7'
            className='header__made-by__blue-highlight'
            target='_blank'
            rel='noopener noreferrer'
          >
            Francisco Gonçalves
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
