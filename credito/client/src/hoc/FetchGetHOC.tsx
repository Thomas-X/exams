import * as React from 'react';
import axios from 'axios';

export const fetchGetHOC = (url: string) => (WrappedComponent: any) => {

    class FetchHoc extends React.Component<{}, { data: any }> {
        public state: {data: any} = {
            data: null,
        };

        public componentDidMount() {
            axios.get(url)
                .then(this.success)
                .catch(this.fail);
        }

        private success = ({data}: any) => {
            this.setState({
                data,
            });
        }
        private fail = (networkRequest: any) => {
            if (networkRequest.response) {
                if (networkRequest.response.data) {
                    if (networkRequest.response.data.message) {
                        this.setState({
                            data: networkRequest.response.data.message
                        });
                    } else {
                        console.error(networkRequest);
                    }
                }
            }
        }

        public render() {
            return <WrappedComponent {...this.props} data={this.state.data}/>;
        }
    }

    return FetchHoc;
};