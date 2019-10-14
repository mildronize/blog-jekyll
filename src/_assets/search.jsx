
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
        const res = await fetch('https://jekyll.mildronize.com/search-data/index.html')
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
        // var updatedList = Object.keys(initialItems);
        // updatedList = updatedList.filter( index => (
        //     that.filterName(initialItems[index], value) 
        //      || that.filterTag(initialItems[index], value)
        // ));
        var updatedList = [];
        console.log(value);
        for( var i=0 ; i < initialItems.length; i++){
            // console.log(initialItems[i]);
            
            const foundPosition =  initialItems[i].title.toLowerCase().search(value.toLowerCase()) ;
            
            if( foundPosition >= 0 ){
                const startStr = initialItems[i].title.slice(0, foundPosition);
                const foundStr = initialItems[i].title.slice(foundPosition, foundPosition + value.length);
                const endStr = initialItems[i].title.slice(foundPosition + value.length);
                let updatedListItem = { 
                    ...initialItems[i], 
                    title: `${startStr}<span class="search-highlight">${foundStr}</span>${endStr}`
                }
                updatedList.push(updatedListItem);
            }else{
                if (this.filterTag(initialItems[i], value)){
                    updatedList.push(initialItems[i]);
                }
            }
        }   
        console.log(updatedList); 
        this.setState({ items: updatedList });
        this.setState({
            query: value
        });
        // this.editUrl(value);
    }

    onKeyPress(event) {
        if (event.which === 13) {
          event.preventDefault();
          console.log("Hey");
          this._searchTextBox.blur();
        }
    }

    onSubmit(event) {
        if (event.which === 13) {
          event.preventDefault();
          this._searchTextBox.blur();
        }
        console.log("Hey");
    }

    componentDidUpdate(prevProps, prevState) {
        this._searchTextBox.focus();
      }

    render() {
        return (
            <div>
                <div className="space"></div>
                <form className="pure-form" onKeyPress={(e) => this.onKeyPress(e)}>
                    <input type="text" id="search-box" className="pure-input-rounded pure-input-1"
                        placeholder="Search on mildronize.com" value={this.state.query} onChange={this.onSearch}
                        ref={c => (this._searchTextBox = c)}
                    />
                </form>
                <ul className="list-search">
                {this.state.items.map((item) => (
                    <li className="list-group-item" key={item.link}>
                    <a href={item.link} dangerouslySetInnerHTML={{__html: item.title}}></a>
                    </li>
                ))}
            </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('search-component-root')
);
