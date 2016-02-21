export class QueryActionCreator {
    constructor(private dispatcher) { }
    setQuery = query => this.dispatcher.dispatch(new SetQueryAction(query));
}

export class SetQueryAction { constructor(public query) { } }