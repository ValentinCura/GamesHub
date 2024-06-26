import { useMemo } from 'react';

const useFormatPrice = () => {
    const formatPrice = (price) => {
        return price.toLocaleString('es-AR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return useMemo(() => formatPrice, []);
};

export default useFormatPrice;
