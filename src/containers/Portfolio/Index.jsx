import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { useState } from 'react';
import PageHeaderContent from "../../components/PageHeaderContent/Index";
import Imageone from '../../images/Image1.webp';
import ImageTwo from '../../images/ImageTwo.jpg';
import Imagethree from '../../images/Imagethree.jpg';
import "./style.scss";

const portfolioData = [
    {
        id: 2,
        name: "Health Connect",
        image: Imageone,
        link: 'https://github.com/user/health-connect'   // Insert actual GitHub link here
    },
    {
        id: 3,
        name: "Dashboards",
        image: Imagethree,
        link: 'https://github.com/user/dashboards'  // Insert actual GitHub link here
    },
    {
        id: 2,
        name: "Ecommerce",
        image: ImageTwo,
        link: 'https://github.com/user/ecommerce'   // Insert actual GitHub link here
    }
];

const filterData = [
    {
        filterID: 1,
        label: 'All'
    },
    {
        filterID: 2,
        label: 'Development'
    },
    {
        filterID: 3,
        label: 'Analytics/Dashboards'
    }
];

const Portfolio = () => {
    const [filteredvalue, setfilteredValue] = useState(1);
    const [hoveredValue, setHoverValue] = useState(null);

    function handleFilter(currentId) {
        setfilteredValue(currentId);
    };

    function handleHover(index) {
        setHoverValue(index);
    }

    const handleVisitClick = (link) => {
        window.open(link, "_blank");  // Open the GitHub link in a new tab
    };

    const filteredItems = filteredvalue === 1 ? portfolioData :
        portfolioData.filter(item => item.id === filteredvalue);

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item => (
                            <li 
                                className={item.filterID === filteredvalue ? 'active' : ''} 
                                onClick={() => handleFilter(item.filterID)} 
                                key={item.filterID}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item, index) => (
                            <div
                                className="portfolio__content__cards__item"
                                key={`cardItems${item.name.trim()}`}
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleHover(null)}
                            >
                                <div className="portfolio__content__cards__item__img-wrapper">
                                    <img alt="dummy data" src={item.image} />
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button onClick={() => handleVisitClick(item.link)}>Visit</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
