

const MenuItem = ({item}) => {

    const {name, image,price, recipe} = item;


    return (
        <div>
            <img className="w-[120px]" src={image} alt="" />
            <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;