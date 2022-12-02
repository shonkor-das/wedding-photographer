import React from 'react';
import Choose from './Choose';
import camera from '../../../assets/icons/camera.png';
import photographer from '../../../assets/icons/photographer.png';
import portraits from '../../../assets/icons/portraits.png';

const Chooses = () => {

    const chooseData = [
        {
            id: 1,
            img: camera,
            name: 'EQUIPMENT',
            discription: 'With top-of-the-line camera equipment, editing software, and a great eye behind the camera, you’re guaranteed to receive stunning, high-quality photos everyone will love.'
        },
        {
            id: 2,
            img: photographer,
            name: 'EXPERTISE',
            discription: 'Get the most out of your photo session with someone who has knowledge of the best scenic locations in Lahaina and experience working with families and shooting events.'
        },
        {
            id: 3,
            img: portraits,
            name: 'APPROACH',
            discription: 'Unlike stuffy studio portraits where you’re pulling your hair out trying to get kids to sit still or smile on cue, let’s have fun, explore, and capture portraits that are organic and natural.'
        }
    ]

    return (
        <div className='mt-16 px-14'>
            <div className='text-center mb-5'>
                <h2 className='text-3xl font-bold'>WHY CHOOSE FRANK AND LISA?</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    chooseData.map(choose => <Choose
                        key={choose.id}
                        choose={choose}
                    ></Choose>)
                }
            </div>
        </div>
    );
};

export default Chooses;