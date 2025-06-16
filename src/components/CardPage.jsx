import Card from "./Card";


const CardPage = ({ products, Title }) => {

    return (
        <div className="py-14 border-b-4 border-gray-400">
            <h2 className="text-xl font-semibold underline">{Title}:-</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
                {products.map((product) => (<Card key={product.id} product={product} />))}
            </div>
        </div>
    )
}

export default CardPage;
