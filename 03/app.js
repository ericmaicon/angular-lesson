(function() {
    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = [
            {
                name: 'Dodecahedron',
                price: 2.95,
                description: ' . . .',
                images: [
                    'images/test-full.png',
                    'images/test-thumb.png'
                ],
                reviews: [
                    {
                        stars: 5,
                        body: "I love this product!",
                        author: 'joe@thomas.com'
                    },
                    {
                        stars: 3,
                        body: "I don't love this product!",
                        author: 'jack@thomas.com'
                    }
                ]
            },
            {
                name: 'Pentagonal Gem',
                price: 5.95,
                description: ' . . .',
                images: [
                    'images/test-full.png',
                    'images/test-thumb.png'
                ],
                reviews: [
                    {
                        stars: 5,
                        body: "I love this product!",
                        author: 'joe@thomas.com'
                    }
                ]
            }
        ];
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

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });
})();