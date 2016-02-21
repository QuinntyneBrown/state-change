﻿/// <reference path="../typings/tsd.d.ts" />

import { QueryActionCreator } from "./actions/query-actions";
import { AppComponent } from "./components/app";
import { editQueryReducer } from "./reducers/query-reducers";

var app = (<any>angular.module("app", [
    "addOrUpdate",    
    "invokeAsync",
    "localStorageManager",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store",
]));

app.config(["reducersProvider", reducersProvider => {
    reducersProvider.configure(editQueryReducer);
}]);

app.service("queryActionCreator", ["dispatcher", "guid", QueryActionCreator]);

app.component({
    templateUrl: "wwwroot/components/app.html",
    component: AppComponent,
    selector: "app",
    providers: ['queryActionCreator']
});



app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {

    if (!localStorageManagerProvider.get({ name: "initialState" }))
        localStorageManagerProvider.put({
            name: "initialState", value: { query: null }
        });

    initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
}]);