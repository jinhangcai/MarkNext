import {Component} from 'react'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }

    add = () => {
        const { num } = this.state;
        console.log(123, num + 1, window);
        // this.setState({num: this.state.num + 1})
    }

    render () {
        // const prop = this.props;
        // console.log('prop', prop)
        return (
            <div>
                {/*<div>{this.props.response}</div>*/}
                {/*<div>{this.state.num}</div>*/}
                <button onClick={this.add}>++</button>
            </div>
        )
    }
}
export async function getServerSideProps (content) {
    let data = 'abc123'
    // console.log('window', window)
    // const data1 = await api.getUserTimeRanking();
    // console.log(data1)
    return {
        props: {
            data
        }
    }
}
