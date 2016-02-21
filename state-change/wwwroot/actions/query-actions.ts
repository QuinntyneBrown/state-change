export class QueryActionCreator {
    constructor(private dispatcher, private guid) { }

    setQuery = query => {
        var newId = this.guid();
        this.dispatcher.dispatch(new SetQueryAction(newId, query));
        return newId;
    }
}

export class SetQueryAction { constructor(public id, public query) { } }