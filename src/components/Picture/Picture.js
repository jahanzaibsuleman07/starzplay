import React, { useState, useEffect } from "react";
import Promo from "../Landing/Promo";
import { getTredingImage } from './apis';

const Picture = () => {
    const [trendingImageUrl, setTrendingImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onGettingTredingImage = async () => {
        setIsLoading(true);

        const imageUrl = await getTredingImage();
        if (imageUrl) {
            setTrendingImageUrl(imageUrl);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        onGettingTredingImage();
    }, []);

    return (
        <Promo title="Whats trending " size={"xlarge"} isLoading={isLoading}>
            <picture>
                <img src={trendingImageUrl} alt="What's trending" />
            </picture>
        </Promo>
    );
};

export default Picture;