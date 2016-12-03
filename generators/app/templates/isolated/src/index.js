import React, { Component, PropTypes } from 'react';

export default class <%= componentName %> extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static propTypes {
      title: PropTypes.string.isRequired
    }

    static defaultProps {
      title: 'Title'
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillUpdate() {}

    componentDidUpdate() {}

    render() {
        return <div>Hello</div>;
    }
}
