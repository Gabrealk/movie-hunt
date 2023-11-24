import React from "react"

const MovieImage = () => {

return (
    
       
            <div className="grid grid-cols-4 gap-4">
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 1</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 2</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 3</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 4</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 5</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 6</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 7</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 8</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 9</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 10</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 11</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 12</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 13</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 14</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 15</h3>
                </div>
                <div style={{backgroundColor: `${randomcolor()}`}}>
                    <img src="//placehold.it/250" alt="" />
                    <h3>col 16</h3>
                </div>
            </div>
       
 );

 function randomcolor(){
return "#" + ((1<<24)*Math.random() | 0).toString(16);}

}
export default MovieImage;



// const MovieImage = () => {

    // return (
        
    //         <div className="grid grid-rows-4 grid-cols-4 gap-2">
    //             <div style={{backgroundColor: `${randomcolor()}`}}>01</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>02</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>03</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>04</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>05</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>07</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>08</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>09</div>
    //             <div style={{backgroundColor: `${randomcolor()}`}}>10</div>
    //         </div>
    //  );
    
    //  function randomcolor(){
    //     return "#" + ((1<<24)*Math.random() | 0).toString(16);}
    
    // };
    
    // export default MovieImage;
    