import MenuItem from "../../Shared/MenuItem/MenuItem";


const ManuCategory = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap">
    {
       items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
    }
</div>
        </div>
    );
};

export default ManuCategory;