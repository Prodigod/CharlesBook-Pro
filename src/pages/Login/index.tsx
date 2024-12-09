import './styles.scss';
import React from 'react';
import { useDispatch } from 'react-redux';

import BootUpWindow from '../../components/BootUpWindow/BootUpWindow';
import { BsArrow90DegRight } from 'react-icons/bs';
import copyToClipboard from '../../utils/helpers/copyToClipboard';
import MiscSlice from '../../containers/Misc/slice';
import ScreenTypes from '../../types/screens';

import BottomButtonsWrapper from './BottomButtons';

const { setPassword, setScreen } = MiscSlice.actions;

export default function LoginPage() {
  const dispatch = useDispatch();

  const [currentPassword, setCurrentPassword] = React.useState('');

  React.useEffect(() => {
    console.log(currentPassword);
  }, [currentPassword]);

  const profile_img_url =
    'https://bidenlaptopmedia.com/_data/i/galleries/Laptop/20230601_074914_pbx3WFPNRSmcslLYt097yg-me.jpg';

  const handleSubmitPassword = () => {
    dispatch(setPassword(currentPassword));
    dispatch(setScreen(ScreenTypes.desktop));
  };

  return (
    <div className="login-page">
      <BootUpWindow />
      <div className="login-page-input">
        <img
          className="login-page-avatar"
          src={profile_img_url}
          alt="$LAPTOP Coin on Solana"
        />

        <p className="login-page-username">Hunter Biden's Laptop</p>

        <div className="login-page-input-field-wrapper">
          <input
            className="login-page-input-field"
            type="password"
            placeholder="Enter Password"
            value={currentPassword}
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
            onKeyDown={(evt) => {
              if (evt.key === 'Enter') {
                handleSubmitPassword();
              }
            }}
            // readOnly
          />
          <button
            className="login-page-input-button"
            onClick={handleSubmitPassword}
          >
            <BsArrow90DegRight className="ml-1" color="white" />
          </button>
        </div>

        <p className="login-page-hint">Hint: Password</p>

        <div className="login-extra-info">
     
          <div className="login-page-ca">
            <span>CA:</span>
            <p className="login-page-ca-text">
              HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7
            </p>
            <button
              className="copy-button"
              onClick={(e) =>
                copyToClipboard(
                  'HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7',
                  e
                )
              }
            >
              <i className="fa fa-clone"></i>
            </button>
          </div>
        </div>

        <BottomButtonsWrapper />
      </div>
    </div>
  );
}
