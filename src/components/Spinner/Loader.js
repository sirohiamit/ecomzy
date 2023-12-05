import { useState } from 'react';
import './Loader.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
function Loader() {
    const loading = useSelector((state) => state.loader.loading);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(loading);
    }, [loading])

    return (
        <>
            {isLoading && (
                <div className='loader-container'>
                    <div className="loader"></div>
                </div>
            )}
        </>
    )
}
export default Loader
