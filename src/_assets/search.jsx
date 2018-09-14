
import React from "react";
import ReactDOM from "react-dom";
import fetch from "isomorphic-unfetch";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialItems: [],
            items: [],
            query: ""
        }
        this.onSearch = this.onSearch.bind(this);
    }

    async loadData() {
        const res = await fetch('/search-data')
        const dataJson = await res.json()
        // console.log(dataJson)
        return {
          data: dataJson.data
        }
      }

    get baseurl() {
        return window.location.href.split('#/')[0];
    }

    componentWillMount() {
        // console.log( this.state);
        console.log(window.location);
        if (window.location.href.search("#/") > 0)
            this.setState({ query: window.location.href.replace(`${this.baseurl}#/`, '') })
        this.loadData()
            .then( v => {
                this.setState( { initialItems: v.data } )
            })
    }

    editUrl(query) {
        window.location.href = `${this.baseurl}#/${query}`;
    }

    onSearch(event) {
        const value = event.target.value;
        const initialItems = this.state.initialItems;
        var updatedList = Object.keys(initialItems);
        updatedList = updatedList.filter(function (index) {
            return initialItems[index].title.toLowerCase().search( value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList });
        this.setState({
            query: value
        });
        this.editUrl(value);
    }

    render() {
        return (
            <div>
                <h1>Search</h1>
                <form className="pure-form">
                    <input type="text" className="pure-input-rounded pure-input-1"
                        placeholder="Search keywords" value={this.state.query} onChange={this.onSearch}
                    />
                </form>
                <ul className="list-group">
                {this.state.items.map((index) => (
                    <li className="list-group-item" key={index}>
                    <a href={this.state.initialItems[index].link}>{this.state.initialItems[index].title}</a>
                    </li>
                ))}
            </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);
