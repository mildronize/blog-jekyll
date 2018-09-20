
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
        const res = await fetch('https://mildronize.com/search-data/index.html')
        const dataJson = await res.json()
        return {
          data: dataJson.data
        }
      }

    get baseurl() {
        return window.location.href.split('#/')[0];
    }

    componentWillMount() {
        // console.log( this.state);
        // console.log(window.location);
        // if (window.location.href.search("#/") > 0)
        //     this.setState({ query: window.location.href.replace(`${this.baseurl}#/`, '') })
        this.loadData()
            .then( v => {
                this.setState( { initialItems: v.data } )
            })
    }

    editUrl(query) {
        window.location.href = `${this.baseurl}#/${query}`;
    }

    filterName(item, value){
        return item.title.toLowerCase()
            .search( value.toLowerCase()) !== -1
    }

    filterTag(item, value){
        for( var i=0 ; i < item.tags.length; i++){
            if(item.tags[i].toLowerCase().search(value.toLowerCase()) !== -1)
                return true
        }       
        return false;
    }

    onSearch(event) {
        const value = event.target.value;
        const initialItems = this.state.initialItems;
        const that = this;
        var updatedList = Object.keys(initialItems);
        updatedList = updatedList.filter( index => (
            that.filterName(initialItems[index], value) 
             || that.filterTag(initialItems[index], value)
        ));
        this.setState({ items: updatedList });
        this.setState({
            query: value
        });
        // this.editUrl(value);
    }

    onKeyPress(event) {
        if (event.which === 13) {
          event.preventDefault();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this._searchTextBox.focus();
      }

    render() {
        return (
            <div>
                <div className="space"></div>
                <form className="pure-form" onKeyPress={this.onKeyPress}>
                    <input type="text" id="search-box" className="pure-input-rounded pure-input-1"
                        placeholder="Search on mildronize.com" value={this.state.query} onChange={this.onSearch}
                        ref={c => (this._searchTextBox = c)}
                    />
                </form>
                <ul className="list-search">
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
