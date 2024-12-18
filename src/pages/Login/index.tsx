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
    'https://external-preview.redd.it/bvSBzqWC33WPgHU3gEXDnTvxbWWw8a7MoU4AgbDPyaQ.jpg?width=640&crop=smart&auto=webp&s=3e9cf382e9fdc2c312c3bcb8ca5b828c11edbd74';

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
          alt="Coin on Cardano"
        />

        <p className="login-page-username">Charles Hoskinson's Laptop</p>

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

        <p className="login-page-hint">Hint: Name Of A Squirrel</p>

        <div className="login-extra-info">
        </div>

        {/* <BottomButtonsWrapper />  */}
      </div>
    </div>
  );
}
