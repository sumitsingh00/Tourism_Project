import Card from './Card'
function Tours({tours, removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        // pure ke pure (...tour) wala single object pass kr di 
                        //If you have an object and want to pass all the properties as separate prop, write it like this:
                        // <MyJsx {...commonProps} />
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;