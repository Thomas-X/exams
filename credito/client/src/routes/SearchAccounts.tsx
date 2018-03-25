import * as React from 'react';
import Select from 'react-select';
import { compose } from 'redux';
import 'react-select/dist/react-select.css';
import { fetchGetHOC } from '../hoc/FetchGetHOC';

interface State {
    selectedValue: string;
}

class SearchAccounts extends React.Component<{data: any}, State> {

    public state: State = {
        selectedValue: ''
    };

    public render() {
        return (
            <section>
                <div className="form-group">
                    <label>Zoek rekeningen</label>
                    {this.props.data && <Select
                        onChange={(val: any) => {
                            this.setState({
                                selectedValue: val.value,
                            });
                        }}
                        value={this.state.selectedValue}
                        options={this.props.data.accounts.map((item: any) => {
                            return { label: item.id, value: item.id };
                        })}
                    />}
                    {this.state.selectedValue.length > 0 && (<h4>href to page ... <br/> selected value is:{this.state.selectedValue}</h4>)}
                </div>
            </section>
        );
    }
}

export default compose(
    fetchGetHOC('http://localhost:3004/api/getAllAccounts')
)(SearchAccounts);