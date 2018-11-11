import React from 'react';

const styles = {
    main: {
        textAlign: 'center',
    },
}
export default () => {
    return (
        <div style={styles.main}>
            <h3>404 page not found</h3>
            <p>We are sorry but the page you are looking for does not exist.</p>
        </div>
    );
}