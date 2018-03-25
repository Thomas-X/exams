import React from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../components/Button';
import { RenderField } from '../components/RenderField';
import validations, { FORM_VALIDATIONS, FORM_NAMES } from '../services/validations';
import { ReduxFormProps } from './typings/typings';

// type Props = OwnProps & ReduxFormProps

const ContactForm: React.SFC<ReduxFormProps> = (props: ReduxFormProps) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name={FORM_NAMES.contactSubject}
                type="text"
                component={RenderField}
                label="Subject"
            />
            <Field
                name={FORM_NAMES.contactBody}
                type="textarea"
                component={RenderField}
                label="Body"
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
};

export default compose(
    reduxForm({
        form: 'contact',
        validate: validations([FORM_VALIDATIONS[FORM_NAMES.contactSubject], FORM_VALIDATIONS[FORM_NAMES.contactBody]]),
    })
)(ContactForm);