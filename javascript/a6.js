var products=[
    {
        name: "Juicy Couture Juicy Quilted T..",
        studio: "STUDIO DESIGN",
        photo: "image/product-1.jpg",
        oldPrice: "€18.90",
        currentPrice: "€34.21",
        discountPrice: "-5%"
    },
    {
        name: "New Balance Fresh Foam Ka..",
        studio: "STUDIO DESIGN",
        photo: "image/product-2.jpg",
        oldPrice: "€18.90",
        currentPrice: "€15.12",
        discountPrice: "-20%"
    },
    {
        name: "Brixton Patrol All Terrain..",
        studio: "GRAPHIC CONRNER",
        photo: "image/product-3.jpg",
        oldPrice: "€18.90",
    },
    {
        name: "Juicy Couture Tricot Logo S..",
        studio: "GRAPHIC CONRNER",
        photo: "image/product-4.jpg",
        oldPrice: "€18.90",
    },
    {
        name: "New Balance Arishi Sport V1\n",
        studio: "DIO DESIGN",
        photo: "image/product-5.jpg",
        oldPrice: "€18.90",
    },
    {
        name: "Fila Locker Room Varsit...",
        studio: "GRAPHIC CONRNER",
        photo: "image/product-6.jpg",
        oldPrice: "€18.90",
    },
    {
        name: "Water And Wind Resista..",
        studio: "STUDIO DESIGN",
        photo: "image/product-7.jpg",
        oldPrice: "€18.90",
    },
    {
        name: "New Luxury Men's Slim Fi...",
        studio: "STUDIO DESIGN",
        photo: "image/product-8.jpg",
        oldPrice: "€29.90",
    },
    {
        name: "Originals Kaval Win...",
        studio: "STUDIO DESIGN",
        photo: "image/product-9.jpg",
        oldPrice: "€23.90",
        currentPrice: "€21.51",
        discountPrice: "-10%"
    },
    {
        name: "Brixton Patrol All Terra...",
        studio: "STUDIO DESIGN",
        photo: "image/product-10.jpg",
        oldPrice: "€18.90",
    },
    {
        name: "Madden By Steve Madden C...",
        studio: "STUDIO DESIGN",
        photo: "image/product-11.jpg",
        oldPrice: "€11.90",
        currentPrice: "€10.12",
        discountPrice: "-15%"
    },
    {
        name: "Juicy Couture Juicy Quilted T..",
        studio: "STUDIO DESIGN",
        photo: "image/product-12.jpg",
        oldPrice: "€35.90",
        currentPrice: "€34.11",
        discountPrice: "-5%"
    },
    {
        name: "Juicy Couture Juicy Quilted T..",
        studio: "STUDIO DESIGN",
        photo: "image/product-1.jpg",
        oldPrice: "€18.90",
        currentPrice: "€34.21",
        discountPrice: "-5%"
    },
    {
        name: "New Balance Fresh Foam Ka..",
        studio: "STUDIO DESIGN",
        photo: "image/product-2.jpg",
        oldPrice: "€18.90",
        currentPrice: "€15.12",
        discountPrice: "-20%"
    },
    {
        name: "Brixton Patrol All Terra...",
        studio: "GRAPHIC CONRNER",
        photo: "image/product-15.jpg",
        oldPrice: "€18.90",
    },
    {
        name: "Juicy Couture Tricot Log...",
        studio: "GRAPHIC CONRNER",
        photo: "image/product-516.jpg",
        oldPrice: "€18.90",
    },
]
products.map(function (p) {
    var div_html="<div class=\"card\">\n" +
        "                <div class=\"list-product\">\n" +
        "                    <div class=\"img-block\">\n" +
        "                        <a href=\"#\">\n" +
        "                            <img class=\"img-product\" src=\""+p.photo+"\" alt=\"\">\n" +
        "                        </a>\n" +
        "                    </div>\n" +
        "                    <div class=\"product-flag\">New</div>\n" +
        "                    <div class=\"product-decs\">\n" +
        "                        <p>"+p.studio+"</p>\n" +
        "                        <h2><a href=\"#\">"+p.name+"</a></h2>\n" +
        "                        <div class=\"rating-product\">\n" +
        "                            <i class=\"fas fa-star\"></i>\n" +
        "                            <i class=\"fas fa-star\"></i>\n" +
        "                            <i class=\"fas fa-star\"></i>\n" +
        "                            <i class=\"fas fa-star\"></i>\n" +
        "                            <i class=\"fas fa-star\"></i>\n" +
        "                        </div>\n" +
        "                        <div class=\"pricing-meta\">\n" +
        "                            <ul>\n" +
        "                                <li class=\"old-price\">"+p.oldPrice+"</li>\n" +
        "                                <li class=\"current-price\">"+p.currentPrice+"</li>\n" +
        "                                <li class=\"discount-price\">"+p.discountPrice+"</li>\n" +
        "                            </ul>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>";
    document.getElementById("products").innerHTML+= div_html;
});