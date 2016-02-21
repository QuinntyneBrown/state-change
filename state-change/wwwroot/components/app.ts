export class AppComponent {
    constructor(private queryActionCreator) { }

    storeOnChange = state => this._query = state.query;
    
    _query;

    get query() { return this._query; }

    _queryInput;

    set queryInput(value) {
        this._queryInput = value;
        this.queryActionCreator.setQuery(value);
    }

    get queryInput() {
        return this._queryInput;
    }
}