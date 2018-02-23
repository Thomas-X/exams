import React from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../components/Button';
import { renderField } from '../components/RenderField';
import validations, { FORM_VALIDATIONS, FORM_NAMES } from '../services/validations';
import { ReduxFormProps } from './typings/typings';

// TODO bericht weergeven bij Login.js

class RegisterForm extends React.Component<ReduxFormProps, {}> {

    public render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name={FORM_NAMES.username}
                    type="text"
                    component={renderField}
                    label="Username"
                    willUnmount={() => null}
                />
                <Field
                    name={FORM_NAMES.passwordOne}
                    type="password"
                    component={renderField}
                    label="Password"
                    willUnmount={() => null}
                />
                <Field
                    name={FORM_NAMES.passwordTwo}
                    type="password"
                    component={renderField}
                    label="Confirm password"
                    willUnmount={() => null}
                />
                <div>
                    <Button type="submit" disabled={submitting}>
                        Submit
                    </Button>
                    <Button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </Button>
                </div>
            </form>
        );
    }
}

export default compose(
    reduxForm({
        form: 'register',
        validate: validations([FORM_VALIDATIONS[FORM_NAMES.username], FORM_VALIDATIONS[FORM_NAMES.passwordOne], FORM_VALIDATIONS[FORM_NAMES.passwordTwo]]),
    }),
)(RegisterForm);