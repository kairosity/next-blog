import SkipToMain from './SkipToMain';

// An array of quotes to fill the blog article headers with.
const quotes = [
    ["Good health is not something we can buy. However, it can be an extremely valuable savings account.", "Anne Wilson Schaef"],
    ["There's nothing more important than good health - that's our principal capital asset.", "Arlen Specter"],
    ["A healthy outside starts from the inside", "Robert Urich"],
    ["Sleep is that golden chain that ties health and our bodies together", "Thomas Dekker"],
    ["I believe the greatest gift you can give your family and the world is a healthy you.", "Joyce Meyer" ]
];


const QuoteHeader = ({id}) => {

    let quote;
    let quoteAuthor;
    switch (id % 5){
        case 0:
            quote = quotes[0][0];
            quoteAuthor = quotes[0][1];
            break;
        case 1:
            quote = quotes[1][0];
            quoteAuthor = quotes[1][1];
            break;
        case 2:
            quote = quotes[2][0];
            quoteAuthor = quotes[2][1];
            break;
        case 3:
            quote = quotes[3][0];
            quoteAuthor = quotes[3][1];
            break;
        case 4:
            quote = quotes[4][0];
            quoteAuthor = quotes[4][1];
            break;
    }

    return ( 
        <section class="blog-post-header">
            <div class="row">
                <div class="header-bg d-flex align-items-center">
                    <SkipToMain />
                        <div class="container d-flex flex-column ">
                            <h1 class="align-self-center">{ quote }</h1>
                            <p class="align-self-end">- { quoteAuthor } -</p>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default QuoteHeader;