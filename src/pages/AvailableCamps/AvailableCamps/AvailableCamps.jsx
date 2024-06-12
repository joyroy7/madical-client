import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

import coverImg from '../../../assets/Home/Cover.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../componentes/SectionTitle/SectionTitle';
import ManuCategory from '../manuCategory/ManuCategory';

const AvailableCamps = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
   



    return (

        <div>
            <Helmet>
                <title>
                Available Camps
                </title>
            </Helmet>
            <Cover img={coverImg} title="Our Camps"></Cover>

            <SectionTitle
            subHeading='dont miss' heading='todayss offer'
            ></SectionTitle>

            <ManuCategory items={dessert}></ManuCategory>
        


        </div>

    );
};

export default AvailableCamps;