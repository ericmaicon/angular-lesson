(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('TabController', function(){
        this.tab = 1;

        this.setTab = function(newValue){
            this.tab = newValue;
        };

        this.isSet = function(tabName){
            return this.tab === tabName;
        };
    });

    var gems = [
        {
                name: 'Dodecahedron',
                price: 2.95,
                description: ' . . .',
                images: [
                    'images/test-full.png',
                    'images/test-thumb.png'
                ]
        },
        {
                name: 'Pentagonal Gem',
                price: 5.95,
                description: ' . . .',
                images: [
                    'images/test-full.png',
                    'images/test-thumb.png'
                ]
        }
    ];
})();