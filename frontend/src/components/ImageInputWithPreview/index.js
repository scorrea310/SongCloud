import { useRef, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import './ImageInputWithPreview.css';
import ButtonWithIcon from '../ButtonWithIcon';


const ImageInputWithPreview = ({
    index,
    src,
    onChange,
    onClick,
    error = null,
}) => {

    const [isVisible, setIsVisible] = useState(false);

    const hiddenInput = useRef(null);
    const handleClick = (e) => {
        hiddenInput.current.click();
    };

    const gridBlockStyle = {
        backgroundImage: `url(${src})`,
    };

    return (
        <div
            className={`grid-block grid-block-${index}`}
            style={src && gridBlockStyle}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {!src && (
                <div className="icon-container" onClick={handleClick}>
                    <div className="icon file-upload-icon">
                        <FaCamera />
                    </div>
                    <p className="form-label">Add a song cover</p>
                </div>
            )}
            {isVisible && (
                <div className="grid-block-icons">
                    <ButtonWithIcon
                        className={'file-input-btn' + (error ? 'error-field' : '')}
                        size="small"
                        action="delete"
                        shape="square"
                        onClick={(e) => onClick(e, +index)}
                    />
                    {error && <p className="validation-error">{error}</p>}
                </div>
            )}
            <input
                type="file"
                accept=".png,.jpg,.jpeg,.gif"
                onChange={onChange}
                className="file-input hidden-btn"
                ref={hiddenInput}
            />
            {error && <p className="validation-error">{error}</p>}
        </div>
    );
}

export default ImageInputWithPreview