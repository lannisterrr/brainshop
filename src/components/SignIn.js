import { Checkbox } from 'components/input/Checkbox';
import { useAuth } from 'context/auth-context';
import { useNavigate, useLocation } from 'react-router-dom';

function SignIn() {
  const { loginState, dispatch, logInHandler, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const logInFormHandler = e => {
    e.preventDefault();
    logInHandler(
      loginState.email,
      loginState.password,
      setAuth,
      navigate,
      location
    );

    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div class="form login">
      <span class="form__title heading-3">Login</span>
      <form onSubmit={logInFormHandler}>
        <div class="input-field">
          <input
            value={loginState.email}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'email', value: event.target.value },
              })
            }
            type="text"
            placeholder="Enter your email"
            class="form__email-input"
            required
          />
          <i class="uil uil-envelope form-icon left-icon"></i>
        </div>
        <div class="input-field">
          <input
            value={loginState.password}
            onChange={event =>
              dispatch({
                type: 'TEXT_INPUT',
                payload: { key: 'password', value: event.target.value },
              })
            }
            type={loginState.showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            class="form__email-input password"
            required
          />

          <i class="uil uil-lock form-icon left-icon"></i>
          <i
            onClick={() => dispatch({ type: 'PASSWORD_SHOW' })}
            class={`uil uil-eye${
              loginState.showPassword ? '' : '-slash'
            }  form-icon showHidePw`}
          ></i>
        </div>

        <div class="checkbox-container">
          <div class="checkbox-content">
            <Checkbox
              id="login-checkbox"
              title="Remember me"
              handleCheckboxChange={event =>
                dispatch({
                  type: 'SIGN_IN_CHECKBOX',
                  payload: event.target.checked,
                })
              }
              booleanChecked={loginState.rememberMe}
              name="login-checkbox"
            />
          </div>
        </div>

        <div class="input-field button-container">
          <button class="btn btn-danger t-c-1 final-cta w-100 round-corner">
            Login Now
          </button>
          <button
            onClick={() => dispatch({ type: 'FILL_GUEST' })}
            class="btn outline-danger t-c-2 final-cta w-100 round-corner m-v-2"
          >
            Guest Login
          </button>
        </div>
      </form>

      <div class="login-signup center-text p-v-4">
        <span class="f-6">
          Not a member?
          <span
            onClick={() => dispatch({ type: 'SWITCH_FORM' })}
            class="f-6 f-bold form-change-link  t-c-4 p-h-2"
          >
            Signup now
          </span>
        </span>
      </div>
    </div>
  );
}

export { SignIn };
