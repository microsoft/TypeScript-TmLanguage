var Backbone= require("backbone");
var SearchModel= require("./../search/models/SearchModel");
var ResultsContainerModel= require("./ResultsContainerModel");

var _PROP_SEARCH_ = "SEARCH";
var _PROP_RESULTS_CONTAINER_   = "SERCH_RESULTS";

var PageModel= Backbone.Model.extend({

    defaults: function() {
        var defaults= {};
        defaults[_PROP_SEARCH_]= new SearchModel();
        defaults[_PROP_RESULTS_CONTAINER_]= new ResultsContainerModel();
        return defaults;
    },

}, {
    propSearch: _PROP_SEARCH_,
    propResultsContainer: _PROP_RESULTS_CONTAINER_
});

module.exports= PageModel;