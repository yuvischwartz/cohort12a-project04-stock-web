import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className={'grid grid-cols-12'}>
            <div className={'col-span-12 border p-3'}>
          <h1 className={'main-title text-center font-bold'}>Paper Trader</h1>
          <h1 className={'p-text text-right pr-20'}>Welcome, Username</h1>
        </div>
        
            {/* <div className={'col-span-12 border p-3'}>
              <h1 className={'main-title text-center font-bold'}>Paper Trader</h1>
        </div> */}
        
        <div className={'col-span-12 md:col-span-6 border p-5'}>
         {/* Box 1 */}
              <h1 className={'text-2xl text-center font-bold'}></h1>
          

              <div className={'grid grid-cols-12'}>
                <div className={'col-span-12 border p-3'}>SEARCH</div>
               <div className={'col-span-12 md:col-span-6 border p-3'}>
                 {/* Box 4 */}
                <h1 className={'sub-title'}>BHP - BHP Group Limited</h1>
              </div>
            <div className={'col-span-12 md:col-span-6 border p-3'}>
              {/* Box 5 */}
          
              <div className={'col-span-12 md:col-span-6 flex justify-center'}>
                  
                    <button className={'btn bg-blue-600 hover:bg-blue-500 m-2 rounded '}>Buy</button>
                  
                    <button className={'btn bg-red-600 hover:bg-red-500 m-2 rounded'}>Sell</button>
                </div>
            </div>
            {/* Box 6 */}
                <div className={'col-span-12 border p-3'}></div>
              </div>
            </div>
        
    

        <div className={'col-span-12 md:col-span-6 border p-5'}>
          {/* Box 2 */}
            <h1 className={'sub-title'}>Portfolio</h1>
            <table className={'border w-full m-2'}>
              <tr className={'border sub-title2 bg-gray-100'}>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Current Value</th>
                <th>Buy/Sell</th>
              </tr>
              <tr className={'border p-text'}>
                <td>BHP</td>
                <td> </td>
                <td> </td>
              </tr>
              <tr className={'border p-text'}>
                <td>NAB</td>
                <td> </td>
                <td> </td>
            </tr>
            <tr className={'border p-text'}>
                <td>Cash</td>
                <td> </td>
                <td> </td>
              </tr>
          </table>   
          
          
            </div>
      </div>
      
    </>
  );
}

export default App;
