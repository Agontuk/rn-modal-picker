import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const Props = {
    title: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])).isRequired,
    selectedValue: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]).isRequired,
    valueExtractor: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired
};
