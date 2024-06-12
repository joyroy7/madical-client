import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import feturedImg from '../../../assets/Home/fetured.jpg';
import './featured.css';


const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading={"Medical Camp Management System"}
            heading={"Fetured"}
            ></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-60 justify-center items-center py-20 px-20 ">
                <div>
                    <img src={feturedImg} alt=""/>
                </div>
                <div className="md:ml-10">
                    <p>Fub 20, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nostrum sunt consectetur id vero cumque iusto beatae adipisci odio fugit temporibus tempora saepe nulla consequuntur est quas, itaque atque excepturi ipsam cum. Repellat quo aperiam unde obcaecati. Voluptas perspiciatis ipsum veniam eveniet? Quasi nihil id numquam vitae explicabo consequatur et.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;