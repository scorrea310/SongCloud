import { GrNext, GrPrevious, GrEdit } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';
import './ButtonWithIcon.css';

const buttonReducer = (action) => {
    switch (action) {
        case 'next':
            return <GrNext />;
        case 'previous':
            return <GrPrevious />;
        case 'edit':
            return <GrEdit />;
        case 'delete':
            return <AiFillDelete />;
        default:
            return null;
    }
};

const ButtonWithIcon = ({ className, size, action, shape, onClick = null }) => {
    const icon = buttonReducer(action);

    return (
        <button
            className={`${shape}-btn ${shape}-btn-${size} ${className}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default ButtonWithIcon;
