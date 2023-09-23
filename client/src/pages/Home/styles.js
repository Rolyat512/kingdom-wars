const styles = {
    mainContainer: {
        width: "100%", 
        height: '90vh',
        background: '#ffebee',
        // display: 'column',
        justifyContent: 'center',
        

    },
    skillBox: {
        border: '1px solid',
        width: '300px',
        height: '300px',
        color: 'black'
    },
    button: {
        backgroundColor: 'red',
        height: '70px',
        width: '500px',
        margin: '10px',
        ':hover': {
            backgroundColor: '#3c52b2',
            boxShadow: '1px solid',
        },
        ':active': {
            boxShadow: '1px solid',
            backgroundColor: '#ADD8E6',
        }
       
    },
    
}

export default styles;