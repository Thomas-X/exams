import React from 'react';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form/lib/index';
import { Button } from '../components/Button';
import { renderField } from '../components/RenderField';
import validations, { FORM_VALIDATIONS } from '../services/validations';
import { FORM_NAMES } from '../services/validations';

// TODO bericht weergeven bij Login.js

class RegisterForm extends React.Component {

    render() {
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
        destroyOnUnmount: false,
    }),
)(RegisterForm);