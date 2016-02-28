import { Component } from "../../libs/custom/component-decorator";
import { QueryActionCreator } from "../actions/query-actions";

@Component({
    templateUrl: "wwwroot/components/app.html",
    selector: "app",
    providers: ['queryActionCreator']
})
export class AppComponent {
    constructor(private queryActionCreator: QueryActionCreator) { }

    storeOnChange = state => {
        this._query = state.query;
        this._queryInput = state.query;
    };
    
    _query;    
    _queryInput;
    get query() { return this._query; }
    set queryInput(value) { this.queryActionCreator.setQuery(value); }
    get queryInput() { return this._queryInput; }
}