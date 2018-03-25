import React from 'react';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Button } from '../components/Button';
import { RenderField } from '../components/RenderField';
import validations, { FORM_VALIDATIONS, FORM_NAMES } from '../services/validations';
import { ReduxFormProps } from './typings/typings';
import { connect, Dispatch } from 'react-redux';

// type Props = OwnProps & ReduxFormProps

const CreditoForm: React.SFC<any> = (props: any) => {
    const { handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name={FORM_NAMES.accountNumber}
                type="text"
                component={RenderField}
                label="Account number"
            />

            <Field
                name={FORM_NAMES.organisation}
                type="text"
                component={RenderField}
                label="Organisation"
            />
            <RenderField type="numberPicker" updateNumbers={props.onNumbersChange}/>
            <div>
                <Button type="submit" disabled={submitting}>
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default compose(
    reduxForm({
        form: 'myCredito',
    })
)(CreditoForm);