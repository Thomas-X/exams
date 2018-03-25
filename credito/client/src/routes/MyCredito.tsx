import * as React from 'react';
import { compose } from 'redux';
import MyCreditoForm from '../forms/MyCreditoForm';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { ErrorMessage } from './Register';
import { connect } from 'react-redux';
import { ReduxState } from '../redux';
import { FORM_NAMES } from '../services/validations';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import styled from 'styled-components';

const StyledSection = styled.section`
    display:flex;
    flex-direction: column;
    
`;

interface State {
    error: any;
    accounts: Array<number | string>;
    accountError: string | null;
}

class MyCredito extends React.Component<{ numbers: Array<any>, token: string}, State> {

    public state: State = {
        error: null,
        accounts: [],
        accountError: null,
    };

    private numbers: Array<any> = [];

    private onNumbersChange = (numbers: Array<any>) => {
        this.numbers = numbers;
    }

    private onSubmit = (values: any) => {
        axios.post(`http://localhost:3004/api/createAccount?auth=${this.props.token}&addRedundancy=true`, {
            organisationName: values[FORM_NAMES.organisation],
            accountId: values[FORM_NAMES.accountNumber],
            creditCardIds: this.numbers,
        })
            .then(this.createAccountSuccess)
            .catch(this.createAccountFail);
    }

    private createAccountSuccess = ({data}: any) => {
        const accounts = this.state.accounts.slice();
        accounts.push(data.account);
        this.setState({
            error: null,
            accounts,
        });
    }

    public createAccountFail = ({response: { data }}: any) => {
        this.setState({
            error: data.message
        });
    }

    public componentDidMount() {
        axios.get('http://localhost:3004/api/getAllAccounts?addRedundancy=true')
            .then(this.getAccountsSuccess)
            .catch(this.getAccountsFail);
    }

    private getAccountsSuccess = ({data}: any) => {
        this.setState({
            accounts: data.accounts
        });
    }

    public getAccountsFail = ({ response: { data }}: any) => {
        this.setState({
            error: data.message
        });
    }

    public render() {
        const columns = [
            {
                id: 'organisationName',
                Header: 'Organisation',
                accessor: (data: { organisation: { name: string } }) => {
                    if (data) {
                        if (data.organisation) {
                            return data.organisation.name;
                        }
                    }
                    return null;
                }
            },
            {
                Header: 'Account number',
                accessor: 'id'
            },
            {
                Header: 'Credit cards',
                accessor: 'creditCards',
                Cell: (props: { value: Array<string | number> }) => <span>{props.value.join(', ')}</span>
            },
            {
                Header: 'Balance',
                accessor: 'balance',
            }
        ];

        return (
            <StyledSection>
                <h1>My credito</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at beatae, commodi consequuntur
                    distinctio
                    doloremque ea eaque ex, fuga impedit incidunt laborum laudantium magni minima, obcaecati omnis quae
                    voluptatem voluptatum.</p>
                <br/>
                <Col sm={12} md={6} lg={4} style={{padding: '0', marginBottom: '5rem'}}>
                    {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
                    <MyCreditoForm onSubmit={this.onSubmit} onNumbersChange={this.onNumbersChange}/>
                </Col>
                {this.state.accounts.length > 0 && <ReactTable columns={columns} data={this.state.accounts}/>}
            </StyledSection>
        );
    }
}

export default compose(
    connect((state: ReduxState) => ({
        token: state.user.token
    })) as any
)(MyCredito);