import Image from 'next/image';
import style from './carousel.module.css';
import barber from '../public/images/carousel/thebarbershop.png';
import food from '../public/images/carousel/foods.png';
import octodo from '../public/images/carousel/octodo.png';
import { useEffect, useState } from 'react';

export default function Carousel() {

    const images = [barber, food, octodo];
    const links = ["https://thebarbershop.vercel.app/", "https://henryfoods.vercel.app/", "https://octodo.vercel.app/"];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [intervalValue, setIntervalValue] = useState(3000);

    const toggleIntervalValue = () => {
        (intervalValue == 3000) ? setIntervalValue(500000) : setIntervalValue(3000);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, intervalValue);
        return () => clearInterval(interval);
    });

    const previous = () => {
        setLoaded(false);
        setTimeout(() => {
            (selectedIndex === 0) ? setSelectedIndex(images.length - 1) : setSelectedIndex(selectedIndex - 1)
        }, 500);
    };

    const next = () => {
        setLoaded(false);
        setTimeout(() => {
            (selectedIndex === (images.length - 1)) ? setSelectedIndex(0) : setSelectedIndex(selectedIndex + 1)
        }, 500);
    };

    return (
        <div className={style.carousel}>
            {/* <button onClick={() => previous()}>{'<'}</button>
            <button onClick={() => next()}>{'>'}</button> */}
            <a target="_blank" href={links[selectedIndex]} rel="noopener noreferrer">
                <Image
                    className={loaded ? `${style.loaded}` : `${style.carouselImg}`}
                    src={images[selectedIndex]}
                    alt=""
                    onLoad={() => setLoaded(true)}
                    onMouseEnter={() => toggleIntervalValue()}
                    onMouseLeave={() => toggleIntervalValue()}
                />
            </a>
        </div>)
}